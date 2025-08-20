import React from "react";
import { Routes, Route } from "react-router-dom"
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Business from './pages/business/OurBusinesses'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/business" element={<Business />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
