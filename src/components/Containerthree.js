import React from 'react'
import "./Containerthree.css";
import { useInView } from "react-intersection-observer";


const Containerthree = ({ imageSrcc, title, subtitle, flipped }) => {
    const { ref, inView } = useInView({
       
      });
    const renderContent = () => {

        if (!flipped) {
            return <>
            
        <img src={imageSrcc} alt="picture" className="container___image" />
        <div className="container__content">
        
            <h1 className="container_title">{title}</h1>
           
            <p className="text2">{subtitle}</p>
            
        </div>
        </>;
        } else {
            
            return (
             <>
             
            <div className="container__content">
            
            <h1 className="container__title">{title}</h1>
         
            <p className="text3">{subtitle} <div className='sirkeltre'>
            <span className="circletre">3</span>
            </div> <img src={imageSrcc} alt="picture" className="container___image" /> </p>
           
          
               
           
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

export default Containerthree