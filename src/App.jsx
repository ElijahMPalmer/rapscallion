import './App.css';
import axios from 'axios';
import Header from './components/Header';
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
  hello
    <Header/>

    </div>
  );
}

export default App;
