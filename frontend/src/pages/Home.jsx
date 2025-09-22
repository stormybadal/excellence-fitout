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
import FloatingWhatsApp from "../components/shared/FloatingWhatsApp";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative overflow-x-hidden ">
      <Hero />

      {/* Section separator */}
      <div className="relative h-8 bg-gradient-to-b from-black to-white">
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <ContactForm />

      {/* Section separator */}
      <div className="relative h-4 bg-gradient-to-b from-white to-gray-50">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
        </div>
      </div>

      <About />

      {/* Section separator */}
      <div className="relative h-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
        </div>
      </div>

      <Services />

      {/* Section separator */}
      <div className="relative h-4 bg-gradient-to-b from-white to-gray-50">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
        </div>
      </div>

      <Projects />

      {/* Section separator */}
      <div className="relative h-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
        </div>
      </div>

      <Gallery />

      {/* Section separator */}
      <div className="relative h-4 bg-gradient-to-b from-white to-yellow-50">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
        </div>
      </div>

      <Testimonials />

      {/* Enhanced CTA section */}
      <section id="contact-cta" className="relative py-12 bg-gradient-to-br from-yellow-50 via-white to-orange-50">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fbbf24' fill-opacity='0.05'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>

        <div className="relative mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
              Ready to Build Your{" "}
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                Vision?
              </span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Speak to our Dubai team today and let's bring your construction dreams to life.
            </p>
          </div>

          <div className="rounded-3xl bg-gradient-to-r from-yellow-500 to-orange-500 p-8 md:p-12 text-white shadow-2xl">
            <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-center">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold md:text-3xl mb-2">Get Your Free Quote Today</h3>
                <p className="text-white/90 text-lg">Professional consultation and detailed project estimate at no cost.</p>

                {/* Trust indicators */}
                <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-6 text-sm text-white/80">
                  <div className="flex items-center">
                    <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Free Consultation
                  </div>
                  <div className="flex items-center">
                    <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Detailed Quote
                  </div>
                  <div className="flex items-center">
                    <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    No Obligation
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="group inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 font-semibold text-black shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <span>Contact Us</span>
                  <svg className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a href="tel:+971552146089" className="group inline-flex items-center justify-center rounded-lg border-2 border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:bg-white/20">
                  <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section separator */}
      <div className="relative h-4 bg-gradient-to-b from-orange-50 to-white">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
        </div>
      </div>

      <Blog />
      {/* <Clients /> */}

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}

export default Home;
