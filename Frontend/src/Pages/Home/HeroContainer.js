import React from "react";
import Hero from "./Hero";
import FeatureSection from "./FeatureSection";
import CTA from "./CTA";
import Testimonial from "./Testimonial";

function HeroContainer() {
  return (
    <div className="py-0 my-0 space-y-0">
      {/* Hero Section */}
      <div>
        <Hero />
      </div>

      {/* Call-to-Action Section */}
      <div>
        <CTA />
      </div>

      {/* Feature Section */}
      <div>
        <FeatureSection />
      </div>

      {/* Testimonial Section */}
      <div>
        <Testimonial />
      </div>
    </div>
  );
}

export default HeroContainer;
