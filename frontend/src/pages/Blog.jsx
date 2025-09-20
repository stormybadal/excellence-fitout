import React, { useEffect, useRef } from "react";
import BlogCard from "../components/shared/BlogCard";
import { useBlogs } from "../hook/useBlogs";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = useBlogs({ limit: 9 });

  const allBlogs = data?.pages?.flatMap(page => page.entries) || [];

  // Intersection Observer for automatic infinite scroll
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

  if (isLoading) return <p className="text-center">Loading blogs...</p>;

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
          {allBlogs.map((blog, idx) => (
            <BlogCard key={blog._id || idx} blog={blog} />
          ))}
        </div>

        {/* Loader for next page */}
        <div ref={loadMoreRef} className="text-center py-4">
          {isFetchingNextPage && <p>Loading more blogs...</p>}
          {!hasNextPage && <p>No more blogs!</p>}
        </div>
      </div>
    </section>
  );
};

export default Blog;
