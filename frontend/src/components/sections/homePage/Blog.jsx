import React from "react";
import { useBlogs } from "../../../hook/useBlogs";
import Heading from '../../shared/Heading.jsx';
import BlogCard from "../../shared/BlogCard";
import { useNavigate } from "react-router-dom";



const Blog = () => {

  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = useBlogs({ limit: 3 });

  const allBlogs = data?.pages?.flatMap(page => page.entries) || [];

  const navigate = useNavigate();

  return (
    <section id="blog" className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4">

        <Heading title="Our" highlight="Blog" />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {allBlogs.map((blog, idx) => (
            <BlogCard key={blog._id || idx} blog={blog} />
          ))}
        </div>
      </div>

      {/* View all projects button */}
      <div className="mt-12 text-center">
        <button
          onClick={() => navigate("/blog")}
          className="group inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 px-8 py-4 font-semibold text-black shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
          <span>View All Blogs</span>
          <svg className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Blog;


