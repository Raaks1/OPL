import React from 'react'
import "./Container.css";
import { useInView } from "react-intersection-observer";

const Container = ({ imageSrc, title, subtitle, flipped }) => {
  const { ref, inView } = useInView({

    threshold: 0.4,
  });
    const renderContent = () => {

        if (!flipped) {
            return <>
        <img src={imageSrc} alt="picture" className="container__image" />
        <div className="container__content">
            <h1 className="container__title">{title}</h1>
           
            <p className="text1">{subtitle}</p>
            <div className='sirkel'>
            <span className="circleone">1</span>
            </div>
         
        </div>
        <span className='dots'></span>
        </>;
        } else {
            
            return (
             <>
            <div className="container__content">
            <h1 className="container__title">{title}</h1>
            <p className="text1">{subtitle}</p>

        </div>
               <img src={imageSrc} alt="picture" className="container__image" />
              
        
             </>
        
            );
        }
    };



  return (
    <div className={inView ? "container container--zoom" : "container"} ref={ref}> {renderContent()}
      
    </div>
  );
};

export default Container
