import React from "react";
import BlogCard from "../Cards/BlogCard";
import Card from "../Cards/Card";
import ProfileCard from "../Cards/ProfileCard";

const Blog = () => {
  return (
    <section className="flex items-center justify-around flex-wrap gap-8 p-10 pt-52">
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
