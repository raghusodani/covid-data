import React, { useEffect, useState } from "react";
import axios from "axios";
import * as ReactBootStrap from 'react-bootstrap';
function Note(){
  
const [all,setAll] = useState([]);

  const url = 'https://corona.lmao.ninja/v2/countries';
  useEffect(()=>{axios.get(url).then(Response => {
    console.log(Response.data);
    setAll(Response.data);
   // console.log(all);
  });
},[]);

// Method to render all country data dynamically//
 const renderCountry = (country,index) => {
  let routeURL = "/find/"+country.country;
   return(
     <tr key={index}>
      <td><a href={routeURL}>{country.country}</a></td>
      <td>{country.cases}</td>
      <td>{country.deaths}</td>
     </tr>
   )
 }
 
 return(
    <ReactBootStrap.Table striped bordered hover>
      <thead>
        <tr>
          <th>Country</th>
          <th>Active Cases</th>
          <th>Deaths</th>
        </tr>
      </thead>
      <tbody>
        {all.map(renderCountry)}
      </tbody>
    </ReactBootStrap.Table>
);
  
}

export default Note;
