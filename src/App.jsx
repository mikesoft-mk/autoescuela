import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/autoescuela-scania/" element={<Home />} />
            <Route
              path="/autoescuela-scania/sobre-nosotros"
              element={<About />}
            />
            <Route
              path="/autoescuela-scania/servicios"
              element={<Services />}
            />
            <Route path="/autoescuela-scania/precios" element={<Pricing />} />
            <Route path="/autoescuela-scania/contacto" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
