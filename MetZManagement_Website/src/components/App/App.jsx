import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Home from "../pages/HomePage/Homepage";
import Managers from "../pages/ManagerPage/ManagerPage";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/managers" element={<Managers />} />
      </Routes>
    </Router>
  );
}

export default App;