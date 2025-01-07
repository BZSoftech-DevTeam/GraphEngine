import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const StreamGraph = () => {
  // Initialize with 20 random data points for three datasets
  const [dataPoints1, setDataPoints1] = useState(
    Array(20)
      .fill(0)
      .map(() => Math.floor(Math.random() * 100))
  );
  const [dataPoints2, setDataPoints2] = useState(
    Array(20)
      .fill(0)
      .map(() => Math.floor(Math.random() * 100))
  );
  const [dataPoints3, setDataPoints3] = useState(
    Array(20)
      .fill(0)
      .map(() => Math.floor(Math.random() * 100))
  );

  const [labels, setLabels] = useState(
    Array(20)
      .fill(0)
      .map((_, i) => `${i}s`)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      // Generate new random data points for each dataset
      const newDataPoint1 = Math.floor(Math.random() * 100);
      const newDataPoint2 = Math.floor(Math.random() * 100);
      const newDataPoint3 = Math.floor(Math.random() * 100);

      setDataPoints1((prev) => {
        const updatedData = [...prev.slice(1), newDataPoint1];
        return updatedData;
      });

      setDataPoints2((prev) => {
        const updatedData = [...prev.slice(1), newDataPoint2];
        return updatedData;
      });

      setDataPoints3((prev) => {
        const updatedData = [...prev.slice(1), newDataPoint3];
        return updatedData;
      });

      // Update labels to keep track of time
      setLabels((prev) => {
        const newLabels = [...prev.slice(1)];
        newLabels.push(`${newLabels.length + prev.length - 20}s`); // Adjust for cumulative time
        return newLabels;
      });
    }, 2000); // Set to update every 2 seconds

    return () => clearInterval(interval); // Clean up on component unmount
  }, []);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Dataset 1",
        data: dataPoints1,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        fill: "origin", // Fill the area under the curve
      },
      {
        label: "Dataset 2",
        data: dataPoints2,
        backgroundColor: "rgba(255, 99, 132, 0.6)",
        borderColor: "rgba(255, 99, 132, 1)",
        fill: "-1", // Stack above the first dataset
      },
      {
        label: "Dataset 3",
        data: dataPoints3,
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        fill: "-1", // Stack above the second dataset
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide the legend to remove dataset labels
      },
      title: {
        display: false, // Hide the title
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          display: false, // Hide the x-axis labels
        },
        grid: {
          display: true, // Keep the x-axis grid lines
        },
        border: {
          display: true, // Keep the x-axis line visible
        },
      },
      y: {
        stacked: true, // Enable stacking for a streamgraph effect
        beginAtZero: true,
        ticks: {
          display: false, // Hide the y-axis labels
        },
        grid: {
          display: true, // Keep the y-axis grid lines
        },
        border: {
          display: true, // Keep the y-axis line visible
        },
      },
    },
    elements: {
      line: {
        tension: 0.4, // Smooth curves for the streamgraph
      },
    },
  };

  return (
    <div className="h-96 sm:h-96 md:h-96 lg:h-96 xl:h-96">
      <Line
        data={data}
        options={{
          ...options,
          responsive: true,
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};

export default StreamGraph;
