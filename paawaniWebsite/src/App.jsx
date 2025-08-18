import React from "react";
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Whyus from "./components/whyus/WhyUs"; 
import OurPartners from "./components/partners/OurPartners";
import Partnership from "./components/partners/Partnership";
import Testimonials from "./components/testimonials/Testimonials";
import LatestBlogs from "./components/blog/Blogs"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Whyus />
      <OurPartners />
      <Partnership />
      <Testimonials />
      <LatestBlogs />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
