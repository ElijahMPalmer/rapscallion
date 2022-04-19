import './App.css';
import axios from 'axios';
import Header from './components/Header';
import Home from './components/Home';
import Job from './components/Job';
import Footer from './components/Footer';
import React from 'react';
//Your API key is: RfNibr7lLoJZ9SKS6mJShB2MUCLGW2Zuza31kkb9swM=


function App() {

  axios.get('https://data.usajobs.gov/api/search', {
    headers: {
      'Authorization-Key': 'RfNibr7lLoJZ9SKS6mJShB2MUCLGW2Zuza31kkb9swM='
    }
  })
  .then(function (response) {
    console.log(response)
    
  })
  return (
    <div >
    <Header />
    <Home />
    <Job />
    <Footer />
    </div>
  );
}

export default App;
