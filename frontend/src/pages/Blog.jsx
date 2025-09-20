// import React, { useEffect } from "react";
// import BlogCard from "../components/shared/BlogCard";
// // useBlogs.js
// import { useQuery } from "@tanstack/react-query";
// import { fetAllBlog } from "../api/blog.api";

// // Dummy data for blogs
// const blogs = [
//   {
//     id: "1",
//     title: "Designing with Purpose",
//     excerpt: "Learn how to create purposeful and impactful UI/UX designs in your next project.",
//     image: "/images/blog1.jpg", // Replace with actual paths or URLs
//     icon: "🧠",
//   },
//   {
//     id: "2",
//     title: "React vs Vue in 2025",
//     excerpt: "Explore the pros and cons of React and Vue as the frontend landscape evolves.",
//     image: "/images/blog2.jpg",
//     icon: "⚛️",
//   },
//   {
//     id: "3",
//     title: "Building Better Components",
//     excerpt: "Dive into advanced component patterns for cleaner, reusable code.",
//     image: "/images/blog3.jpg",
//     icon: "🧩",
//   },
//   {
//     id: "4",
//     title: "Tailwind CSS Best Practices",
//     excerpt: "Boost productivity and maintainability with these Tailwind strategies.",
//     image: "/images/blog4.jpg",
//     icon: "🎨",
//   },
//   {
//     id: "5",
//     title: "State Management Simplified",
//     excerpt: "A breakdown of state management techniques that scale with your app.",
//     image: "/images/blog5.jpg",
//     icon: "📦",
//   },
//   {
//     id: "6",
//     title: "Next.js for Beginners",
//     excerpt: "A beginner-friendly guide to building full-stack apps with Next.js.",
//     image: "/images/blog6.jpg",
//     icon: "🚀",
//   },
// ];


// // data here might be filters, pagination, search, etc.
// export const useBlogs = (data) => {
//   return useQuery({
//     queryKey: ["blogs", data], // cache key based on params
//     queryFn: () => fetAllBlog(data),
//     staleTime: 1000 * 60 * 5, // optional: 5 minutes
//     cacheTime: 1000 * 60 * 10, // optional: 10 minutes
//     refetchOnWindowFocus: false, // optional
//   });
// };


// const Blog = () => {
// useEffect(() => {
//   window.scrollTo(0, 0);
// }, []);
//   return (
//     <section className="bg-white py-16">
//       <div className="mx-auto max-w-6xl px-4">
//         {/* Header */}
//         <div className="mb-12 text-center">
//           <p className="mb-2 text-2xl font-semibold text-orange-500">— Our Blogs</p>
//           <h2 className="text-4xl font-extrabold text-gray-900">
//             Blogs That Fit <span className="text-orange-500">Your Interests</span>
//           </h2>
//         </div>


//         {/* Blog Cards Grid */}
//         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {blogs.map((blog, idx) => (
          
//           <BlogCard blog={blog}/>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Blog;



import React, { useEffect } from "react";
import BlogCard from "../components/shared/BlogCard";
import { useBlogs } from "../hook/useBlogs"; // make sure this path is correct

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

 const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = useBlogs({ limit: 9 });

  // if (isLoading) return <p className="text-center">Loading blogs...</p>;
  // if (error) return <p className="text-center text-red-500">Error: {error.message}</p>;

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
          {data?.blogs?.map((blog, idx) => (
            <BlogCard key={blog.id || idx} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
