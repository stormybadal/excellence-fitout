import { useParams } from "@tanstack/react-router";
import React, { useEffect } from "react";
import BackNavigation from '../components/shared/BackNavigation';
import { useBlog } from "../hook/useBlogs";

const BlogDetails = () => {
  const { slug } = useParams({ from: "/blog/$slug" });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data: blog, isLoading, isError } = useBlog(slug);

  if (isLoading) return <p>Loading...</p>;
  if (isError || !blog) return <p>Blog not found!</p>;

  return (
    <>
      <BackNavigation label="Go To Blog" href="/blog" />
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

        {/* Author Info (Fallback if not available) */}
        <div className="flex items-center gap-4 mb-6">
          <img
            src={blog.author?.avatar || "https://via.placeholder.com/40"}
            alt={blog.author?.name || "Unknown Author"}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="text-gray-800 font-semibold">{blog.author?.name || "Admin"}</p>
            <p className="text-sm text-gray-500">
              {blog.createdAt ? new Date(blog.createdAt).toLocaleDateString() : ""}
            </p>
          </div>
        </div>

        {/* Blog Content */}
        <div className="prose prose-lg text-gray-700 max-w-none">
          {blog.content.split("\n").map((paragraph, idx) => (
            <p key={idx}>{paragraph.trim()}</p>
          ))}
        </div>

        {/* Tags */}
        {blog.tags?.length > 0 && (
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
        )}
      </div>
    </>
  );
};

export default BlogDetails;
