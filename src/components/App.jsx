import React from "react";
import Header from "./Header";
import Note from './Note'
import History from "./History";
import {BrowserRouter as Router, Route} from 'react-router-dom';
function App() {
  return (
    <Router>
      <div>
      <Route exact path="/" component={Note}/>
      <Route exact path="/find/:countryInURL" component = {Header}/>
      <Route exact path="/historical/:countryInURL" component={History}/>
    </div>
    </Router>
    
  );
}

export default App;
