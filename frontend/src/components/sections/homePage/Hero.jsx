import React from "react";
import homeHeroVideo from "../../../assets/homePage/homeHeroVideo.mp4";

const Hero = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-black">
            <video
                className="absolute inset-0 h-full w-full object-cover opacity-70"
                src={homeHeroVideo}
                autoPlay
                muted
                loop
                playsInline
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />

            <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4">
                <div className="max-w-2xl text-white">
                    <h1 className="text-3xl font-extrabold leading-tight md:text-5xl">
                        Excellence in Fit-out, Renovation, and Construction in Dubai
                    </h1>
                    <p className="mt-4 text-base text-gray-200 md:text-lg">
                        From concept to completion — delivering premium residential and commercial spaces with craftsmanship and speed.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                        <a
                            href="#contact"
                            className="rounded-md bg-yellow-500 px-5 py-3 font-semibold text-black shadow-md transition hover:bg-yellow-400"
                        >
                            Get Free Quote
                        </a>
                        <a
                            href="#services"
                            className="rounded-md bg-white/10 px-5 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/20"
                        >
                            Our Services
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;


