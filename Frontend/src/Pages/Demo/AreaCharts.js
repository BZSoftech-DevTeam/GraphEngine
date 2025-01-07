import React from "react";
import logo from "../../Assets/logos.png";
import { Link } from "react-router-dom";

function AreaCharts() {
  return (
    <div className="p-4">
      <div className="space-y-4">
        <div className="flex items-center justify-start">
          <img src={logo} alt="err" className="w-8 h-8" />
          <h1 className="text-xl sm:text-2xl font-bold text-blue-800 mx-4">
            Area Charts
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="border border-slate-100 overflow-hidden rounded-lg shadow-sm">
            <Link to="/line-chart">
              <div className="h-32 bg-blue-200 w-full"></div>
              <div className="h-12 bg-red-200 w-full flex items-center justify-center">
                <h1 className="font-semibold text-sm sm:text-base">
                  Line Chart
                </h1>
              </div>
            </Link>
          </div>

          <div className="border border-slate-100 overflow-hidden rounded-lg shadow-sm">
            <Link to="/splined-line-chart">
              <div className="h-32 bg-blue-200 w-full"></div>
              <div className="h-12 bg-red-200 w-full flex items-center justify-center">
                <h1 className="font-semibold text-sm sm:text-base">
                  Splined Line Chart
                </h1>
              </div>
            </Link>
          </div>

          <div className="border border-slate-100 overflow-hidden rounded-lg shadow-sm">
            <Link to="/forecast-chart">
              <div className="h-32 bg-blue-200 w-full"></div>
              <div className="h-12 bg-red-200 w-full flex items-center justify-center">
                <h1 className="font-semibold text-sm sm:text-base">
                  Forecast Chart
                </h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AreaCharts;
