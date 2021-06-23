import React, { useEffect, useState } from "react";
import { Redirect, useParams,useHistory  } from 'react-router';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import './app.css';
function Header() {
  const history = useHistory();
  ///state to store data from API
  const {countryInURL} = useParams();
const [country,setData] = useState({
 name:'',
 cases: '',
 todayCases: '',
 deaths: '',
 todayDeaths: '',
 recovered: '',
 todayRecovered: '',
 active: '',
 critical: '',
 casesPerOneMillion: '',
 deathsPerOneMillion: '',
 tests: ''

})
  const url = 'https://corona.lmao.ninja/v2/countries/'+countryInURL;
  useEffect(()=>{axios.get(url).then(Response => {
    console.log(Response.data);
     setData({
      name:Response.data.country,
      cases: Response.data.cases,
      todayCases: Response.data.todayCases,
      deaths: Response.data.deaths,
      todayDeaths: Response.data.todayDeaths,
      recovered: Response.data.recovered,
      todayRecovered: Response.data.todayRecovered,
      active: Response.data.active,
      critical: Response.data.critical,
      casesPerOneMillion: Response.data.casesPerOneMillion,
      deathsPerOneMillion: Response.data.deathsPerOneMillion,
      tests: Response.data.tests
    });
  });
},[]);

  const onClickHandler = () => {
    console.log("aaya");
    let historyURL = "/historical/"+country.name;
    history.push(historyURL);
  }
  return( 
  <div className="middle">
    <div><h1>{country.name}</h1></div>
    <h2>Deaths : {country.deaths}</h2>
    <h2>Recovered : {country.recovered}</h2>
    <h2>Active Cases : {country.active}</h2>
    <h2>Tests : {country.tests}</h2>
    <div> <h2>Total Cases  : {country.cases}</h2></div>
    <Button onClick = {onClickHandler}variant="primary">Historical</Button>
  </div>
  
  )
  ;

}

export default Header;
