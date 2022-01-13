import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from './About'
import {
  BrowserRouter as Router, Route, Routes,
  

  
} from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <Router>
    
  
   <Routes>
      <Route exact path="*" element={<App />} />
     
     <Route path="/About" element={<About />} />
    
   
   
   </Routes>
    
       </Router>
   
  </React.StrictMode>,
  document.getElementById('root')
);


