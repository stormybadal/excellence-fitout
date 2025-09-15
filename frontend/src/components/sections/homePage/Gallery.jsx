import React, { useMemo, useState } from "react";

const generateImages = (count, offset = 0) =>
    Array.from({ length: count }).map((_, i) => ({
        id: i + 1 + offset,
        src: `https://picsum.photos/seed/gallery-${i + 1 + offset}/800/600`,
        alt: `Gallery Image ${i + 1 + offset}`,
    }));

const Gallery = () => {
    const pages = useMemo(() => [generateImages(6, 0), generateImages(6, 6), generateImages(6, 12)], []);
    const [pageIndex, setPageIndex] = useState(0);
    const [lightboxIndex, setLightboxIndex] = useState(null);

    const goPrevPage = () => setPageIndex((p) => (p - 1 + pages.length) % pages.length);
    const goNextPage = () => setPageIndex((p) => (p + 1) % pages.length);

    const flatImages = useMemo(() => pages.flat(), [pages]);
    const openLightbox = (absoluteIndex) => setLightboxIndex(absoluteIndex);
    const closeLightbox = () => setLightboxIndex(null);
    const lightboxPrev = () => setLightboxIndex((i) => (i === null ? null : (i - 1 + flatImages.length) % flatImages.length));
    const lightboxNext = () => setLightboxIndex((i) => (i === null ? null : (i + 1) % flatImages.length));

    const currentImages = pages[pageIndex];

    return (
        <section id="gallery" className="bg-gray-50 py-16">
            <div className="mx-auto max-w-7xl px-4">
                <div className="flex items-end justify-between">
                    <div>
                        <h2 className="text-2xl font-bold md:text-3xl">Gallery</h2>
                        <p className="mt-2 max-w-2xl text-gray-600">Explore our craftsmanship. Swipe through sets of six images.</p>
                    </div>
                    <div className="flex gap-3">
                        <button onClick={goPrevPage} className="rounded-md bg-white px-3 py-2 shadow ring-1 ring-gray-200 hover:bg-gray-50">◀</button>
                        <button onClick={goNextPage} className="rounded-md bg-white px-3 py-2 shadow ring-1 ring-gray-200 hover:bg-gray-50">▶</button>
                    </div>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {currentImages.map((img, idx) => {
                        const absoluteIndex = pageIndex * 6 + idx;
                        return (
                            <button
                                key={img.id}
                                onClick={() => openLightbox(absoluteIndex)}
                                className="group overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-100"
                            >
                                <img src={img.src} alt={img.alt} className="h-48 w-full object-cover transition-transform group-hover:scale-105" />
                            </button>
                        );
                    })}
                </div>

                {lightboxIndex !== null && (
                    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 p-4">
                        <button onClick={closeLightbox} className="absolute right-6 top-6 rounded-md bg-white/10 px-3 py-1 text-white backdrop-blur hover:bg-white/20">Close</button>
                        <button onClick={lightboxPrev} className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl">◀</button>
                        <img
                            src={flatImages[lightboxIndex].src}
                            alt={flatImages[lightboxIndex].alt}
                            className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-2xl"
                        />
                        <button onClick={lightboxNext} className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl">▶</button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Gallery;


