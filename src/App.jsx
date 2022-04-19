import './App.css';
import axios from 'axios';
import Header from './components/Header';
import Home from './components/Home';
import Job from './components/Job';
import Footer from './components/Footer';
import React from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
//Your API key is: RfNibr7lLoJZ9SKS6mJShB2MUCLGW2Zuza31kkb9swM=


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
