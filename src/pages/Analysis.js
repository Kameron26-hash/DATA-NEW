import React from 'react';
import { Container, Box, Typography, Paper, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Analysis = () => {
  // Datos para los gráficos
  const years = ['2018', '2019', '2020', '2021', '2022', '2023'];
  
  const temperatureData = {
    labels: years,
    datasets: [
      {
        label: 'Centro (La Candelaria)',
        data: [31.5, 32.1, 32.8, 33.5, 34.2, 35.1],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Periferia (Popular)',
        data: [28.5, 29.2, 29.8, 30.3, 31.1, 31.5],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  
  const vegetationData = {
    labels: years,
    datasets: [
      {
        label: 'Centro (La Candelaria)',
        data: [0.18, 0.17, 0.16, 0.15, 0.14, 0.12],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Zona Residencial (Robledo)',
        data: [0.65, 0.62, 0.58, 0.55, 0.52, 0.48],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
    ],
  };
  
  const airQualityData = {
    labels: years,
    datasets: [
      {
        label: 'Centro (La Candelaria)',
        data: [85, 92, 78, 88, 95, 102],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Periferia (Popular)',
        data: [45, 48, 42, 46, 49, 52],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Tendencia Temporal',
      },
    },
  };

  return (
    <Container maxWidth="lg" sx={{ py: 3 }}>
      <Typography variant="h4" gutterBottom>
        Análisis de Problemas Urbanos en Neiva
      </Typography>
      
      <Paper sx={{ p: 2, mb: 3 }}>
        <Typography variant="h5" gutterBottom>
          Resumen de Hallazgos
        </Typography>
        <Typography paragraph>
          El análisis de los datos de observación terrestre de la NASA para Neiva revela tres problemas urbanos críticos 
          que afectan la sostenibilidad y calidad de vida en la ciudad:
        </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="/images/islas_calor.svg"
                alt="Islas de Calor Urbanas"
                loading="lazy"
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  Islas de Calor Urbanas
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Los datos de temperatura superficial muestran un aumento constante en el centro de la ciudad, 
                  con temperaturas hasta 4°C más altas que en las zonas periféricas. La temperatura en La Candelaria 
                  ha aumentado 3.6°C en los últimos 5 años.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="/images/perdida_vegetacion.svg"
                alt="Pérdida de Vegetación"
                loading="lazy"
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  Pérdida de Vegetación
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  El índice de vegetación (NDVI) muestra una disminución constante en todas las comunas. 
                  La zona centro tiene valores críticos por debajo de 0.2, indicando casi ausencia de vegetación. 
                  Incluso zonas tradicionalmente verdes como Robledo han perdido un 26% de cobertura vegetal.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="/images/calidad_aire.svg"
                alt="Calidad del Aire"
                loading="lazy"
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  Calidad del Aire Deteriorada
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Los niveles de PM2.5 en el centro de la ciudad superan consistentemente los 80 µg/m³, 
                  muy por encima del límite recomendado por la OMS (25 µg/m³). La tendencia muestra un 
                  empeoramiento, con un aumento del 20% en los últimos 5 años.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Paper>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Temperatura Superficial (°C)
            </Typography>
            <Line options={options} data={temperatureData} />
            <Typography variant="body2" sx={{ mt: 2 }}>
              La temperatura superficial en el centro de Neiva ha aumentado a un ritmo alarmante, 
              creando una isla de calor urbana que afecta el confort térmico y aumenta el consumo energético 
              para refrigeración. Este fenómeno está directamente relacionado con la pérdida de vegetación 
              y el aumento de superficies impermeables.
            </Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Índice de Vegetación (NDVI)
            </Typography>
            <Line options={options} data={vegetationData} />
            <Typography variant="body2" sx={{ mt: 2 }}>
              La disminución del índice de vegetación es evidente en todas las zonas analizadas. 
              El centro de la ciudad presenta valores críticos (por debajo de 0.2), indicando una 
              urbanización casi completa sin espacios verdes. Incluso zonas tradicionalmente más 
              verdes como Robledo muestran una tendencia preocupante de pérdida de vegetación.
            </Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Calidad del Aire (PM2.5 µg/m³)
            </Typography>
            <Line options={options} data={airQualityData} />
            <Typography variant="body2" sx={{ mt: 2 }}>
              Los niveles de PM2.5 en el centro de Neiva superan consistentemente los límites 
              recomendados por la OMS. La contaminación del aire está relacionada con el tráfico 
              vehicular intenso, la actividad industrial y la configuración topográfica del valle, 
              que dificulta la dispersión de contaminantes.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      
      <Paper sx={{ p: 2, mt: 3 }}>
        <Typography variant="h5" gutterBottom>
          Correlación entre Problemas
        </Typography>
        <Typography paragraph>
          El análisis de los datos de la NASA revela una clara correlación entre los tres problemas identificados:
        </Typography>
        <Typography paragraph>
          <strong>1. Relación Vegetación-Temperatura:</strong> Por cada 0.1 puntos de reducción en el NDVI, 
          la temperatura superficial aumenta aproximadamente 1.2°C. Las zonas con menor vegetación coinciden 
          exactamente con las islas de calor más intensas.
        </Typography>
        <Typography paragraph>
          <strong>2. Impacto en Calidad del Aire:</strong> Las zonas con menor vegetación y mayor temperatura 
          también presentan peor calidad del aire. La vegetación actúa como filtro natural de contaminantes, 
          y su pérdida agrava la concentración de PM2.5.
        </Typography>
        <Typography paragraph>
          <strong>3. Ciclo de Retroalimentación Negativa:</strong> El aumento de temperatura genera mayor uso 
          de aire acondicionado, aumentando el consumo energético y las emisiones, lo que a su vez empeora la 
          calidad del aire y contribuye al efecto isla de calor.
        </Typography>
      </Paper>
    </Container>
  );
};

export default Analysis;