import { useParams } from '@tanstack/react-router';
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useProject } from "../hook/useProjects";
import Loading from "../components/ui/Loading";
import { FaArrowLeft, FaMapMarkerAlt, FaClock, FaCalendarAlt } from "react-icons/fa";


const ProjectDetails = () => {
    // const { id } = useParams();
    const { id } = useParams({ from: "/project/$id" });

    // console.log("id in project details", id);
    const navigate = useNavigate();
    const { data, isLoading, error } = useProject(id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <Loading />
            </div>
        );
    }

    if (error || !data?.data) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h2>
                    <p className="text-gray-600 mb-6">The project you're looking for doesn't exist or has been removed.</p>
                    <button
                        onClick={() => navigate("/")}
                        className="inline-flex items-center px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition-colors duration-300"
                    >
                        <FaArrowLeft className="mr-2" />
                        Back to Home
                    </button>
                </div>
            </div>
        );
    }

    const project = data.data;

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Back Button */}
            <div className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-4">
                    <button
                        onClick={() => navigate(-1)}
                        className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-300"
                    >
                        <FaArrowLeft className="mr-2" />
                        Back to Projects
                    </button>
                </div>
            </div>

            {/* Project Hero Section */}
            <div className="relative">
                <div className="h-96 md:h-[500px] overflow-hidden">
                    <img
                        src={project.image}
                        alt={project.projectName}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>

                {/* Project Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
                    <div className="max-w-7xl mx-auto">
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                            {project.projectName}
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200 max-w-3xl">
                            {project.shortDescription}
                        </p>
                    </div>
                </div>
            </div>

            {/* Project Details */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Overview</h2>
                            <div className="prose prose-lg max-w-none">
                                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                                    {project.details}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Project Info Card */}
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Project Information</h3>

                            <div className="space-y-4">
                                {/* Location */}
                                <div className="flex items-start space-x-3">
                                    <div className="flex-shrink-0 w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                                        <FaMapMarkerAlt className="text-yellow-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Location</h4>
                                        <p className="text-gray-600">{project.location}</p>
                                    </div>
                                </div>

                                {/* Duration */}
                                <div className="flex items-start space-x-3">
                                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                        <FaClock className="text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Duration</h4>
                                        <p className="text-gray-600">{project.duration}</p>
                                    </div>
                                </div>

                                {/* Created Date */}
                                <div className="flex items-start space-x-3">
                                    <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                        <FaCalendarAlt className="text-green-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Project Date</h4>
                                        <p className="text-gray-600">
                                            {new Date(project.createdAt).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Card */}
                        <div className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl shadow-lg p-6 text-white">
                            <h3 className="text-xl font-bold mb-4">Interested in Similar Work?</h3>
                            <p className="text-yellow-100 mb-6">
                                Get in touch with us to discuss your project requirements.
                            </p>
                            <button
                                onClick={() => navigate("/contact")}
                                className="w-full bg-white text-yellow-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                            >
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Related Projects Section */}
            <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            More Projects
                        </h2>
                        <p className="text-gray-600">
                            Explore our other completed projects
                        </p>
                    </div>

                    <div className="text-center">
                        <button
                            onClick={() => navigate("/projects")}
                            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                        >
                            View All Projects
                            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
