import React from "react";
import "./About.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Faq from "./components/Faq";
import Medarbeidere from './components/Medarbeidere';

import school1 from "./Images/school1.jpg";

import Footer from "./components/Footer";

import Om from './components/Om';



const navbarLinks = [
  { url: "/OPL/", title: "Hjem" },
  { url: "/OPL/#/About", title: "Om oss" },
  { url: "/OPL/#/Contact", title: "Kontakt" },
  { url: "/OPL/#/Trainee", title: "For Lærlinger" },
  { url: "/OPL/#/Company", title: "For Bedrifter" },
  
];



const About = () => {

    console.log("About")
  return (
 
    <div className="Omoss">

      
      <Navbar navbarLinks={navbarLinks} />
  
      
      
      
      <Om imageSrccc={school1} title={"Informasjon"} subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pharetra ligula tortor, sit amet placerat turpis dapibus ut.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel sem quam. Vestibulum posuere interdum diam, eget lacinia ante pulvinar a.Aenean hendrerit dui sit amet enim eleifend consectetur. Etiam gravida egestas neque at malesuada. Donec commodo velit a ligula feugiat euismod. Phasellus pellentesque felis nibh, at laoreet arcu hendrerit eget. Ut rhoncus urna vitae convallis luctus. Fusce dignissim ultrices tortor, id tristique magna suscipit nec. Aliquam vel vulputate lectus."}
      />

      <Faq></Faq>
      <Medarbeidere></Medarbeidere>
      

      <Footer></Footer>
    
     
      
    </div>
  );
};

export default About;