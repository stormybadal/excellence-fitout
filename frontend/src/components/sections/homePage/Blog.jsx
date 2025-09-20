import React from "react";
import { useBlogs } from "../../../hook/useBlogs";
import Heading from '../../shared/Heading.Jsx';
import BlogCard from "../../shared/BlogCard";



const Blog = () => {

  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = useBlogs({ limit: 3 });

  const allBlogs = data?.pages?.flatMap(page => page.entries) || [];

    return (
        <section id="blog" className="bg-gray-50 py-16">
                        <div className="mx-auto max-w-7xl px-4">

          <Heading title="Our" highlight="Blog"/>
    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {allBlogs.map((blog, idx) => (
            <BlogCard key={blog._id || idx} blog={blog} />
          ))}
        </div>
</div>
           </section>
    );
};

export default Blog;


