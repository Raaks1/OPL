import React from 'react'

import { useInView } from "react-intersection-observer";
import "./Lærlinger.css";



const Lærlinger = ({ lærlingBilde, title, subtitle, flipped }) => {
    const { ref, inView } = useInView({
       
      });
    const renderContent = () => {

        if (!flipped) {
            return <>
            
        <img src={lærlingBilde} alt="picture" className="container-image" />
        <div className="container-content">
        
            <h1 className="container-title">{title}</h1>
           
            <p className="text5">{subtitle}</p>
            
        </div>
        </>;
        } else {
            
            return (
             <>
             
            <div className="container-content">
            
            <h1 className="container-title">{title}</h1>
         
            <p className="text5">{subtitle}  <img src={lærlingBilde} alt="picture" className="container-image" /> </p>
           
          
               
           
        </div>
       
        
             </>
        
            );
        }
    };



  return (
    <div className={inView ? "container container--zoom" : "container"} ref={ref}> {renderContent()}
      
    </div>
  );
};

export default Lærlinger