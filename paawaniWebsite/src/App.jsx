import React from "react";
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Whyus from "./components/whyus/WhyUs"; 
import OurPartners from "./components/partners/OurPartners";
import Partnership from "./components/partners/Partnership";
import Testimonials from "./components/testimonials/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Whyus />
      <OurPartners />
      <Partnership />
      <Testimonials />
      <div className="mx-auto h-screen flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold">UNDER DEVELOPMENT</h1>
      </div>
    </>
  );
}

export default App;
