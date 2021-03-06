import React from 'react'

import { useInView } from "react-intersection-observer";
import "./Om.css";


const Om = ({ imageSrccc, title, subtitle, flipped }) => {
    const { ref, inView } = useInView({
       
      });
    const renderContent = () => {

        if (!flipped) {
            return <>
            
        <img src={imageSrccc} alt="" className="container____image" />
        <div className="container____content">
        
            <h1 className="container____title">{title}</h1>
           
            <p className="text4">{subtitle}</p>
            
        </div>
        </>;
        } else {
            
            return (
             <>
             
            <div className="container____content">
            
            <h1 className="container____title">{title}</h1>
         
            <p className="text4">{subtitle}  <img src={imageSrccc} alt="" className="container____image" /> </p>
           
          
               
           
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

export default Om