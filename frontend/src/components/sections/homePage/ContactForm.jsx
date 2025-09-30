

import React, { useState } from "react";
import FormsLayout from "../../shared/FormLayout";
import { contactFormFields } from "../../../forms/contact.form";
import { submitContactForm } from "../../../api/mailservice.api";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { toast } from "react-hot-toast";

const ContactForm = () => {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (values) => {
        setLoading(true); // Start loading
        try {
            const response = await submitContactForm(values);

            if (response.data.emailSent) {
                toast.success("Message sent successfully! We'll get back to you within 24 hours.");
            } else {
                toast.error("Message received but email notification failed. We'll still get back to you!");
            }
        } catch (error) {
            toast.error("Failed to send message. Please try again or contact us directly.");
        } finally {
            setLoading(false); // Stop loading after result
        }
    };

    return (
        <section id="contact" className="relative mx-auto max-w-7xl px-4 py-16">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
                {/* Left Column */}
                <div>
                    <h2 className="text-3xl font-extrabold md:text-4xl lg:text-5xl">
                        Get a Free Consultation
                    </h2>
                    <p className="mt-4 text-lg text-gray-700 md:text-xl">
                        Tell us about your project and our Dubai team will reach out within 24 hours.
                    </p>

                    {/* Services List */}
                    <ul className="mt-6 space-y-2 text-base text-gray-700">
                        <li>• Interior fit-outs and refurbishments</li>
                        <li>• Civil works and renovations</li>
                        <li>• Maintenance and emergency assistance</li>
                    </ul>

                    {/* Contact Info */}
                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                        <div className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100 text-gray-800">
                            <FaPhoneAlt className="text-xl text-yellow-600" />
                            <div>
                                <div className="text-sm font-semibold">Call us</div>
                                <a href="tel:+971552146089" className="text-sm text-gray-700 hover:underline">+971 55214 6089</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100 text-gray-800">
                            <FaEnvelope className="text-xl text-yellow-600" />
                            {/* <div>
                                <div className="text-sm font-semibold">Email</div>
                                <a href="mailto:info@excellenceinteriors.com" className="text-sm text-gray-700 hover:underline">info@excellenceinteriors.com</a>
                                <a href="mailto:excellenceservices2024@gmail.com" className="text-sm text-gray-700 hover:underline">excellenceservices2024@gmail.com</a>
                            </div> */}

                            <div className="flex flex-col space-y-1">
                                <a href="mailto:info@excellenceinteriors.com" className="text-sm text-gray-700 hover:underline">
                                    info@excellenceinteriors.com
                                </a>
                                <a href="mailto:excellenceservices2024@gmail.com" className="text-sm text-gray-700 hover:underline">
                                    excellenceservices2024@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100 text-gray-800">
                            <FaMapMarkerAlt className="text-xl text-yellow-600" />
                            <div>
                                <div className="text-sm font-semibold">Address</div>
                                <div className="text-sm text-gray-700">Business Bay, Dubai, UAE</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-100 text-gray-800">
                            <FaClock className="text-xl text-yellow-600" />
                            <div>
                                <div className="text-sm font-semibold">Hours</div>
                                <div className="text-sm text-gray-700">Mon – Sat: 8:00 AM – 6:00 PM</div>
                            </div>
                        </div>
                    </div>

                    {/* Mini Testimonial */}
                    <blockquote className="mt-10 border-l-4 border-yellow-500 pl-5 text-lg italic text-gray-700">
                        “Excellence Interior and Construction transformed our office space beautifully and on time. Highly recommend their team in Dubai.”
                    </blockquote>


                </div>

                {/* Right Column: Form */}
                <div>
                    <FormsLayout
                        fields={contactFormFields}
                        onSubmit={handleSubmit}
                        submitLabel={loading ? "Submitting..." : "Request Callback"}
                        disabled={loading} // Disable button while submitting
                    />
                </div>
            </div>
        </section>
    );
};

export default ContactForm;

