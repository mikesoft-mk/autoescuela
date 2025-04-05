import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <HashRouter>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre-nosotros" element={<About />} />
              <Route path="/servicios" element={<Services />} />
              <Route path="/precios" element={<Pricing />} />
              <Route path="/contacto" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
