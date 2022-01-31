import "./App.css";
import learning_01 from "./Images/learning-01.jpg";
import learning_02 from "./Images/learning-02.jpg";
import learning_03 from "./Images/learning-03.jpg";
import tech from "./Images/tech.jpg";
import classroom from "./Images/classroom.jpg";
import klasserom from "./Images/klasserom.jpg";
import klasse from "./Images/klasse.jpg";
import student from "./Images/student.jpg";
/*import Vector from  "./Images/Vector.png";*/
/*import learning_04 from "./Images/learning-04.jpg";*/
import Hero from "./components/Hero";
import { Button } from "./components/Button";

import React from 'react';
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Containertwo from "./components/Containertwo";
import Containerthree from "./components/Containerthree";
import Footer from "./components/Footer";
import { NavLink } from 'react-router-dom';
import About from "./About"
import KontaktOss from "./components/ContactForm";
import {
  HashRouter as Router, Route, Routes,
  

  
} from "react-router-dom";













const navbarLinks = [
  { url: "/OPL/", title: "Hjem" },
  { url: "/OPL/#/About", title: "Om oss" },
  { url: "/OPL/#/Contact", title: "Kontakt" },
  { url: "/OPL/#/Trainee", title: "For Lærlinger" },
  { url: "/OPL/#/Company", title: "For Bedrifter" },
  
];

function App() {
  return (
    <div className="App"> 


      
        <Navbar navbarLinks={navbarLinks}   />
              

      

   
    
      <Hero title="Bedrift?">
      
      
      </Hero> 
      
   
   
     <Container imageSrc={klasserom} title={"Hva vil det si å bli lærling bedrift hos oss?"}
      subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pharetra ligula tortor, sit amet placerat turpis dapibus ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel sem quam. Vestibulum posuere interdum diam, eget lacinia ante pulvinar a.Aenean hendrerit dui sit amet enim eleifend consectetur. Etiam gravida egestas neque at malesuada. Donec commodo velit a ligula feugiat euismod. Phasellus pellentesque felis nibh, at laoreet arcu hendrerit eget. Ut rhoncus urna vitae convallis luctus. Fusce dignissim ultrices tortor, id tristique magna suscipit nec. Aliquam vel vulputate lectus. Nunc vitae posuere tellus, nec tincidunt nulla."
      }
     
    
       />
         <Containertwo imageSrce={learning_02} title={"Hva er unikt med ITL som opplæringskontor?"}
      subtitle={"Lorem ipsum dolor sit amet, Fusce pharetra ligula tortor, sit amet placerat turpis dapibus ut.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pharetra ligula tortor, sit amet placerat turpis dapibus ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel sem quam. Etiam gravida egestas neque at malesuada. Donec commodo velit a ligula feugiat euismod. Phasellus pellentesque felis nibh, at laoreet arcu hendrerit eget.  Fusce dignissim ultrices tortor, id tristique magna suscipit nec. Aliquam vel vulputate lectus. Nunc vitae posuere tellus, nec tincidunt nulla. Morbi ultrices, ligula eget ultricies fermentum, sem metus cursus nulla, vitae posuere justo diam ac augue. In ac consequat arcu.Duis pharetra vestibulum fermentum. In ultrices pretium ante, vitae dapibus orci."}
        flipped={true}/>
      
       
      <Containerthree imageSrcc={tech} title={"Hvordan søke om læreplass hos oss?"}
      subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pharetra ligula tortor, sit amet placerat turpis dapibus ut.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pharetra ligula tortor, sit amet placerat turpis dapibus ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel sem quam. Vestibulum posuere interdum diam, eget lacinia ante pulvinar a. Aenean hendrerit dui sit amet enim eleifend consectetur. Etiam gravida egestas neque at malesuada. Donec commodo velit a ligula feugiat euismod. Phasellus pellentesque felis nibh, at laoreet arcu hendrerit eget. Ut rhoncus urna vitae convallis luctus. Fusce dignissim ultrices tortor, id tristique magna suscipit nec. Aliquam vel vulputate lectus. Nunc vitae posuere tellus, nec tincidunt nulla. Morbi ultrices, ligula eget ultricies fermentum, sem metus cursus nulla, vitae posuere justo diam ac augue. In ac consequat arcu.Duis pharetra vestibulum fermentum. In ultrices pretium ante, vitae dapibus orci."
      } 

      flipped={true}
     
      />
    <KontaktOss></KontaktOss>

    <Footer />
   
    </div>
  );
}

export default App;









/*const Contact = () => {
  return (
    <section className="Contact">
      <h1>This is the Contact page</h1>
    </section>
  );
};*/

