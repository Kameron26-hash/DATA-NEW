import React, { useMemo, useState } from 'react';
import { Container, Box, Typography, Paper, Grid, Card, CardContent, Slider, FormControl, FormLabel, Stack, Chip } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import heatIsland from '../data/heat_island_data.json';
import vegetation from '../data/vegetation_index.json';
import airQuality from '../data/air_quality_data.json';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const clamp = (val, min, max) => Math.min(Math.max(val, min), max);

const Simulation = () => {
  const [greenRoofs, setGreenRoofs] = useState(100); // unidades
  const [corridorKm, setCorridorKm] = useState(5); // km
  const [emissionReduction, setEmissionReduction] = useState(10); // %
  const [vegetationProgram, setVegetationProgram] = useState(10); // % aumento cobertura

  const baseline = useMemo(() => {
    const year = '2023';
    const avg = (arr) => arr.reduce((a, b) => a + b, 0) / (arr.length || 1);
    const temps = heatIsland.features.map(f => f.properties.temperature[year]).filter(v => typeof v === 'number');
    const ndvis = vegetation.features.map(f => f.properties.ndvi[year]).filter(v => typeof v === 'number');
    const pm25s = airQuality.features.map(f => f.properties.pm25[year]).filter(v => typeof v === 'number');
    return {
      temperature: avg(temps) || 30,
      ndvi: avg(ndvis) || 0.3,
      pm25: avg(pm25s) || 60,
      year: 2023,
    };
  }, []);

  const simulation = useMemo(() => {
    // Modelo simple basado en literatura y relaciones del prototipo:
    // - Cada 0.1 de NDVI reduce ~1.2°C la temperatura superficial.
    // - Reducción de emisiones del tráfico: 1% -> ~0.8% reducción de PM2.5.
    // - Incremento de vegetación también reduce PM2.5 (~0.5% por 0.1 NDVI).

    const ndviDeltaFromRoofs = (greenRoofs / 100) * 0.01; // 100 techos -> +0.01 NDVI
    const ndviDeltaFromCorridors = corridorKm * 0.005; // 1 km -> +0.005 NDVI
    const ndviDeltaFromProgram = (vegetationProgram / 100) * 0.2; // 100% programa -> +0.2 NDVI
    const ndviDelta = ndviDeltaFromRoofs + ndviDeltaFromCorridors + ndviDeltaFromProgram;

    const ndviSim = clamp(baseline.ndvi + ndviDelta, 0, 1);
    const tempChange = -12 * ndviDelta; // °C
    const tempSim = clamp(baseline.temperature + tempChange, -50, 80);

    const pm25FactorEmission = 1 - (emissionReduction / 100) * 0.8; // 0.8% por 1%
    const pm25FactorVegetation = 1 - (ndviDelta * 0.5); // 0.5% por 0.1 NDVI -> 5% por 1 NDVI
    const pm25Sim = clamp(baseline.pm25 * pm25FactorEmission * pm25FactorVegetation, 0, 1000);

    const tempImprovementPct = baseline.temperature > 0 ? clamp(((baseline.temperature - tempSim) / baseline.temperature) * 100, 0, 100) : 0;
    const ndviImprovementPct = baseline.ndvi > 0 ? clamp(((ndviSim - baseline.ndvi) / baseline.ndvi) * 100, 0, 300) : 0;
    const pm25ImprovementPct = baseline.pm25 > 0 ? clamp(((baseline.pm25 - pm25Sim) / baseline.pm25) * 100, 0, 100) : 0;

    const wellbeingIndex = clamp(0.4 * tempImprovementPct + 0.3 * ndviImprovementPct + 0.3 * pm25ImprovementPct, 0, 100);

    return {
      ndviSim,
      tempSim,
      pm25Sim,
      tempImprovementPct,
      ndviImprovementPct,
      pm25ImprovementPct,
      wellbeingIndex,
    };
  }, [baseline, greenRoofs, corridorKm, emissionReduction, vegetationProgram]);

  const chartData = useMemo(() => ({
    labels: ['Temp ↓%', 'NDVI ↑%', 'PM2.5 ↓%', 'Bienestar'],
    datasets: [
      {
        label: 'Impacto del escenario',
        data: [simulation.tempImprovementPct, simulation.ndviImprovementPct, simulation.pm25ImprovementPct, simulation.wellbeingIndex],
        backgroundColor: ['#ef5350', '#66bb6a', '#42a5f5', '#ab47bc'],
      },
    ],
  }), [simulation]);

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Impacto del Escenario vs. Baseline (Neiva)' },
    },
    scales: {
      y: { beginAtZero: true, max: 100 }
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 3 }}>
      <Typography variant="h4" gutterBottom>
        Simulación de Impacto (Neiva)
      </Typography>

      <Paper sx={{ p: 2, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Parámetros del Escenario
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <FormLabel>Techos Verdes (unidades)</FormLabel>
              <Slider value={greenRoofs} min={0} max={500} step={10} onChange={(_, v) => setGreenRoofs(v)} valueLabelDisplay="auto" />
            </FormControl>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <FormLabel>Corredores Verdes (km)</FormLabel>
              <Slider value={corridorKm} min={0} max={30} step={1} onChange={(_, v) => setCorridorKm(v)} valueLabelDisplay="auto" />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <FormLabel>Reducción de Emisiones de Tráfico (%)</FormLabel>
              <Slider value={emissionReduction} min={0} max={50} step={1} onChange={(_, v) => setEmissionReduction(v)} valueLabelDisplay="auto" />
            </FormControl>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <FormLabel>Programa de Vegetación (+% cobertura)</FormLabel>
              <Slider value={vegetationProgram} min={0} max={50} step={1} onChange={(_, v) => setVegetationProgram(v)} valueLabelDisplay="auto" />
            </FormControl>
          </Grid>
        </Grid>
      </Paper>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Comparación Baseline vs Escenario
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="subtitle2">Temperatura superficial (°C)</Typography>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Chip label={`Base: ${baseline.temperature.toFixed(1)}`} color="default" />
                      <Chip label={`Escenario: ${simulation.tempSim.toFixed(1)}`} color="primary" />
                    </Stack>
                    <Typography variant="body2" sx={{ mt: 1 }}>Mejora: {simulation.tempImprovementPct.toFixed(1)}%</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="subtitle2">Índice de Vegetación (NDVI)</Typography>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Chip label={`Base: ${baseline.ndvi.toFixed(2)}`} color="default" />
                      <Chip label={`Escenario: ${simulation.ndviSim.toFixed(2)}`} color="success" />
                    </Stack>
                    <Typography variant="body2" sx={{ mt: 1 }}>Mejora: {simulation.ndviImprovementPct.toFixed(1)}%</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="subtitle2">PM2.5 (µg/m³)</Typography>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Chip label={`Base: ${baseline.pm25.toFixed(0)}`} color="default" />
                      <Chip label={`Escenario: ${simulation.pm25Sim.toFixed(0)}`} color="info" />
                    </Stack>
                    <Typography variant="body2" sx={{ mt: 1 }}>Mejora: {simulation.pm25ImprovementPct.toFixed(1)}%</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="subtitle2">Índice de Bienestar Ambiental</Typography>
                    <Chip label={`${simulation.wellbeingIndex.toFixed(1)} / 100`} color="secondary" />
                    <Typography variant="body2" sx={{ mt: 1 }}>Ponderaciones: Temp 40%, NDVI 30%, PM2.5 30%</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>Impacto del Escenario</Typography>
            <Bar options={chartOptions} data={chartData} />
          </Paper>
        </Grid>
      </Grid>

      <Paper sx={{ p: 2, mt: 3 }}>
        <Typography variant="h6" gutterBottom>Notas y Supuestos (datos NASA)</Typography>
        <Typography variant="body2" paragraph>
          Baseline calculado con datos demostrativos (2023) de NDVI (Landsat), temperatura superficial (MODIS/Landsat) y NO2/PM2.5 (Sentinel-5P/CAMS). Los coeficientes
          de impacto se basan en relaciones observadas: ΔNDVI=0.1 → ΔTemp≈-1.2°C; 1% reducción de emisiones → ≈0.8% reducción de PM2.5; vegetación mejora decantación
          de partículas finas. Para operación real, sustituya los JSON por exportaciones GeoJSON basadas en AOI de Neiva y series temporales.
        </Typography>
      </Paper>
    </Container>
  );
};

export default Simulation;