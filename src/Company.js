import React from "react";

import Navbar from "./components/Navbar";
import office2 from "./Images/office2.jpg";

import Companies from './components/Companies';

import learning from "./Images/learning.jpg";
import './Company.css';
import Footer from "./components/Footer";
import Faq from "./components/Faq";



const navbarLinks = [
  { url: "/OPL/", title: "Hjem" },
  { url: "/OPL/#/About", title: "Om oss" },
  { url: "/OPL/#/Contact", title: "Kontakt" },
  { url: "/OPL/#/Trainee", title: "For Lærlinger" },
  { url: "/OPL/#/Company", title: "For Bedrifter" },
  
];



const Company = () => {
  
  console.log("Company")
    
  return (
 
    <div className="comp">

      
      <Navbar navbarLinks={navbarLinks} />
  
      
      
      
      <Companies lærlingBilde={office2} title={"For Bedrifter"} subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pharetra ligula tortor, sit amet placerat turpis dapibus ut.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel sem quam. Vestibulum posuere interdum diam, eget lacinia ante pulvinar a.Aenean hendrerit dui sit amet enim eleifend consectetur. Etiam gravida egestas neque at malesuada. Donec commodo velit a ligula feugiat euismod. Phasellus pellentesque felis nibh, at laoreet arcu hendrerit eget. Ut rhoncus urna vitae convallis luctus. Fusce dignissim ultrices tortor, id tristique magna suscipit nec. Aliquam vel vulputate lectus."}
     />

      <Faq></Faq>

      <Footer></Footer>
    
     
      
    </div>
  );
};

export default Company;