import React from "react";
import Form from "./Form";

function FileUpload() {
  return (
    <div className="h-screen px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="mb-6">
        <div className="flex flex-col md:flex-row items-center justify-between w-full space-y-4 md:space-y-0">
          <h2 className="w-full text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent font-bold text-center md:text-left">
            Lets make Graphs
          </h2>
          <div className="bg-gradient-to-tl from-blue-600 to-violet-600 md:ml-4 h-0.5 w-full md:w-1/3 lg:w-1/2 hidden md:block"></div>
        </div>
        <p className="text-gray-400 text-justify mt-4 md:mt-8 text-sm sm:text-base">
          Our products/services have earned the trust of customers from all
          corners of the globe. Whether you're a small business looking to
          scale, a large enterprise optimizing operations, or an individual
          seeking high-quality solutions, we are proud to deliver exceptional
          results that meet diverse needs.
        </p>
      </div>
      <Form />
    </div>
  );
}

export default FileUpload;
