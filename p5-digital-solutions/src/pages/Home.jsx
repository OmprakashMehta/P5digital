import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ServiceDomain from "../components/ServiceDomain";
import ClientsSection from "../components/ClientsSection";
import FeaturesSection from "../components/FeaturesSection";
import BusinessCTA from "../components/BusinessCTA";

function Home() {
  return (
    <>
      <Helmet>
        <title>P5 Digital Solutions - Grow Your Business Digitally</title>
        <meta
          name="description"
          content="P5 Digital Solutions provides SEO, Digital Marketing, App Development & Branding services to grow your business online."
        />
      </Helmet>
      <Hero />
      <AboutSection />
      <ServiceDomain />
      <ClientsSection />
      <FeaturesSection />
      <BusinessCTA />
    </>
  );
}

export default Home;
