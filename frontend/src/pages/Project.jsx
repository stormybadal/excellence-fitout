import React, { useEffect, useRef } from "react";
import { useInfiniteProjects } from "../hook/useProjects";
import { useNavigate } from "react-router-dom";

const Project = () => {
    const navigate = useNavigate();
    const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteProjects({ limit: 50 });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const allProjects = data?.pages?.flatMap((page) => page.data.entries || []) || [];
    // console.log("allProjects", allProjects);

    // Infinite scroll observer
    const loadMoreRef = useRef();
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && hasNextPage) {
                    fetchNextPage();
                }
            },
            { threshold: 1 }
        );

        if (loadMoreRef.current) observer.observe(loadMoreRef.current);
        return () => loadMoreRef.current && observer.unobserve(loadMoreRef.current);
    }, [loadMoreRef, fetchNextPage, hasNextPage]);

    if (isLoading) return <p className="text-center">Loading projects...</p>;

    return (
        <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16">
            <div className="relative mx-auto max-w-7xl px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
                        Our <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">Projects</span>
                    </h2>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
                        Explore all of our work and fit-outs across Dubai, brought together in one place.
                    </p>
                </div>

                {/* Project Cards Grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {allProjects.map((project) => (
                        <div
                            key={project._id}
                            className="group relative overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-100 transition-all duration-300 hover:shadow-2xl hover:ring-yellow-200"
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.projectName}
                                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <button
                                        onClick={() => navigate(`/project/${project._id}`)}
                                        className="rounded-full bg-white/20 p-3 backdrop-blur-sm transition-transform duration-300 hover:scale-110"
                                    >
                                        <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 group-hover:text-yellow-600 transition-colors duration-300">
                                    {project.projectName}
                                </h3>
                                <p className="text-gray-600 mt-2">{project.shortDescription}</p>
                                <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                                    <span className="flex items-center">
                                        <svg className="mr-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                        </svg>
                                        {project.duration}
                                    </span>
                                    <button
                                        onClick={() => navigate(`/project/${project._id}`)}
                                        className="text-yellow-600 hover:text-yellow-700 font-medium transition-colors duration-300"
                                    >
                                        View Details →
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Loader & No more data */}
                <div ref={loadMoreRef} className="text-center py-6">
                    {isFetchingNextPage && <p>Loading more projects...</p>}
                    {/* {!hasNextPage && <p>No more projects!</p>} */}
                </div>
            </div>
        </section>
    );
};

export default Project;
