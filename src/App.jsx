import { useState } from "react";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Opportunity from "./components/Opportunity";
import Partners from "./components/Partners";
import Pricing from "./components/Pricing";
import Routes from "./components/Routes";
import WhatsAppButton, { MobileBar } from "./components/WhatsAppButton";

function scrollToContact() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.getElementById("contacto")?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
}

export default function App() {
  const [planId, setPlanId] = useState("");

  const selectPlan = (id) => {
    setPlanId(id);
    scrollToContact();
  };

  return (
    <>
      <a href="#contenido" className="skip-link">
        Saltar al contenido
      </a>
      <Navbar />
      <main id="contenido">
        <Hero />
        <Opportunity />
        <Routes />
        <Pricing onSelect={selectPlan} />
        <Partners />
        <Clients />
        <Faq />
        <Contact planId={planId} onPlanChange={setPlanId} />
      </main>
      <Footer />
      <div className="h-20 md:hidden" aria-hidden="true" />
      <WhatsAppButton />
      <MobileBar />
    </>
  );
}
