import React from "react";
import { Routes, Route } from "react-router-dom"
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Business from './pages/business/OurBusinesses'
import MakeMyEdu from './pages/business/MakeMyEdu'
import Havells from './pages/business/Havells'
import Footer from './components/footer/Footer'
import Career from "./pages/career/Career";
import Contact from './components/contact/Contact'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/business" element={<Business />} />
        <Route path="/business/mme" element={<MakeMyEdu />} />
        <Route path="/business/havells" element={<Havells />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
