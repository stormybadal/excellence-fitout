import React, { useEffect } from "react";
import BlogCard from "../components/shared/BlogCard";

// Dummy data for blogs
const blogs = [
  {
    id: "1",
    title: "Designing with Purpose",
    excerpt: "Learn how to create purposeful and impactful UI/UX designs in your next project.",
    image: "/images/blog1.jpg", // Replace with actual paths or URLs
    icon: "🧠",
  },
  {
    id: "2",
    title: "React vs Vue in 2025",
    excerpt: "Explore the pros and cons of React and Vue as the frontend landscape evolves.",
    image: "/images/blog2.jpg",
    icon: "⚛️",
  },
  {
    id: "3",
    title: "Building Better Components",
    excerpt: "Dive into advanced component patterns for cleaner, reusable code.",
    image: "/images/blog3.jpg",
    icon: "🧩",
  },
  {
    id: "4",
    title: "Tailwind CSS Best Practices",
    excerpt: "Boost productivity and maintainability with these Tailwind strategies.",
    image: "/images/blog4.jpg",
    icon: "🎨",
  },
  {
    id: "5",
    title: "State Management Simplified",
    excerpt: "A breakdown of state management techniques that scale with your app.",
    image: "/images/blog5.jpg",
    icon: "📦",
  },
  {
    id: "6",
    title: "Next.js for Beginners",
    excerpt: "A beginner-friendly guide to building full-stack apps with Next.js.",
    image: "/images/blog6.jpg",
    icon: "🚀",
  },
];

const Blog = () => {
useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-2xl font-semibold text-orange-500">— Our Blogs</p>
          <h2 className="text-4xl font-extrabold text-gray-900">
            Blogs That Fit <span className="text-orange-500">Your Interests</span>
          </h2>
        </div>


        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, idx) => (
          
          <BlogCard blog={blog}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
