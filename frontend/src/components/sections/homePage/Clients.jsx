import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const logos = Array.from({ length: 12 }).map((_, i) => ({
    id: i + 1,
    src: `https://picsum.photos/seed/logo-${i + 1}/160/80`,
}));

const Clients = () => {
    return (
        <section id="clients" className="mx-auto max-w-7xl px-4 pt-8 pb-16">
            <h2 className="text-2xl font-bold md:text-3xl text-center">Our Clients</h2>

            <div className="mt-10">
                <Swiper
                    modules={[Autoplay]}
                    loop
                    autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }}
                    speed={4000}
                    slidesPerView={2}
                    spaceBetween={16}
                    breakpoints={{
                        640: { slidesPerView: 3, spaceBetween: 20 },
                        768: { slidesPerView: 4, spaceBetween: 24 },
                        1024: { slidesPerView: 6, spaceBetween: 28 },
                    }}
                    allowTouchMove
                    className="!overflow-hidden"
                >
                    {logos.concat(logos).map((l, idx) => (
                        <SwiperSlide key={idx} className="!h-auto">
                            <div className="flex h-full items-center justify-center rounded-md bg-white p-4 shadow-sm ring-1 ring-gray-100">
                                <img src={l.src} alt="Client logo" className="h-12 w-auto opacity-80" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Clients;