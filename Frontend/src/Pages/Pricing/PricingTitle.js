import React from "react";

export default function PricingTitle() {
  return (
    <div className="container mx-auto px-4 text-center max-w-3xl py-10">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent font-bold leading-tight mb-4">
        Pricing
      </h2>
      <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-xl mx-auto">
        Whatever your status, our offers evolve according to your needs.
      </p>
    </div>
  );
}
