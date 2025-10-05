import React, { useState } from 'react';
import { MapContainer, TileLayer, GeoJSON, LayersControl } from 'react-leaflet';
import { Container, Box, Typography, Paper, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
// Boundaries no usados, datasets integran geometrías
import heatIslandData from '../data/heat_island_data.json';
import vegetationData from '../data/vegetation_index.json';
import airQualityData from '../data/air_quality_data.json';

const { BaseLayer, Overlay } = LayersControl;

const MapView = () => {
  const [selectedYear, setSelectedYear] = useState(2023);
  const [selectedDataset, setSelectedDataset] = useState('temperature');
  
  const center = [2.936, -75.289]; // Neiva coordinates
  
  const getColor = (value) => {
    // Color scales for different datasets
    if (selectedDataset === 'temperature') {
      return value > 35 ? '#d73027' :
             value > 30 ? '#fc8d59' :
             value > 25 ? '#fee090' :
             value > 20 ? '#e0f3f8' :
             '#91bfdb';
    } else if (selectedDataset === 'vegetation') {
      return value > 0.8 ? '#1a9850' :
             value > 0.6 ? '#66bd63' :
             value > 0.4 ? '#a6d96a' :
             value > 0.2 ? '#fdae61' :
             '#d73027';
    } else if (selectedDataset === 'airquality') {
      return value > 150 ? '#d73027' :
             value > 100 ? '#fc8d59' :
             value > 50 ? '#fee090' :
             value > 25 ? '#e0f3f8' :
             '#91bfdb';
    }
    return '#CCCCCC';
  };

  const style = (feature) => {
    let dataValue = 0;
    
    // Get data value based on selected dataset and year
    if (selectedDataset === 'temperature') {
      dataValue = feature.properties.temperature[selectedYear] || 25;
    } else if (selectedDataset === 'vegetation') {
      dataValue = feature.properties.ndvi[selectedYear] || 0.5;
    } else if (selectedDataset === 'airquality') {
      dataValue = feature.properties.pm25[selectedYear] || 50;
    }
    
    return {
      fillColor: getColor(dataValue),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
    };
  };

  const onEachFeature = (feature, layer) => {
    let dataValue = 0;
    let unit = '';
    
    if (selectedDataset === 'temperature') {
      dataValue = feature.properties.temperature[selectedYear] || 25;
      unit = '°C';
    } else if (selectedDataset === 'vegetation') {
      dataValue = feature.properties.ndvi[selectedYear] || 0.5;
      unit = 'NDVI';
    } else if (selectedDataset === 'airquality') {
      dataValue = feature.properties.pm25[selectedYear] || 50;
      unit = 'µg/m³';
    }
    
    layer.bindPopup(
      `<strong>${feature.properties.name}</strong><br />
      Valor: ${dataValue} ${unit}<br />
      Año: ${selectedYear}`
    );
  };

  return (
    <Container maxWidth="lg" sx={{ py: 3 }}>
      <Typography variant="h4" gutterBottom>
        Visualización de Datos Geoespaciales
      </Typography>
      
      <Paper sx={{ p: 2, mb: 2 }}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel>Conjunto de Datos</InputLabel>
            <Select
              value={selectedDataset}
              label="Conjunto de Datos"
              onChange={(e) => setSelectedDataset(e.target.value)}
            >
              <MenuItem value="temperature">Temperatura Superficial</MenuItem>
              <MenuItem value="vegetation">Índice de Vegetación</MenuItem>
              <MenuItem value="airquality">Calidad del Aire (PM2.5)</MenuItem>
            </Select>
          </FormControl>
          
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel>Año</InputLabel>
            <Select
              value={selectedYear}
              label="Año"
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              <MenuItem value={2018}>2018</MenuItem>
              <MenuItem value={2019}>2019</MenuItem>
              <MenuItem value={2020}>2020</MenuItem>
              <MenuItem value={2021}>2021</MenuItem>
              <MenuItem value={2022}>2022</MenuItem>
              <MenuItem value={2023}>2023</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Paper>
      
      <MapContainer center={center} zoom={12} style={{ height: '600px', width: '100%' }}>
        <LayersControl position="topright">
          <BaseLayer checked name="OpenStreetMap">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </BaseLayer>
          <BaseLayer name="Satélite">
            <TileLayer
              attribution='&copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            />
          </BaseLayer>
          
          <Overlay checked name="Datos de Neiva">
            {selectedDataset === 'temperature' && (
              <GeoJSON 
                data={heatIslandData} 
                style={style} 
                onEachFeature={onEachFeature} 
              />
            )}
            {selectedDataset === 'vegetation' && (
              <GeoJSON 
                data={vegetationData} 
                style={style} 
                onEachFeature={onEachFeature} 
              />
            )}
            {selectedDataset === 'airquality' && (
              <GeoJSON 
                data={airQualityData} 
                style={style} 
                onEachFeature={onEachFeature} 
              />
            )}
          </Overlay>
        </LayersControl>
      </MapContainer>
      
      <Paper sx={{ p: 2, mt: 2 }}>
        <Typography variant="h6" gutterBottom>
          Leyenda
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {selectedDataset === 'temperature' && (
            <>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: 20, height: 20, bgcolor: '#d73027', mr: 1 }}></Box>
                <Typography>{'>'} 35°C (Muy caliente)</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: 20, height: 20, bgcolor: '#fc8d59', mr: 1 }}></Box>
                <Typography>30-35°C (Caliente)</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: 20, height: 20, bgcolor: '#fee090', mr: 1 }}></Box>
                <Typography>25-30°C (Moderado)</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: 20, height: 20, bgcolor: '#e0f3f8', mr: 1 }}></Box>
                <Typography>20-25°C (Fresco)</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: 20, height: 20, bgcolor: '#91bfdb', mr: 1 }}></Box>
                <Typography>{'<'} 20°C (Frío)</Typography>
              </Box>
            </>
          )}
          {selectedDataset === 'vegetation' && (
            <>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: 20, height: 20, bgcolor: '#1a9850', mr: 1 }}></Box>
                <Typography>{'>'} 0.8 (Vegetación muy densa)</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: 20, height: 20, bgcolor: '#66bd63', mr: 1 }}></Box>
                <Typography>0.6-0.8 (Vegetación densa)</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: 20, height: 20, bgcolor: '#a6d96a', mr: 1 }}></Box>
                <Typography>0.4-0.6 (Vegetación moderada)</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: 20, height: 20, bgcolor: '#fdae61', mr: 1 }}></Box>
                <Typography>0.2-0.4 (Vegetación escasa)</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: 20, height: 20, bgcolor: '#d73027', mr: 1 }}></Box>
                <Typography>{'<'} 0.2 (Suelo desnudo/Urbano)</Typography>
              </Box>
            </>
          )}
          {selectedDataset === 'airquality' && (
            <>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: 20, height: 20, bgcolor: '#d73027', mr: 1 }}></Box>
                <Typography>{'>'} 150 µg/m³ (Muy insalubre)</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: 20, height: 20, bgcolor: '#fc8d59', mr: 1 }}></Box>
                <Typography>100-150 µg/m³ (Insalubre)</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: 20, height: 20, bgcolor: '#fee090', mr: 1 }}></Box>
                <Typography>50-100 µg/m³ (Moderado)</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: 20, height: 20, bgcolor: '#e0f3f8', mr: 1 }}></Box>
                <Typography>25-50 µg/m³ (Bueno)</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: 20, height: 20, bgcolor: '#91bfdb', mr: 1 }}></Box>
                <Typography>{'<'} 25 µg/m³ (Muy bueno)</Typography>
              </Box>
            </>
          )}
        </Box>
      </Paper>
    </Container>
  );
};

export default MapView;