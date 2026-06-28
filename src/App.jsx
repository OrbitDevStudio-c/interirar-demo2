import React from "react";
import ScrollProgress from "./components/ScrollProgress";
import CustomCursor from "./components/CustomCursor";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import WhyChooseUs from "./components/WhyChooseUs";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import StatsSection from "./components/StatsSection";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const COMPANY_NAME = "AURA";

  return (
    <div className="relative min-h-screen bg-[#121212] text-[#F5F5F5] font-sans antialiased selection:bg-[#C5A880] selection:text-[#121212]">
      {/* Interactive Custom Cursor Follower */}
      <CustomCursor />

      {/* Scroll indicator overlay */}
      <ScrollProgress />

      {/* Sticky Editorial Glass Navbar */}
      <Header companyName={COMPANY_NAME} />

      {/* Main Layout Sections */}
      <main id="main-content">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Editorial About Profile */}
        <About />

        {/* 3. Services Atelier Capabilities */}
        <Services />

        {/* 4. Structured Bento Portfolio Showcase */}
        <Portfolio />

        {/* 5. Design Philosophy */}
        <WhyChooseUs />

        {/* 6. Execution Methodology Timeline */}
        <Process />

        {/* 7. Client Stories Slider */}
        <Testimonials />

        {/* 8. Full-Width Statistics Counter */}
        <StatsSection />

        {/* 9. FAQ Accordions */}
        <FAQ />

        {/* 10. Private Commission Request Form */}
        <Contact />
      </main>

      {/* 11. Atelier Footer */}
      <Footer companyName={COMPANY_NAME} />
    </div>
  );
}
