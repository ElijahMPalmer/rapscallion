import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Job from './components/Job';
import Footer from './components/Footer';
import React from 'react';
import { StyledEngineProvider } from '@mui/material/styles';



function App() {

  return (
    <StyledEngineProvider injectFirst>
    <div >
    <Header />
    <Home />
    <Job />
    <Footer />
    </div>
    </StyledEngineProvider>
  );
}

export default App;
