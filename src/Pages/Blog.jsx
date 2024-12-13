import React from "react";
import BlogTitle from "../Components/BlogComponent/BlogTitle";
import BlogMain from "../Components/BlogComponent/BlogMain";
import BlogCard from "../Components/BlogComponent/BlogCard";

const Blog = () => {
  return (
    <div className="bg-[#171a1f] ">
      <BlogTitle />
      <div className="flex flex-wrap justify-center relative z-[2] ">
        <BlogMain />
        <BlogCard />
      </div>
    </div>
  );
};

export default Blog;
