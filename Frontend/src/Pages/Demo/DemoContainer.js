import React from "react";
import GraphsType from "./GraphsType";
import LineCharts from "./LineCharts";
import AreaCharts from "./AreaCharts";

function DemoContainer() {
  return (
    <div className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8 max-w-full md:max-w-[80rem] mx-auto space-y-6 sm:space-y-8">
      <GraphsType />
      <LineCharts />
      <AreaCharts />
    </div>
  );
}

export default DemoContainer;
