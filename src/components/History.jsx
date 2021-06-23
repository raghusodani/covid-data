import React, { useEffect, useState } from "react";
import { Redirect, useParams,useHistory  } from 'react-router';
import axios from "axios";

import * as ReactBootStrap from 'react-bootstrap';
import './app.css';
function History() {
    const history = useHistory();
    const {countryInURL} = useParams();
    const url = "https://corona.lmao.ninja/v2/historical/"+countryInURL;
    const [data,setDates] = useState({
        name :'',
        cases : {
            
        },
        deaths : {},
        recovered: {}
    });
    console.log(data);
    useEffect( ()=>{
        axios.get(url).then(Response => {
            console.log(Response.data);
            setDates({
                name : Response.data.country,
                cases : Response.data.timeline.cases,
                deaths : Response.data.timeline.deaths,
                recovered : Response.data.timeline.recovered

            });
        })
    },[]);
    let dates = (Object.keys(data.cases));
    const renderRow = (currdate,index) => {
        
        //console.log(typeof(currdate));
        return (
            <tr key={index}>
              <td>{currdate}</td>
              <td>{data.cases[currdate]}</td>
              <td>{data.deaths[currdate]}</td>
              <td>{data.recovered[currdate]}</td>
            </tr>
          );
    }
    const onClickHandler = () => {
        console.log("aaya");
        let historyURL = "/";
        history.push(historyURL);
      }
    
return(
    <div>
    <h1>{data.name}</h1>
    <ReactBootStrap.Table striped bordered hover>
      <thead>
        <tr>
          <th>Date</th>
          <th>Cases</th>
          <th>Deaths</th>
          <th>Recovered</th>
        </tr>
      </thead>
      <tbody>
        {dates.map(renderRow)}
      </tbody>
    </ReactBootStrap.Table>
    <ReactBootStrap.Button onClick = {onClickHandler}variant="primary">HomePage</ReactBootStrap.Button>
    </div>
);
}
export default History;