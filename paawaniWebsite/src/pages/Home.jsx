import React from 'react'
import Hero from "@/components/hero/Hero";
import Whyus from "@/components/whyus/WhyUsSection"; 
import OurPartners from "@/components/partners/OurPartners";
import Partnership from "@/components/partners/Partnership";
// import Testimonials from "@/components/testimonials/Testimonials";
// import LatestBlogs from "@/components/blog/Blogs"
import Contact from "@/components/contact/Contact"

const Home = () => {
  return (
    <div>
      <Hero />
      <Whyus />
      <OurPartners />
      <Partnership />
      {/* <Testimonials /> */}
      {/* <LatestBlogs /> */}
      <Contact />
    </div>
  )
}

export default Home
