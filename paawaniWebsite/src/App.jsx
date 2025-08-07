import React from "react";
import Navbar from './components/navbar/navbar'
import Whyus from "./components/whyus/whyus"; 


function App() {
  return (
    <>
      <Navbar />
      <div className="mx-auto h-screen flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold">UNDER DEVELOPMENT</h1>
      </div>
      <Whyus />
    </>
  );
}

export default App;
