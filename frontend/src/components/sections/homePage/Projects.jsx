import React from "react";
import { useNavigate } from "react-router-dom";
import { useProjects } from "../../../hook/useProjects";
import Loading from "../../ui/Loading";

const Projects = () => {
    const navigate = useNavigate();
    const { data, isLoading, error } = useProjects({ limit: 6 });

    if (isLoading) {
        return (
            <section id="projects" className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12">
                <div className="relative mx-auto max-w-7xl px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
                            Our Latest{" "}
                            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                                Creations
                            </span>
                        </h2>
                    </div>
                    <Loading />
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section id="projects" className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12">
                <div className="relative mx-auto max-w-7xl px-4">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl mb-8">
                            Our Latest{" "}
                            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                                Creations
                            </span>
                        </h2>
                        <p className="text-red-600">Failed to load projects. Please try again later.</p>
                    </div>
                </div>
            </section>
        );
    }

    const projects = data?.data?.entries || [];

    return (
        <section id="projects" className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-30" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f3f4f6' fill-opacity='0.2'%3E%3Cpath d='M30 30c0-8.3-6.7-15-15-15s-15 6.7-15 15 6.7 15 15 15 15-6.7 15-15zm15 0c0-8.3-6.7-15-15-15s-15 6.7-15 15 6.7 15 15 15 15-6.7 15-15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>

            <div className="relative mx-auto max-w-7xl px-4">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-800 mb-4">
                        <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                        </svg>
                        Featured Projects
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
                        Our Latest{" "}
                        <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                            Creations
                        </span>
                    </h2>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
                        A curated showcase of our latest fit-outs and renovations across Dubai. Each project represents
                        our commitment to excellence and innovation.
                    </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.length > 0 ? (
                        projects.map((project) => (
                            <div key={project._id} className="group relative overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-100 transition-all duration-300 hover:shadow-2xl hover:ring-yellow-200">
                                <div className="relative overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.projectName}
                                        className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>


                                    {/* View project button */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                        <button className="rounded-full bg-white/20 p-3 backdrop-blur-sm transition-transform duration-300 hover:scale-110">
                                            <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-yellow-600 transition-colors duration-300">
                                            {project.projectName}
                                        </h3>
                                        <div className="flex space-x-1">
                                            {[...Array(5)].map((_, i) => (
                                                <svg key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>

                                    <p className="text-gray-600 mb-4">
                                        {project.shortDescription}
                                    </p>

                                    <div className="flex flex-col items-start justify-between">
                                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                                            <div className="flex items-center">
                                                <svg className="mr-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                                </svg>
                                                {project.location}
                                            </div>

                                        </div>
                                        {/* <div className="flex items-center justify-between space-x-4 text-sm text-gray-500">

                                            <div className="flex items-center">
                                                <svg className="mr-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                                </svg>
                                                {project.duration}
                                            </div>
                                            <button
                                                onClick={() => navigate(`/project/${project._id}`)}
                                                className="text-yellow-600 hover:text-yellow-700 font-medium text-sm transition-colors duration-300"
                                            >
                                                View Details →
                                            </button>
                                        </div> */}

                                        <div className="flex items-center justify-between w-full text-sm text-gray-500">
                                            <div className="flex items-center">
                                                <svg className="mr-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                                </svg>
                                                {project.duration}
                                            </div>
                                            <button
                                                onClick={() => navigate(`/project/${project._id}`)}
                                                className="text-yellow-600 hover:text-yellow-700 font-medium text-sm transition-colors duration-300"
                                            >
                                                View Details →
                                            </button>
                                        </div>



                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-12">
                            <p className="text-gray-500 text-lg">No projects available at the moment.</p>
                        </div>
                    )}
                </div>

                {/* View all projects button */}
                <div className="mt-12 text-center">
                    <button
                        onClick={() => navigate("/portfolio")}
                        className="group inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 px-8 py-4 font-semibold text-black shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    >
                        <span>View All Projects</span>
                        <svg className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Projects;


