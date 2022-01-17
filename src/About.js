import React from "react";
import "./About.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Faq from "./components/Faq";

import learning_04 from "./Images/learning-04.jpg";

import Footer from "./components/Footer";

import Test123 from './components/Test123';


const navbarLinks = [
  { url: "/", title: "Hjem" },
  { url: "/About", title: "Om oss" },
  { url: "/Contact", title: "Kontakt" },
  { url: "Lærlinger", title: "For Lærlinger" },
  { url: "Bedrifter", title: "For Bedrifter" },
  
];



const About = () => {

    console.log("About")
  return (
 
    <div className="Om">
      <Navbar navbarLinks={navbarLinks} />
  
      
      
      
      <Test123 imageSrccc={learning_04} title={"Informasjon"} subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pharetra ligula tortor, sit amet placerat turpis dapibus ut.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel sem quam. Vestibulum posuere interdum diam, eget lacinia ante pulvinar a.Aenean hendrerit dui sit amet enim eleifend consectetur. Etiam gravida egestas neque at malesuada. Donec commodo velit a ligula feugiat euismod. Phasellus pellentesque felis nibh, at laoreet arcu hendrerit eget. Ut rhoncus urna vitae convallis luctus. Fusce dignissim ultrices tortor, id tristique magna suscipit nec. Aliquam vel vulputate lectus."}
      />

      <Faq></Faq>

      <Footer></Footer>
    
     
      
    </div>
  );
};

export default About;