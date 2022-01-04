import React from 'react'
import "./Containertwo.css";
import { useInView } from "react-intersection-observer";

const Containertwo = ({ imageSrce, title, subtitle, flipped }) => {

    const { ref, inView } = useInView({
      
      });
    const renderContent = () => {

        if (!flipped) {
            return <>
            
        <img src={imageSrce} alt="picture" className="container_image" />
        <div className="container__content">
        
            <h1 className="container_title">{title}</h1>
           
            <p className="text2">{subtitle}</p>
            
        </div>
        
        </>;
        } else {
            
            return (
             <>
             <div className='sirkeltwo'>
            <span className="circletwo">2</span>
            <span className='dots2'></span>
            </div>
            <div className="container__content">
            
            <h1 className="container__title">{title}</h1>
         
            <p className="text2">{subtitle}    <img src={imageSrce} alt="picture" className="container_image" /></p>
        
         
          
               
           
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

export default Containertwo