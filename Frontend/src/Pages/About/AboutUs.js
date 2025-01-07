import React from "react";

function AboutUs() {
  const features = [
    {
      title: "Dynamic Charts and Graphs",
      description:
        "Enable real-time data updates to reflect the latest information automatically.",
      icon: "fa-keyboard",
    },
    {
      title: "Interactive Visualizations",
      description:
        "Provide user-friendly tools like zoom, pan, hover effects, and tooltips for deeper data exploration.",
      icon: "fa-pen-ruler",
    },
    {
      title: "Downloadable Options",
      description:
        "Allow users to export charts and graphs as high-quality images or PDF files for offline use.",
      icon: "fa-download",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <div className="mb-12">
        <div className="flex flex-col md:flex-row items-center justify-between w-full space-y-4 md:space-y-0">
          <h2 className="text-3xl md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent font-bold w-full text-center md:text-left">
            About Us
          </h2>
          <div className="bg-gradient-to-tl from-blue-600 to-violet-600 h-0.5 w-full hidden md:block"></div>
        </div>
        <p className="text-gray-600 text-base md:text-lg text-center md:text-left mt-6">
          Our products have earned the trust of customers from all corners of
          the globe. Whether you're a small business looking to scale, a large
          enterprise optimizing operations, or an individual seeking
          high-quality solutions, we are proud to deliver exceptional results
          that meet diverse needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 rounded-lg border border-slate-200 bg-white hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2"
          >
            <div className="mb-4 flex justify-center md:justify-start">
              <i
                className={`fa-duotone fa-regular ${feature.icon} fa-xl text-blue-900`}
              ></i>
            </div>
            <h3 className="text-lg md:text-xl font-bold bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent text-center md:text-left">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm md:text-base text-center md:text-left mt-2">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
