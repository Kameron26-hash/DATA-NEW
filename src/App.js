import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import MapView from './pages/MapView';
import Analysis from './pages/Analysis';
import Proposals from './pages/Proposals';
import Implementation from './pages/Implementation';
import Simulation from './pages/Simulation';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2e7d32',
    },
    secondary: {
      main: '#1976d2',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/map" element={<MapView />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/proposals" element={<Proposals />} />
          <Route path="/implementation" element={<Implementation />} />
          <Route path="/simulation" element={<Simulation />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;