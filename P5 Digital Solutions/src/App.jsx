import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"; 
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


import Header from "./components/Header"; 
import Hero from './components/Hero'
import About from './components/About'
import ServiceDomain from './components/ServiceDomain'


function App() {
  return (
    <HelmetProvider>
        <Router>

            <Header />
            <Hero/>
            <About/>
            <ServiceDomain/>

        </Router>
    </HelmetProvider>
  );
}

export default App;
