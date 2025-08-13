import React from "react";
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Whyus from "./components/whyus/WhyUs"; 
import OurPartners from "./components/partners/OurPartners";
import Partnership from "./components/partners/Partnership";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Whyus />
      <OurPartners />
      <Partnership />
      <div className="mx-auto h-screen flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold">UNDER DEVELOPMENT</h1>
      </div>
    </>
  );
}

export default App;
