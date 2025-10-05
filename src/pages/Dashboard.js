import React from 'react';
import { Container, Box, Typography, Paper, Grid, Card, CardContent, CardActions, Button, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import { Doughnut, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);

const Dashboard = () => {
  // Datos para los gráficos
  const impactData = {
    labels: ['Reducción Temperatura', 'Aumento Vegetación', 'Mejora Calidad Aire'],
    datasets: [
      {
        label: 'Impacto Proyectado (%)',
        data: [15, 25, 35],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(53, 162, 235, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(53, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const beneficiariosData = {
    labels: ['Residentes', 'Trabajadores', 'Visitantes', 'Ecosistemas'],
    datasets: [
      {
        label: 'Beneficiarios (miles)',
        data: [250, 150, 100, 50],
        backgroundColor: 'rgba(53, 162, 235, 0.6)',
        borderColor: 'rgba(53, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <Container maxWidth="lg" sx={{ py: 3 }}>
      <Paper sx={{ p: 3, mb: 3, bgcolor: '#f5f5f5' }}>
        <Typography variant="h4" gutterBottom align="center">
          Neiva Sostenible
        </Typography>
        <Typography variant="h6" gutterBottom align="center" color="text.secondary">
          Estrategias de crecimiento urbano sostenible basadas en datos de observación terrestre de la NASA
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Typography paragraph align="center">
          Este prototipo demuestra cómo los datos satelitales pueden guiar decisiones urbanas para equilibrar
          el bienestar humano con la preservación ambiental en Neiva, Colombia.
        </Typography>
      </Paper>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h5" gutterBottom>
              Resumen del Proyecto
            </Typography>
            <Typography paragraph>
              Utilizando datos de Landsat, MODIS y Sentinel-5P, hemos identificado tres problemas críticos en Neiva:
              islas de calor urbanas, pérdida de vegetación y deterioro de la calidad del aire. Nuestras propuestas
              de intervención abordan estos desafíos de manera integral.
            </Typography>
            
            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid item xs={12} sm={4}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Problemas Identificados
                    </Typography>
                    <Typography variant="body2">
                      • Temperatura +3.6°C en 5 años en el centro<br />
                      • NDVI crítico &lt;0.2 en zonas urbanas<br />
                      • PM2.5 &gt;80 µg/m³ en la zona centro
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" component={Link} to="/analysis">Ver Análisis</Button>
                  </CardActions>
                </Card>
              </Grid>
              
              <Grid item xs={12} sm={4}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Soluciones Propuestas
                    </Typography>
                    <Typography variant="body2">
                      • Red de techos y muros verdes<br />
                      • Corredores verdes urbanos<br />
                      • Zonas de bajas emisiones
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" component={Link} to="/proposals">Ver Propuestas</Button>
                  </CardActions>
                </Card>
              </Grid>
              
              <Grid item xs={12} sm={4}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Implementación
                    </Typography>
                    <Typography variant="body2">
                      • Fases: piloto, expansión, consolidación<br />
                      • Actores: gobierno, comunidad, academia<br />
                      • Monitoreo: satelital + terrestre
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" component={Link} to="/implementation">Ver Plan</Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, height: '100%' }}>
            <Typography variant="h5" gutterBottom>
              Impacto Proyectado
            </Typography>
            <Box sx={{ height: 250, display: 'flex', justifyContent: 'center' }}>
              <Doughnut 
                data={impactData} 
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: 'bottom',
                    },
                  },
                }}
              />
            </Box>
            <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 2 }}>
              Porcentaje de mejora proyectado en 5 años
            </Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h5" gutterBottom>
              Métricas de Impacto
            </Typography>
            
            <Grid container spacing={3}>
              <Grid item xs={12} md={8}>
                <Box sx={{ height: 300 }}>
                  <Bar 
                    data={beneficiariosData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          display: false,
                        },
                        title: {
                          display: true,
                          text: 'Beneficiarios Directos del Proyecto',
                        },
                      },
                    }}
                  />
                </Box>
              </Grid>
              
              <Grid item xs={12} md={4}>
                <Typography variant="h6" gutterBottom>
                  Indicadores Clave
                </Typography>
                <Box sx={{ p: 2, bgcolor: '#f5f5f5', borderRadius: 1 }}>
                  <Typography variant="body1" paragraph>
                    <strong>Ambientales:</strong>
                  </Typography>
                  <Typography variant="body2" paragraph>
                    • Reducción de temperatura: 1.5-3°C<br />
                    • Aumento de NDVI: 0.15-0.25 puntos<br />
                    • Reducción de PM2.5: 30-40%
                  </Typography>
                  
                  <Typography variant="body1" paragraph>
                    <strong>Sociales:</strong>
                  </Typography>
                  <Typography variant="body2" paragraph>
                    • Reducción de enfermedades respiratorias: 25%<br />
                    • Aumento de espacios verdes accesibles: 35%<br />
                    • Mejora en confort térmico urbano: 40%
                  </Typography>
                  
                  <Typography variant="body1" paragraph>
                    <strong>Económicos:</strong>
                  </Typography>
                  <Typography variant="body2">
                    • Ahorro energético: 15-20%<br />
                    • Valorización de propiedades: 5-10%<br />
                    • Reducción de costos en salud: $3-5M USD/año
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      
      <Box sx={{ mt: 3, textAlign: 'center' }}>
        <Button variant="contained" color="primary" component={Link} to="/map" size="large">
          Explorar Mapa Interactivo
        </Button>
      </Box>
    </Container>
  );
};

export default Dashboard;