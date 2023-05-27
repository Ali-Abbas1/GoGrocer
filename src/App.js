import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import BecomePartner from "./components/BecomePartner";
import Footer from "./components/Footer";
import CitiesNearMe from "./components/CitiesNearMe";
import ServingCountries from "./components/ServingCountries";


function App() {
  return (
    <div className="App">
     <Navbar sidebar={false}/>
     <HeroSection/>
     <BecomePartner/>
     <CitiesNearMe/>
     <ServingCountries/>
     <Footer/>
    </div>
  );
}

export default App;
