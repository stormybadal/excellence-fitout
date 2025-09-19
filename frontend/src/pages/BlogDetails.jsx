import { useParams } from "@tanstack/react-router";
import React, { useEffect } from "react";
import BackNavigation from '../components/shared/BackNavigation'

const BlogDetails = () => {
      const { slug } = useParams({ from: "/blog/$slug" });
    useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  const blog = {
    title: "Designing with Purpose",
    image: "/images/blog1.jpg", // Replace with real image
    author: {
      name: "Jane Doe",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      date: "September 18, 2025",
    },
    content: `
      In today’s fast-paced digital world, good design is no longer just about appearance. It’s about creating intuitive, engaging, and accessible experiences for users. 
      Designing with purpose means thinking beyond colors and typography, and focusing on solving real problems.
      
      In this article, we’ll explore how to design with clarity, empathy, and intention. Whether you're building a landing page or a full SaaS product, every decision should be user-centered.

      Start by understanding your audience. Ask questions like: What problem are they trying to solve? What frustrations do they face? With that foundation, every design element can be justified and refined for maximum impact.

      Remember, simplicity is the ultimate sophistication.
    `,
    tags: ["UI/UX", "Design Thinking", "Product"],
  };

  return (
<>
<BackNavigation label="Go To Blog" href="/blog"/>
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Blog Header Image */}
      <div className="mb-8">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-64 object-cover rounded-xl shadow-md"
        />
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
        {blog.title}
      </h1>

      {/* Author Info */}
      <div className="flex items-center gap-4 mb-6">
        <img
          src={blog.author.avatar}
          alt={blog.author.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="text-gray-800 font-semibold">{blog.author.name}</p>
          <p className="text-sm text-gray-500">{blog.author.date}</p>
        </div>
      </div>

      {/* Blog Content */}
      <div className="prose prose-lg text-gray-700 max-w-none">
        {blog.content.split("\n").map((paragraph, idx) => (
          <p key={idx}>{paragraph.trim()}</p>
        ))}
      </div>

      {/* Tags */}
      <div className="mt-8">
        <h4 className="text-sm font-semibold text-gray-700 mb-2">Tags:</h4>
        <div className="flex gap-2 flex-wrap">
          {blog.tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  </>
  );
};

export default BlogDetails;

