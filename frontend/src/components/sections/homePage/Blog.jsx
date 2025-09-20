import React from "react";
import { useBlogs } from "../../../hook/useBlogs";

const posts = Array.from({ length: 3 }).map((_, i) => ({
    id: i + 1,
    title: `Dubai Fit-out Insight ${i + 1}`,
    excerpt: "Trends, costs, and timelines for construction in Dubai.",
    image: `https://picsum.photos/seed/blog-${i + 1}/600/400`,
}));


const Blog = () => {

  const { data, isLoading, error } = useBlogs({ page: 1, limit: 3 }); // pass params if needed

console.log("data",data);
    return (
        <section id="blog" className="bg-gray-50 py-16">
            <div className="mx-auto max-w-7xl px-4">
                <h2 className="text-2xl font-bold md:text-3xl">From Our Blog</h2>
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {posts.map((p) => (
                        <article key={p.id} className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-100">
                            <img src={p.image} alt={p.title} className="h-44 w-full object-cover" />
                            <div className="p-4">
                                <h3 className="font-semibold">{p.title}</h3>
                                <p className="mt-1 text-sm text-gray-600">{p.excerpt}</p>
                                <a href="#" className="mt-3 inline-block text-sm font-semibold text-yellow-700 hover:underline">Read More</a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;


