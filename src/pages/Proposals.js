import React from 'react';
import { Container, Box, Typography, Paper, Grid, Card, CardContent, CardMedia, Divider, Chip, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import ParkIcon from '@mui/icons-material/Park';
import AirIcon from '@mui/icons-material/Air';
import WaterDropIcon from '@mui/icons-material/WaterDrop';

const Proposals = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 3 }}>
      <Typography variant="h4" gutterBottom>
        Propuestas de Intervención para Neiva
      </Typography>
      
      <Paper sx={{ p: 2, mb: 3 }}>
        <Typography variant="h5" gutterBottom>
          Estrategia Integral: Neiva Verde y Fresca
        </Typography>
        <Typography paragraph>
          Basado en el análisis de datos de la NASA, proponemos una estrategia integral que aborda 
          simultáneamente los tres problemas identificados: islas de calor, pérdida de vegetación y 
          calidad del aire deteriorada.
        </Typography>
      </Paper>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardMedia
              component="img"
              height="160"
              image="/images/techos_verdes.svg"
              alt="Techos Verdes"
              loading="lazy"
            />
            <CardContent>
              <Typography variant="h6" component="div" gutterBottom>
                Propuesta 1: Red de Techos y Muros Verdes
              </Typography>
              
              <Chip label="Prioridad Alta" color="error" sx={{ mb: 2 }} />
              
              <Typography variant="body2" paragraph>
                Implementación de techos y muros verdes en edificios públicos y privados del centro de la ciudad, 
                priorizando La Candelaria donde los datos muestran las temperaturas más altas y menor vegetación.
              </Typography>
              
              <Divider sx={{ my: 1 }} />
              <Typography variant="subtitle2" gutterBottom>
                Beneficios basados en datos:
              </Typography>
              
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <ParkIcon fontSize="small" color="success" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Reducción de temperatura superficial de 2-3°C" 
                    secondary="Según datos de Landsat en ciudades con programas similares"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <AirIcon fontSize="small" color="info" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Filtración de hasta 20% de partículas PM2.5" 
                    secondary="Basado en mediciones de MODIS en áreas urbanas vegetadas"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <WaterDropIcon fontSize="small" color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Retención de agua de lluvia de hasta 70%" 
                    secondary="Mitigando inundaciones en temporada de lluvias"
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardMedia
              component="img"
              height="160"
              image="/images/corredores_verdes.svg"
              alt="Corredores Verdes"
              loading="lazy"
            />
            <CardContent>
              <Typography variant="h6" component="div" gutterBottom>
                Propuesta 2: Corredores Verdes Urbanos
              </Typography>
              
              <Chip label="Prioridad Media" color="warning" sx={{ mb: 2 }} />
              
              <Typography variant="body2" paragraph>
                Creación de corredores verdes que conecten los parques existentes, priorizando las rutas 
                que atraviesan zonas con NDVI crítico (menor a 0.2) según los datos de vegetación analizados.
              </Typography>
              
              <Divider sx={{ my: 1 }} />
              <Typography variant="subtitle2" gutterBottom>
                Beneficios basados en datos:
              </Typography>
              
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <ParkIcon fontSize="small" color="success" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Aumento del NDVI en 0.15-0.25 puntos" 
                    secondary="En las áreas de intervención, según proyecciones basadas en datos Landsat"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <AirIcon fontSize="small" color="info" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Creación de microclimas con temperaturas 1.5°C menores" 
                    secondary="Según mediciones térmicas de NASA en corredores verdes existentes"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <WaterDropIcon fontSize="small" color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Mejora de la biodiversidad urbana en 35%" 
                    secondary="Creando hábitats conectados para fauna urbana"
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardMedia
              component="img"
              height="160"
              image="/images/zbe.svg"
              alt="Zonas de Bajas Emisiones"
              loading="lazy"
            />
            <CardContent>
              <Typography variant="h6" component="div" gutterBottom>
                Propuesta 3: Zonas de Bajas Emisiones
              </Typography>
              
              <Chip label="Prioridad Alta" color="error" sx={{ mb: 2 }} />
              
              <Typography variant="body2" paragraph>
                Implementación de Zonas de Bajas Emisiones (ZBE) en el centro de la ciudad, donde los datos 
                de Sentinel-5P muestran las mayores concentraciones de NO₂ y los datos MODIS indican niveles 
                críticos de PM2.5.
              </Typography>
              
              <Divider sx={{ my: 1 }} />
              <Typography variant="subtitle2" gutterBottom>
                Beneficios basados en datos:
              </Typography>
              
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <AirIcon fontSize="small" color="info" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Reducción de PM2.5 en 30-40%" 
                    secondary="Basado en datos de ciudades con ZBE implementadas"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ParkIcon fontSize="small" color="success" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Disminución de NO₂ en hasta 45%" 
                    secondary="Según mediciones de Sentinel-5P en ciudades similares"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <WaterDropIcon fontSize="small" color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Mejora en salud pública: reducción de 25% en enfermedades respiratorias" 
                    secondary="Correlacionado con mejoras en calidad del aire"
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      
      <Paper sx={{ p: 2, mt: 3 }}>
        <Typography variant="h5" gutterBottom>
          Implementación Basada en Datos
        </Typography>
        
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Fases de Implementación
            </Typography>
            <List>
              <ListItem>
                <ListItemText 
                  primary="Fase 1: Proyectos Piloto (6 meses)" 
                  secondary="Implementación en zonas críticas identificadas por datos NASA: La Candelaria (centro) y áreas con NDVI < 0.2"
                />
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary="Fase 2: Expansión (12-24 meses)" 
                  secondary="Ampliación a comunas adyacentes basada en monitoreo satelital de resultados de fase 1"
                />
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary="Fase 3: Consolidación (24-36 meses)" 
                  secondary="Implementación a escala ciudad con ajustes basados en datos de monitoreo continuo"
                />
              </ListItem>
            </List>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Monitoreo y Evaluación
            </Typography>
            <List>
              <ListItem>
                <ListItemText 
                  primary="Monitoreo Satelital Continuo" 
                  secondary="Uso de datos Landsat, MODIS y Sentinel para seguimiento trimestral de indicadores"
                />
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary="Estaciones de Monitoreo Terrestre" 
                  secondary="Complementando datos satelitales con mediciones in-situ en puntos estratégicos"
                />
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary="Dashboard Público de Impacto" 
                  secondary="Visualización en tiempo real de cambios en temperatura, vegetación y calidad del aire"
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Proposals;