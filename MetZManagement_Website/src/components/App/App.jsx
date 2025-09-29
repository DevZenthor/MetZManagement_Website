import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Home from "../pages/HomePage/Homepage";
import Managers from "../pages/ManagerPage/ManagerPage";
import Contact from "../pages/ContactPage/Contactpage";
import Clients from "../pages/ClientPage/ClientPage";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/managers" element={<Managers />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;