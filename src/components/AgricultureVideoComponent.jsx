import Link from "next/link";
import React from "react";

const AgricultureVideoComponent = () => {
  return (
    <div className="relative w-full h-full bg-cover bg-center">
      <video
        alt="Agriculture Background"
        className="w-full h-[90vh] object-cover opacity-50"
        autoPlay
        muted
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 flex lg:flex-row flex-col justify-center items-center p-8 backdrop:blur-md">
        <h2 className="text-3xl lg:text-5xl font-extrabold w-1/2 text-wrap leading-snug mb-4">
          Agriculture Matters to the Future of India
        </h2>
        <Link href={"/video.mp4"}>
          <div className="flex items-center">
            <div className="bg-white rounded-full p-3 mr-4">
              <svg
                className="w-8 h-8 text-gray-900"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <span className="text-lg  italic">Watch the video</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AgricultureVideoComponent;
