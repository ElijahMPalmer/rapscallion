const styles = require('./App.css');
const axios = require('axios');
const React = require('react');
const Header = require('./components/Header.jsx');
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
