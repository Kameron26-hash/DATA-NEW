import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Neiva Sostenible
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/">Dashboard</Button>
          <Button color="inherit" component={Link} to="/map">Mapa</Button>
          <Button color="inherit" component={Link} to="/analysis">Análisis</Button>
          <Button color="inherit" component={Link} to="/proposals">Propuestas</Button>
          <Button color="inherit" component={Link} to="/implementation">Implementación</Button>
          <Button color="inherit" component={Link} to="/simulation">Simulación</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;