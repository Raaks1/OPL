import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from './About'
import Kontakt from './Kontakt';
import Trainee from './Trainee';
import Company from './Company';
import {
  HashRouter as Router, Routes, Route,

  
} from "react-router-dom";



ReactDOM.render(
  <React.StrictMode>

<Router>

         <Routes >
          <Route exact path="/About" element= {<About />} />
          <Route exact path="*" element= {<App />} />
          <Route exact path="/Contact" element= {<Kontakt />} />
          <Route exact path="Trainee" element={<Trainee />} />
          <Route exact path="Company" element={<Company />} />

 
        </Routes>
     
</Router>
    
 
  

   

  
 
    
    
  </React.StrictMode>,
  document.getElementById('root')
);


