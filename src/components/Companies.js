import React from 'react'

import { useInView } from "react-intersection-observer";
import "./Companies.css";



const Companies = ({ lærlingBilde, title, subtitle, flipped }) => {
    const { ref, inView } = useInView({
       
      });
    const renderContent = () => {

        if (!flipped) {
            return <>
            
        <img src={lærlingBilde} alt="" className="container--image" />
        <div className="container--content">
        
            <h1 className="container--title">{title}</h1>
           
            <p className="text6">{subtitle}</p>
            
        </div>
        </>;
        } else {
            
            return (
             <>
             
            <div className="container--content">
            
            <h1 className="container--title">{title}</h1>
         
            <p className="text6">{subtitle}  <img src={lærlingBilde} alt="" className="container--image" /> </p>
           
          
               
           
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

export default Companies