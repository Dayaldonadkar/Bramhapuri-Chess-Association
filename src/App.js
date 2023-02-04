import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Contact from "./Components/Contact";
import Home from "./Components/Navbar";
import Homepage from "./Components/Homepage";
import Coaches from "./Components/Coaches";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/coach" element={<Coaches />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
