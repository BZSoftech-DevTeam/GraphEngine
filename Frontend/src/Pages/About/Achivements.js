import React from "react";

function Achievements() {
  const achievements = [
    { number: "250+", title: "Charts & Graphs" },
    { number: "10K+", title: "Happy Users" },
    { number: "99%", title: "Satisfaction Rate" },
  ];

  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      <div className="mb-12">
        <div className="flex flex-col md:flex-row items-center justify-between w-full space-y-4 md:space-y-0">
          <h2 className="text-3xl md:text-4xl lg:text-5xl bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent font-bold w-full text-center md:text-left">
            Achievements
          </h2>
          <div className="bg-gradient-to-tl from-blue-600 to-violet-600 h-0.5 w-full hidden md:block"></div>
        </div>
        <p className="text-gray-600 text-base md:text-lg text-center md:text-left mt-6">
          Our accomplishments reflect our commitment to excellence and
          innovation. With a proven track record of delivering top-notch
          solutions, we have empowered businesses of all sizes to achieve their
          goals. From creating cutting-edge charts and graphs to ensuring
          unparalleled user satisfaction, our milestones are a testament to the
          trust and confidence our clients place in us.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="p-6 rounded-lg border border-slate-200 bg-white hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 text-center"
          >
            <h4 className="text-4xl md:text-5xl bg-clip-text font-semibold bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent mb-3">
              {achievement.number}
            </h4>
            <p className="text-base md:text-lg font-semibold text-blue-900">
              {achievement.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Achievements;
