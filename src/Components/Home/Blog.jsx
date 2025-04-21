import React from "react";
import BlogCard from "../BlogCard";
import Card from "../Card";
import ProfileCard from "../ProfileCard";

const Blog = () => {
  return (
    <section className="flex items-center justify-around flex-wrap gap-8 p-10">
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </section>
  );
};

export default Blog;
