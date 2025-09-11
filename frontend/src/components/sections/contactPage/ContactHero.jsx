import React from 'react'

function ContactHero() {
    return (
      <section
        className="w-full h-[70vh] bg-blue-600 bg-cover bg-center bg-no-repeat flex items-center justify-center text-center"
      >
        <div className="bg-black/50 w-full h-full flex flex-col items-center justify-center px-4">
          <h2 className="text-white text-3xl md:text-5xl font-bold mb-2">  Get In </h2>
          <h1 className="text-yellow-300 text-4xl md:text-6xl font-extrabold mb-4">
          Touch
          </h1>
          <p className="text-white text-lg md:text-xl max-w-3xl">
          Ready to start your construction or interior project? Contact us today for a free consultation and quote
          </p>
        </div>
      </section>
    );
}

export default ContactHero