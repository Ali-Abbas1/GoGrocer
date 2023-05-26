import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import BecomePartner from "./components/BecomePartner";
import EverythingYouCrave from "./components/EverythingYouCrave";
import MixAndMatch from "./components/MixAndMatch";
import GrowYourBusiness from "./components/GrowYourBusiness";
import GetGroceries from "./components/GetGroceries";
import ToDos from "./components/ToDos";
import Footer from "./components/Footer";



function App() {
  return (
    <div className="App">
     <Navbar/>
     <HeroSection/>
     <BecomePartner/>
     <EverythingYouCrave/>
     <GrowYourBusiness/>
     <GetGroceries/>
     <MixAndMatch/>
     <ToDos/>
     <Footer/>
    </div>
  );
}

export default App;
