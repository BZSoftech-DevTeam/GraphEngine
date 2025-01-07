import React from "react";
import graph from "../../Assets/anychart.png";

function CTA() {
  return (
    <div className=" bg-gradient-to-tl from-blue-600 to-violet-600">
      <div className="flex flex-wrap items-center justify-between space-x-4  max-w-[80rem] mx-auto w-full h-[22rem] py-2 px-12">
        <div>
          <h1 className="text-4xl md:mx-0 mx-auto font-semibold uppercase text-blue-950">
            It's Super
          </h1>
          <h1 className="md:text-8xl text-5xl md:mx-0 mx-auto font-black text-blue-950">
            FAST
          </h1>
          <p className="text-blue-950 max-w-xs">
            Generate blazzing fast quick charts and graphs that illustrates your
            real time data
          </p>
          <button className="bg-blue-900 md:mx-0 mx-auto px-8 md:py-4 py-2 rounded text-white mt-4">
            Documentation
          </button>
        </div>
        <div>
          <img src={graph} alt="err" className="w-[50rem]" />
        </div>
      </div>
    </div>
  );
}

export default CTA;
