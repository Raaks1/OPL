import React from 'react'
import './Medarbeidere.css';
/*import learning_01 from "./Images/learning-01.jpg";*/
import med4 from "../Images/med4.jpg";
import med1 from "../Images/med1.jpg";
import med2 from "../Images/med2.jpg";
import med3 from "../Images/med3.jpg";



function Medarbeidere () {

  return (
      
<div className='peons'>
    <header> Våre Medarbeidere</header>
   
        <div className='med1'>
         
        <div className='wrapper1'>
          <img className='bilde1' src={med4} alt="bilde"></img>
          <p class="img__description"><div id="navn">Per Egil</div><span id="stilling">Lærer i Nettsikkerhet</span>
          <div id="mail">Kontakt: eksempel@gmail.com</div>
          </p></div>
          <div className='wrapper2'>
          <img className='bilde2' src={med1} alt="bilde"></img>
          <p class="img__description2"><div id="navn">Per Egil</div><span id="stilling">Lærer i Nettsikkerhet</span>
          <div id="mail">Kontakt: eksempel@gmail.com</div>
          </p></div>
          <div className='wrapper3'>
          <img className='bilde3' src={med2} alt="bilde"></img>
          <p class="img__description3"><div id="navn">Per Egil</div><span id="stilling">Lærer i Nettsikkerhet</span>
          <div id="mail">Kontakt: eksempel@gmail.com</div>
          </p>
          </div>
          <div className='wrapper4'>
          <img className='bilde4' src={med3} alt="bilde"></img>
          <p class="img__description4"><div id="navn">Per Egil</div><span id="stilling">Lærer i Nettsikkerhet</span>
          <div id="mail">Kontakt: eksempel@gmail.com</div>
          </p>
          </div>
         
        </div>
        

       </div>



  );
}

export default Medarbeidere;