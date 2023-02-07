import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Contact from "./Components/Contact";
import Home from "./Components/Navbar";
import Homepage from "./Components/Homepage";
import Coaches from "./Components/Coaches";
import Caro from "./Components/Caro";
import Footer from "./Components/Footer";

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
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
