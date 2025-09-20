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
        <section id="gallery" className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f3f4f6' fill-opacity='0.3'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
            }}></div>

            <div className="relative mx-auto max-w-7xl px-4">
                <div className="text-center">
                    <div className="inline-flex items-center rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-800 mb-4">
                        <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                        </svg>
                        Our Work Gallery
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
                        Showcasing Our{" "}
                        <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                            Craftsmanship
                        </span>
                    </h2>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
                        Explore our portfolio of premium fit-outs and renovations. Each project reflects our commitment to
                        excellence and attention to detail.
                    </p>
                </div>

                <div className={`mt-12 grid gap-0 sm:grid-cols-2 lg:grid-cols-3 transition-all duration-500 ${isFading ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}>
                    {currentImages.map((img, idx) => {
                        const absoluteIndex = pageIndex * 6 + idx;
                        return (
                            <button
                                key={img.id}
                                onClick={() => openLightbox(absoluteIndex)}
                                className="group relative overflow-hidden rounded-2xl shadow-lg ring-1 ring-gray-200 transition-all duration-300 hover:shadow-2xl hover:ring-yellow-300"
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10"></div>
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="block h-64 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                                />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-20">
                                    <div className="rounded-full bg-white/20 p-3 backdrop-blur-sm">
                                        <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                        </svg>
                                    </div>
                                </div>
                            </button>
                        );
                    })}
                </div>

                {/* Gallery navigation dots */}
                <div className="mt-8 flex justify-center space-x-2">
                    {pages.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => {
                                setIsFading(true);
                                setTimeout(() => {
                                    setPageIndex(idx);
                                    setTimeout(() => setIsFading(false), 180);
                                }, 180);
                            }}
                            className={`h-3 w-3 rounded-full transition-all duration-300 ${idx === pageIndex
                                ? 'bg-yellow-500 scale-125'
                                : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                        />
                    ))}
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


