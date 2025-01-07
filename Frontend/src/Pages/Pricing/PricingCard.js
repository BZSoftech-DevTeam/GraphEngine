import React from "react";
import { useNavigate } from "react-router-dom";

export default function PricingCard() {
  const navigate = useNavigate();

  const pricingPlans = [
    {
      id: "free",
      title: "Free",
      price: "Free",
      description: "Forever free",
      features: ["1 user", "Plan features", "Product support"],
      popular: false,
    },
    {
      id: "startup",
      title: "Startup",
      price: "$39",
      description: "All the basics for starting a new business",
      features: ["2 users", "Plan features", "Product support"],
      popular: true,
    },
    {
      id: "team",
      title: "Team",
      price: "$89",
      description: "Everything you need for a growing business",
      features: ["5 users", "Plan features", "Product support"],
      popular: false,
    },
    {
      id: "enterprise",
      title: "Enterprise",
      price: "$149",
      description: "Advanced features for scaling your business",
      features: ["10 users", "Plan features", "Product support"],
      popular: false,
    },
  ];

  const handleBuyNow = (plan) => {
    // Navigate to checkout page with plan details
    navigate("/checkout", {
      state: { selectedPlan: plan },
    });
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`flex flex-col text-center rounded-lg p-6 md:p-8 border transition-all duration-300 ease-in-out 
              ${
                plan.popular
                  ? "border-2 border-blue-500 bg-white hover:shadow-xl transform"
                  : "border-slate-200 bg-white hover:shadow-lg"
              }`}
          >
            {plan.popular && (
              <div className="mb-4">
                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-600 to-violet-600 text-white">
                  Most Popular
                </span>
              </div>
            )}

            <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
              {plan.title}
            </h4>

            <div className="mb-6">
              <span className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600">
                {plan.price.includes("$") ? "$" : ""}
                {plan.price.replace("$", "")}
              </span>
              <p className="mt-2 text-xs sm:text-sm text-gray-500">
                {plan.description}
              </p>
            </div>

            <ul className="space-y-3 text-xs sm:text-sm flex-grow mb-6">
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center justify-center gap-x-2"
                >
                  <svg
                    className="shrink-0 w-4 h-4 sm:w-5 sm:h-5 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => handleBuyNow(plan)}
              className={`mt-auto py-2.5 sm:py-3 px-4 inline-flex justify-center items-center text-xs sm:text-sm font-semibold rounded-lg transition-all duration-300 
                ${
                  plan.popular
                    ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white hover:from-blue-700 hover:to-violet-700"
                    : "border border-gray-200 bg-white text-gray-800 hover:bg-gray-200"
                }`}
            >
              Buy now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
