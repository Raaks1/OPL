import "./App.css";
import learning_01 from "./Images/learning-01.jpg";
import learning_02 from "./Images/learning-02.jpg";
import learning_03 from "./Images/learning-03.jpg";
/*import Vector from  "./Images/Vector.png";*/
/*import learning_04 from "./Images/learning-04.jpg";*/
import Hero from "./components/Hero";
import { Button } from "./components/Button";
import Faq from "./components/Faq"
import React from 'react';
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Containertwo from "./components/Containertwo";
import Containerthree from "./components/Containerthree";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import About from "./About"
import KontaktOss from "./components/ContactForm";










const navbarLinks = [
  { url: "/", title: "Hjem" },
  { url: "https://raaks1.github.io/faqreact", title: "Om oss" },
  { url: "", title: "Kontakt" },
  { url: "Lærlinger", title: "For Lærlinger" },
  { url: "Bedrifter", title: "For Bedrifter" },
  
];

function App() {
  return (
    <div className="App">
       <Router>
        <Navbar navbarLinks={navbarLinks} />
     
         <Routes>
          
          <Route path="/About" component={<About />} />
           
          <Route exact path="/Footer" component={<Footer/>} />
          
          </Routes>
          
      </Router>
    
      <Hero title="Bedrift?">
      
      
      </Hero> 
      
   
   
     <Container imageSrc={learning_02} title={"Hva vil det si å bli lærling bedrift hos oss?"}
      subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pharetra ligula tortor, sit amet placerat turpis dapibus ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel sem quam. Vestibulum posuere interdum diam, eget lacinia ante pulvinar a.Aenean hendrerit dui sit amet enim eleifend consectetur. Etiam gravida egestas neque at malesuada. Donec commodo velit a ligula feugiat euismod. Phasellus pellentesque felis nibh, at laoreet arcu hendrerit eget. Ut rhoncus urna vitae convallis luctus. Fusce dignissim ultrices tortor, id tristique magna suscipit nec. Aliquam vel vulputate lectus. Nunc vitae posuere tellus, nec tincidunt nulla."
      }
     
    
       />
         <Containertwo imageSrce={learning_03} title={"Hva er unikt med ITL som opplæringskontor?"}
      subtitle={"Lorem ipsum dolor sit amet, Fusce pharetra ligula tortor, sit amet placerat turpis dapibus ut.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pharetra ligula tortor, sit amet placerat turpis dapibus ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel sem quam. Etiam gravida egestas neque at malesuada. Donec commodo velit a ligula feugiat euismod. Phasellus pellentesque felis nibh, at laoreet arcu hendrerit eget.  Fusce dignissim ultrices tortor, id tristique magna suscipit nec. Aliquam vel vulputate lectus. Nunc vitae posuere tellus, nec tincidunt nulla. Morbi ultrices, ligula eget ultricies fermentum, sem metus cursus nulla, vitae posuere justo diam ac augue. In ac consequat arcu.Duis pharetra vestibulum fermentum. In ultrices pretium ante, vitae dapibus orci."}
        flipped={true}/>
      
       
      <Containerthree imageSrcc={learning_01} title={"Hvordan søke om læreplass hos oss?"}
      subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pharetra ligula tortor, sit amet placerat turpis dapibus ut.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pharetra ligula tortor, sit amet placerat turpis dapibus ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel sem quam. Vestibulum posuere interdum diam, eget lacinia ante pulvinar a. Aenean hendrerit dui sit amet enim eleifend consectetur. Etiam gravida egestas neque at malesuada. Donec commodo velit a ligula feugiat euismod. Phasellus pellentesque felis nibh, at laoreet arcu hendrerit eget. Ut rhoncus urna vitae convallis luctus. Fusce dignissim ultrices tortor, id tristique magna suscipit nec. Aliquam vel vulputate lectus. Nunc vitae posuere tellus, nec tincidunt nulla. Morbi ultrices, ligula eget ultricies fermentum, sem metus cursus nulla, vitae posuere justo diam ac augue. In ac consequat arcu.Duis pharetra vestibulum fermentum. In ultrices pretium ante, vitae dapibus orci."
      } 

      flipped={true}
     
      />
    <KontaktOss>TEST</KontaktOss>

    <Footer />
   
    </div>
  );
}

export default App;









const Contact = () => {
  return (
    <section className="Contact">
      <h1>This is the Contact page</h1>
    </section>
  );
};

