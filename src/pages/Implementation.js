import React from 'react';
import { Container, Box, Typography, Paper, Grid, Stepper, Step, StepLabel, StepContent, Button, Card, CardContent, Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import GroupsIcon from '@mui/icons-material/Groups';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SchoolIcon from '@mui/icons-material/School';

const Implementation = () => {
  const steps = [
    {
      label: 'Fase Piloto (Año 1)',
      description: 'Implementación inicial en zonas prioritarias de La Candelaria y El Poblado.',
      activities: [
        'Instalación de 50 techos verdes en edificios públicos',
        'Desarrollo de 2 corredores verdes piloto (3 km)',
        'Implementación de zona de bajas emisiones en el centro histórico',
        'Monitoreo satelital y terrestre de indicadores base'
      ]
    },
    {
      label: 'Fase de Expansión (Años 2-3)',
      description: 'Ampliación a otras comunas y escalamiento de intervenciones exitosas.',
      activities: [
        'Expansión a 200 techos verdes adicionales (públicos y privados)',
        'Desarrollo de 5 corredores verdes adicionales (15 km)',
        'Ampliación de zonas de bajas emisiones a comunas adyacentes',
        'Evaluación de impacto intermedio y ajustes'
      ]
    },
    {
      label: 'Fase de Consolidación (Años 4-5)',
      description: 'Institucionalización y expansión completa del programa.',
      activities: [
        'Integración en planes de ordenamiento territorial',
        'Creación de incentivos permanentes para techos verdes privados',
        'Conexión completa de red de corredores verdes (30 km)',
        'Evaluación de impacto final y planificación a largo plazo'
      ]
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 3 }}>
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h4" gutterBottom align="center">
          Plan de Implementación
        </Typography>
        <Typography variant="body1" paragraph align="center">
          Estrategia para convertir los datos y propuestas en acciones concretas para Neiva
        </Typography>
      </Paper>

      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Cronograma de Implementación
            </Typography>
            <Stepper orientation="vertical">
              {steps.map((step, index) => (
                <Step key={step.label} active={true}>
                  <StepLabel>
                    <Typography variant="h6">{step.label}</Typography>
                  </StepLabel>
                  <StepContent>
                    <Typography>{step.description}</Typography>
                    <List dense>
                      {step.activities.map((activity, i) => (
                        <ListItem key={i}>
                          <ListItemIcon>
                            <CheckCircleIcon color="primary" fontSize="small" />
                          </ListItemIcon>
                          <ListItemText primary={activity} />
                        </ListItem>
                      ))}
                    </List>
                    {index < steps.length - 1 && (
                      <Box sx={{ mb: 2 }}>
                        <Button
                          variant="text"
                          size="small"
                          sx={{ mt: 1, mr: 1 }}
                        >
                          Continuar
                        </Button>
                      </Box>
                    )}
                  </StepContent>
                </Step>
              ))}
            </Stepper>
          </Paper>
        </Grid>

        <Grid item xs={12} md={5}>
          <Paper sx={{ p: 3, mb: 3 }}>
            <Typography variant="h5" gutterBottom>
              Actores Clave y Roles
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Card variant="outlined" sx={{ mb: 2 }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <AccountBalanceIcon color="primary" sx={{ mr: 1 }} />
                      <Typography variant="h6">Gobierno Municipal</Typography>
                    </Box>
                    <Typography variant="body2">
                      • <strong>Secretaría de Medio Ambiente:</strong> Coordinación general y monitoreo ambiental<br />
                      • <strong>Secretaría de Infraestructura:</strong> Implementación de corredores verdes<br />
                      • <strong>Secretaría de Movilidad:</strong> Gestión de zonas de bajas emisiones<br />
                      • <strong>Área Metropolitana:</strong> Coordinación regional y normativa
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              
              <Grid item xs={12}>
                <Card variant="outlined" sx={{ mb: 2 }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <GroupsIcon color="primary" sx={{ mr: 1 }} />
                      <Typography variant="h6">Comunidad</Typography>
                    </Box>
                    <Typography variant="body2">
                      • <strong>Juntas de Acción Comunal:</strong> Participación en diseño y validación<br />
                      • <strong>Propietarios de edificios:</strong> Implementación de techos verdes<br />
                      • <strong>Comerciantes:</strong> Adaptación a zonas de bajas emisiones<br />
                      • <strong>Ciudadanos:</strong> Monitoreo comunitario y reportes
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              
              <Grid item xs={12}>
                <Card variant="outlined">
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <SchoolIcon color="primary" sx={{ mr: 1 }} />
                      <Typography variant="h6">Soporte Técnico</Typography>
                    </Box>
                    <Typography variant="body2">
                      • <strong>Universidades locales:</strong> Investigación y evaluación<br />
                      • <strong>NASA/SERVIR:</strong> Datos satelitales y capacitación<br />
                      • <strong>Empresas tecnológicas:</strong> Desarrollo de plataformas de monitoreo<br />
                      • <strong>ONGs ambientales:</strong> Asesoría y divulgación
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Paper>

          <Paper sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Participación Ciudadana
            </Typography>
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" gutterBottom>
                Mecanismos de Participación
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Talleres de co-creación comunitaria" 
                    secondary="Diseño participativo de intervenciones específicas para cada comuna"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Plataforma digital de monitoreo ciudadano" 
                    secondary="Reporte de problemas y seguimiento de implementación"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Comités de veeduría por comuna" 
                    secondary="Supervisión comunitaria de la ejecución del proyecto"
                  />
                </ListItem>
              </List>
            </Box>
            
            <Divider sx={{ my: 2 }} />
            
            <Typography variant="h6" gutterBottom>
              Sostenibilidad del Proyecto
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Card variant="outlined" sx={{ height: '100%' }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <AccessTimeIcon color="primary" sx={{ mr: 1 }} />
                      <Typography variant="subtitle1">Mantenimiento</Typography>
                    </Box>
                    <Typography variant="body2">
                      • Actualización anual de datos satelitales<br />
                      • Mantenimiento trimestral de infraestructura verde<br />
                      • Revisión semestral de indicadores de impacto
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card variant="outlined" sx={{ height: '100%' }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <EnergySavingsLeafIcon color="primary" sx={{ mr: 1 }} />
                      <Typography variant="subtitle1">Recursos</Typography>
                    </Box>
                    <Typography variant="body2">
                      • Presupuesto municipal (40%)<br />
                      • Cooperación internacional (30%)<br />
                      • Inversión privada (20%)<br />
                      • Fondos comunitarios (10%)
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Implementation;