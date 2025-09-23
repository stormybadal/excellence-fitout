import React from "react";
import { useNavigate } from "@tanstack/react-router"; // or react-router-dom if that's what you're using

function BlogCard({ blog }) {
  const navigate = useNavigate();

  return (
    <div
      className="transform overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative">
        <img
          src={blog.image}
          alt={blog.title}
          className="h-48 w-full object-cover"
        />

        {/* Icon Circle */}
        {/* <div className="absolute -bottom-5 left-4 flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-blue-900 text-2xl text-white shadow">
          {blog.icon}
        </div> */}
      </div>

      <div className="p-6 pt-8">
        <h3 className="mb-2 text-lg font-semibold text-blue-900">
          {blog.title}
        </h3>
        <p className="mb-4 text-sm text-gray-600">{blog.excerpt}</p>
        <a
          onClick={() => navigate({ to: "/blog/$slug", params: { slug: blog._id } })}
          className="flex items-center gap-1 text-sm font-medium text-orange-500 hover:underline cursor-pointer"
        >
          Learn more <span className="text-xs">→</span>
        </a>
      </div>
    </div>
  );
}

export default BlogCard;
