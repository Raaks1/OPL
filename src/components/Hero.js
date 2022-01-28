import React from 'react'
import "./Hero.css";









const Hero = ({ imageSrc, title, }) => {
  

  
  return (
  
 
    
   
  
    <div className="hero">
   
 
 <div className='con1'>
    <h1 className="hero__title">{title}</h1>
  
    <button onClick={() => {window.open("https://raaks1.github.io/OPL/#/Company", "_blank")}}
    type="button"
    
     className='btn'>Trykk Her</button>
   
   <p classID='infotext'> 
    </p>
    
    </div>
  <div className='con2'>
     <h1 className="hero__titletwo">Lærling?</h1>
     <button onClick={() => {window.open("https://raaks1.github.io/OPL/#/Trainee", "_blank")}}
    type="button"
   
    
     className='btn'>Trykk Her</button>
     <p className='infotexttwo'>Maecenas vel tellus ornare, ultrices erat sit amet, posuere mi. In hac habitasse platea dictumst.
     Pellentesque aliquet risus eget lorem egestas feugiat. Aenean ut ex nec ex gravida cursus vitae sit amet nisl. Nulla pellentesque eu eros ac tempus.
     Nulla facilisi. Mauris a tincidunt elit. Fusce lobortis vestibulum purus non vulputate. Morbi convallis lacus a eros tincidunt luctus.</p>
    
    
     </div>
    </div>
  
  );
};

export default Hero
