import React, { useEffect } from "react";
import Hero from "../components/sections/homePage/Hero";
import ContactForm from "../components/sections/homePage/ContactForm";
import About from "../components/sections/homePage/About";
import Services from "../components/sections/homePage/Services";
import Projects from "../components/sections/homePage/Projects";
import Gallery from "../components/sections/homePage/Gallery";
import Testimonials from "../components/sections/homePage/Testimonials";
import Blog from "../components/sections/homePage/Blog";
import Clients from "../components/sections/homePage/Clients";

function Home() {
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  return (
    <div className="space-y-16">
      <Hero />
      <ContactForm />
      <About />
      <Services />
      <Projects />
      <Gallery />
      <Testimonials />
      <section id="contact-cta" className="mx-auto max-w-7xl px-4">
        <div className="rounded-xl bg-gradient-to-r from-yellow-500 to-pink-500 p-8 text-white">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h3 className="text-xl font-bold md:text-2xl">Ready to build your vision?</h3>
              <p className="text-white/90">Speak to our Dubai team today.</p>
            </div>
            <a href="#contact" className="rounded-md bg-white px-5 py-3 font-semibold text-black shadow-md hover:bg-white/90">Contact Us</a>
          </div>
        </div>
      </section>
      <Blog />
      <Clients />
    </div>
  );
}

export default Home;
