import React from "react";
import Contact from './components/Contact';
import Navbar from "./components/Navbar";
import Footer from './components/Footer';


import './Kontakt.css';




const navbarLinks = [
    { url: "/OPL/", title: "Hjem" },
    { url: "/OPL/#/About", title: "Om oss" },
    { url: "/OPL/#/Contact", title: "Kontakt" },
    { url: "/OPL/#/Trainee", title: "For Lærlinger" },
    { url: "/OPL/#/Company", title: "For Bedrifter" },
    
  ];




function Kontakt() {
    return (

<div className="Kontaktskjema">
    
        <Navbar navbarLinks={navbarLinks} />
        

<Contact></Contact>

<Footer></Footer>
</div>

    );

}


export default Kontakt;
