import React from "react";
// import ToggleSwitch from "./ToggleSwich";
import PricingTitle from "./PricingTitle";
import PricingCard from "./PricingCard";
import CheckoutPage from "./CheckoutPage";

function Pricing() {
  return (
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <PricingTitle />
      {/* <ToggleSwitch /> */}
      <PricingCard />
    </div>
  );
}

export default Pricing;
