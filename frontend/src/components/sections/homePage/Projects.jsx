import React from "react";

const projects = Array.from({ length: 6 }).map((_, i) => ({
    id: i + 1,
    title: `Project ${i + 1}`,
    image: `https://picsum.photos/seed/project-${i + 1}/600/400`,
}));

const Projects = () => {
    return (
        <section id="projects" className="mx-auto max-w-7xl px-4 py-16">
            <h2 className="text-2xl font-bold md:text-3xl">Our Projects</h2>
            <p className="mt-2 max-w-2xl text-gray-600">
                A curated showcase of our latest fit-outs and renovations across Dubai.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((p) => (
                    <div key={p.id} className="overflow-hidden rounded-xl shadow-sm ring-1 ring-gray-100">
                        <img src={p.image} alt={p.title} className="h-48 w-full object-cover" />
                        <div className="p-4">
                            <h3 className="font-semibold">{p.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;


