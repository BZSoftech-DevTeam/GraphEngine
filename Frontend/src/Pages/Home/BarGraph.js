import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const GraphHero = () => {
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
        borderWidth: 1,
      },
      {
        label: "Dataset 2",
        data: dataPoints2,
        backgroundColor: "rgba(255, 99, 132, 0.6)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "Dataset 3",
        data: dataPoints3,
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true, // Show the legend
      },
      title: {
        display: false, // Hide the title
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="w-full aspect-w-16 aspect-h-9">
        <div className="w-full h-full">
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default GraphHero;
