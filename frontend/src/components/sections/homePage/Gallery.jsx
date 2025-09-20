import React, { useEffect, useMemo, useState } from "react";

const generateImages = (count, offset = 0) =>
    Array.from({ length: count }).map((_, i) => ({
        id: i + 1 + offset,
        src: `https://picsum.photos/seed/gallery-${i + 1 + offset}/800/600`,
        alt: `Gallery Image ${i + 1 + offset}`,
    }));

const Gallery = () => {
    const pages = useMemo(() => [generateImages(6, 0), generateImages(6, 6), generateImages(6, 12)], []);
    const [pageIndex, setPageIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(null);


    // Intentionally removed unused goNextPage to satisfy linter

    const flatImages = useMemo(() => pages.flat(), [pages]);
    const openLightbox = (absoluteIndex) => setLightboxIndex(absoluteIndex);
    const closeLightbox = () => setLightboxIndex(null);
    const lightboxPrev = () => setLightboxIndex((i) => (i === null ? null : (i - 1 + flatImages.length) % flatImages.length));
    const lightboxNext = () => setLightboxIndex((i) => (i === null ? null : (i + 1) % flatImages.length));

    const currentImages = pages[pageIndex];

    // Auto-advance pages every 6 seconds
    useEffect(() => {
        if (lightboxIndex !== null) return; // pause auto-advance while modal is open
        const id = setInterval(() => {
            setIsFading(true);
            setTimeout(() => {
                setPageIndex((p) => (p + 1) % pages.length);
                setTimeout(() => setIsFading(false), 180);
            }, 180);
        }, 6000);
        return () => clearInterval(id);
    }, [pages.length, lightboxIndex]);

    return (
        <section id="gallery" className="bg-gray-50 py-16">
            <div className="mx-auto max-w-7xl px-4">
                <div className="flex items-end justify-between">
                    <div>
                        <h2 className="text-2xl font-bold md:text-3xl">Gallery</h2>
                        <p className="mt-2 max-w-2xl text-gray-600">Explore our craftsmanship. Images touch seamlessly; hover to zoom.</p>
                    </div>
                </div>

                <div className={`mt-8 grid gap-0 sm:grid-cols-2 lg:grid-cols-3 transition-opacity duration-300 ${isFading ? "opacity-0" : "opacity-100"}`}>
                    {currentImages.map((img, idx) => {
                        const absoluteIndex = pageIndex * 6 + idx;
                        return (
                            <button
                                key={img.id}
                                onClick={() => openLightbox(absoluteIndex)}
                                className="group overflow-hidden"
                            >
                                <img src={img.src} alt={img.alt} className="block h-56 w-full object-cover transition-transform duration-300 ease-out group-hover:scale-110" />
                            </button>
                        );
                    })}
                </div>

                {lightboxIndex !== null && (
                    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 p-4">
                        <button onClick={closeLightbox} className="absolute right-6 top-6 rounded-md bg-white/10 px-3 py-1 text-white backdrop-blur hover:bg-white/20">Close</button>
                        <button
                            onClick={lightboxPrev}
                            className="absolute left-6 top-1/2 -translate-y-1/2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white shadow-lg ring-1 ring-white/20 backdrop-blur hover:bg-white/20"
                            aria-label="Previous"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                                <path fillRule="evenodd" d="M15.53 4.47a.75.75 0 010 1.06L9.06 12l6.47 6.47a.75.75 0 11-1.06 1.06l-7-7a.75.75 0 010-1.06l7-7a.75.75 0 011.06 0z" clipRule="evenodd" />
                            </svg>
                        </button>
                        <img
                            src={flatImages[lightboxIndex].src}
                            alt={flatImages[lightboxIndex].alt}
                            className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-2xl"
                        />
                        <button
                            onClick={lightboxNext}
                            className="absolute right-6 top-1/2 -translate-y-1/2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white shadow-lg ring-1 ring-white/20 backdrop-blur hover:bg-white/20"
                            aria-label="Next"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                                <path fillRule="evenodd" d="M8.47 19.53a.75.75 0 010-1.06L14.94 12 8.47 5.53a.75.75 0 111.06-1.06l7 7a.75.75 0 010 1.06l-7 7a.75.75 0 01-1.06 0z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Gallery;


