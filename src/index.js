import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from './About'
import {
  HashRouter as Router, Routes, Route,

  
} from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>

<Router>

         <Routes >
          <Route exact path="/About" element= {<About />} />
          <Route exact path="*" element= {<App />} />

 
        </Routes>
     
</Router>
    
 
  

   

  
 
    
    
  </React.StrictMode>,
  document.getElementById('root')
);


