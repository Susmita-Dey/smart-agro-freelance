import React from "react";
import NewsCard from "./NewsCard";

function NewsSection() {
  const data = [
    {
      author: "John Doe",
      comments: 10,
      date: "3 Sept 2023",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, unde!",
    },
    {
      author: "John Doe",
      comments: 10,
      date: "3 Sept 2023",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, unde!",
    },
    {
      author: "John Doe",
      comments: 10,
      date: "3 Sept 2023",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, unde!",
    },
  ];

  return (
    <div className="py-8 w-full flex flex-col items-center" id="news">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm  mb-3">FROM THE BLOG</p>
          <h3 className="text-3xl  font-bold">News & Articles</h3>
        </div>
        <div className="flex flex-col sm:flex-col md:flex-row items-center justify-center  space-y-0 md:space-y-0 md:space-x-8">
          {data.map((item, index) => (
            <NewsCard
              author={item.author}
              comments={item.comments}
              text={item.text}
              date={item.date}
              // image={item.image}
              image="/image-26.jpg"
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewsSection;
