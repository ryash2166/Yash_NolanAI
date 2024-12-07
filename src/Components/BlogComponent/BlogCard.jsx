import React, { useState } from "react";
import { BlogData } from "./BlogData";
import UseCard from "./UseCard";
import Button from "../Common/Button";

const BlogCard = () => {
  const Card = 9;
  const [visibleCard, setVisibleCard] = useState(Card);

  const Load = () => {
    setVisibleCard((prev) => prev + Card);
  };
  return (
    <div className="flex flex-wrap justify-center relative min-h-[300px]">
      {BlogData.slice(0, visibleCard).map((blog, index) => (
        <UseCard key={index} {...blog} />
      ))}
      {visibleCard < BlogData.length && (
        <Button
          className="mt-[30px]"
          text="See More Posts"
          iconSize="w-6 h-6"
          onClick={Load}
        />
      )}
    </div>
  );
};

export default BlogCard;
