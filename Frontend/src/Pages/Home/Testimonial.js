import React from "react";

const Testimonials = () => {
  return (
    <div className="overflow-hidden pb-12 sm:pb-16 md:pb-24">
      <div className="relative max-w-[85rem] px-4 mx-auto">
        {/* Title */}
        <div className="mb-6 sm:mb-10 md:mb-16">
          <div className="flex flex-col md:flex-row items-center justify-between w-full space-y-4 md:space-y-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent font-bold text-center md:text-left w-full md:w-auto">
              Testimonials
            </h2>
            <div className="hidden md:block bg-blue-300 ml-4 h-0.5 flex-grow"></div>
          </div>
          <p className="text-gray-400 text-justify mt-4 sm:mt-6 md:mt-8 text-sm sm:text-base">
            Our products/services have earned the trust of customers from all
            corners of the globe. Whether you're a small business looking to
            scale, a large enterprise optimizing operations, or an individual
            seeking high-quality solutions, we are proud to deliver exceptional
            results that meet diverse needs.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Card 1 */}
          <div className="flex h-auto">
            <div className="flex flex-col bg-slate-100 rounded-xl w-full">
              <div className="flex-auto p-3 sm:p-4 md:p-6">
                <p className="text-sm sm:text-base italic md:text-lg text-gray-800">
                  "With Preline, we're able to easily track our performance in
                  full detail. It's become an essential tool for us to grow and
                  engage with our audience."
                </p>
              </div>
              <div className="p-3 sm:p-4 bg-gray-100 rounded-b-xl md:px-7">
                <div className="flex items-center gap-x-2 sm:gap-x-3">
                  <div className="shrink-0">
                    <img
                      className="w-8 h-8 sm:h-[2.875rem] sm:w-[2.875rem] rounded-full object-cover"
                      src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                      alt="Avatar"
                    />
                  </div>
                  <div className="grow">
                    <p className="text-xs sm:text-sm md:text-base font-semibold text-gray-800">
                      Josh Tyson
                    </p>
                    <p className="text-[10px] sm:text-xs text-gray-500">
                      Product Manager | Capsule
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex h-auto">
            <div className="flex flex-col bg-slate-100 rounded-xl w-full">
              <div className="flex-auto p-3 sm:p-4 md:p-6">
                <p className="text-sm sm:text-base italic md:text-lg text-gray-800">
                  "In September, I will be using this theme for 2 years. I went
                  through multiple updates and changes and I'm very glad to see
                  the consistency and effort made by the team."
                </p>
              </div>
              <div className="p-3 sm:p-4 bg-gray-100 rounded-b-xl md:px-7">
                <div className="flex items-center gap-x-2 sm:gap-x-3">
                  <div className="shrink-0">
                    <img
                      className="w-8 h-8 sm:h-[2.875rem] sm:w-[2.875rem] rounded-full object-cover"
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                      alt="Avatar"
                    />
                  </div>
                  <div className="grow">
                    <p className="text-xs sm:text-sm md:text-base font-semibold text-gray-800">
                      Luisa
                    </p>
                    <p className="text-[10px] sm:text-xs text-gray-500">
                      Senior Director of Operations | Fitbit
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex h-auto">
            <div className="flex flex-col bg-slate-100 rounded-xl w-full">
              <div className="flex-auto p-3 sm:p-4 md:p-6">
                <p className="text-sm sm:text-base italic md:text-lg text-gray-800">
                  "Refreshing and Thought provoking design and it changes my
                  view about how I design the websites. Great typography, modern
                  clean white design, nice tones of the color."
                </p>
              </div>
              <div className="p-3 sm:p-4 bg-gray-100 rounded-b-xl md:px-7">
                <div className="flex items-center gap-x-2 sm:gap-x-3">
                  <div className="shrink-0">
                    <img
                      className="w-8 h-8 sm:h-[2.875rem] sm:w-[2.875rem] rounded-full object-cover"
                      src="https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
                      alt="Avatar"
                    />
                  </div>
                  <div className="grow">
                    <p className="text-xs sm:text-sm md:text-base font-semibold text-gray-800">
                      Alisa Williams
                    </p>
                    <p className="text-[10px] sm:text-xs text-gray-500">
                      Entrepreneur | Happy customer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-10 md:mt-20 flex flex-col sm:flex-row flex-wrap gap-6 sm:gap-12 lg:gap-8">
          <div className="flex-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold text-gray-500">
              Accuracy Rate
            </h4>
            <p className="mt-2 sm:mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text font-semibold bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">
              99.95%
            </p>
            <p className="mt-1 text-gray-400 text-xs sm:text-sm">
              In Fulfilling Orders
            </p>
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold text-gray-500">
              Startup Businesses
            </h4>
            <p className="mt-2 sm:mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text font-semibold bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">
              2000+
            </p>
            <p className="mt-1 text-gray-400 text-xs sm:text-sm">
              Partner Connected
            </p>
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold text-gray-500">
              Happy Customer
            </h4>
            <p className="mt-2 sm:mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text font-semibold bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">
              85%
            </p>
            <p className="mt-1 text-gray-400 text-xs sm:text-sm">
              This Year Alone
            </p>
          </div>
        </div>

        {/* SVG Element */}
        <div
          className="absolute bottom-0 end-0 transform lg:translate-x-32 hidden md:block"
          aria-hidden="true"
        >
          <svg
            className="w-40 h-auto sm:w-72"
            width="1115"
            height="636"
            viewBox="0 0 1115 636"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.990203 279.321C-1.11035 287.334 3.68307 295.534 11.6966 297.634L142.285 331.865C150.298 333.965 158.497 329.172 160.598 321.158C162.699 313.145 157.905 304.946 149.892 302.845L33.8132 272.418L64.2403 156.339C66.3409 148.326 61.5475 140.127 53.5339 138.026C45.5204 135.926 37.3213 140.719 35.2207 148.733L0.990203 279.321Z"
              fill="currentColor"
              className="fill-orange-500"
            />
            <path
              d="M451.609 382.417C446.219 388.708 446.95 398.178 453.241 403.567L555.763 491.398C562.054 496.788 571.524 496.057 576.913 489.766C582.303 483.474 581.572 474.005 575.281 468.615L484.15 390.544L562.222 299.413C567.612 293.122 566.881 283.652 560.59 278.263C554.299 272.873 544.829 273.604 539.44 279.895L451.609 382.417Z"
              fill="currentColor"
              className="fill-orange-500"
            />
            <path
              d="M1110.19 527.589C1109.97 518.731 1102.06 511.769 1093.2 512.757L927.259 531.492C918.401 532.481 911.438 540.392 912.427 549.25C913.416 558.108 921.327 565.071 930.185 564.082L1082.03 547.362L1065.31 699.207C1064.32 708.064 1071.28 715.027 1080.14 716.016C1089 717.004 1095.96 710.042 1096.95 701.184L1110.19 527.589Z"
              fill="currentColor"
              className="fill-orange-500"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
