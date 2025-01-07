import React, { useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

function Form() {
  const [fileData, setFileData] = useState(null);
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [chartType, setChartType] = useState("line");
  const [chartData, setChartData] = useState(null);
  const [chartTitle, setChartTitle] = useState("Graph Data");
  const [legendVisible, setLegendVisible] = useState(true);

  const [isEditing, setIsEditing] = useState(false);
  const [editableData, setEditableData] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    if (file.type !== "application/json" && !file.name.endsWith(".csv")) {
      alert("Please upload a valid JSON or CSV file");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const fileContent = reader.result;
      try {
        const jsonData = JSON.parse(fileContent);
        setUploading(true);
        let uploadProgress = 0;
        const simulateUpload = () => {
          uploadProgress += 10;
          setProgress(uploadProgress);
          if (uploadProgress < 100) {
            setTimeout(simulateUpload, 300);
          } else {
            setFileData(jsonData);
            setUploading(false);
            generateChartData(jsonData);
          }
        };
        simulateUpload();
      } catch (error) {
        console.error("Invalid JSON format:", error);
        alert("Failed to parse JSON file. Please upload a valid JSON file.");
      }
    };
    reader.readAsText(file);
  };

  const handleUploadAgain = () => {
    setFileData(null);
    setUploading(false);
    setProgress(0);
    setChartData(null);
    setChartType("line");
  };

  const generateChartData = (jsonData) => {
    const labels = jsonData[0]?.data?.[0]?.data.map(
      (_, index) => `Month ${index + 1}`
    );
    const datasets = jsonData.flatMap((category) =>
      category.data.map((item) => ({
        label: item.label,
        data: item.data,
        borderColor: item.color || "#0000FF",
        backgroundColor: item.color
          ? `${item.color}80`
          : "rgba(0, 0, 255, 0.2)",
        borderWidth: 1,
      }))
    );

    setChartData({ labels, datasets });
  };

  const handleChartChange = (type) => {
    setChartType(type);
  };

  const handleLegendToggle = () => {
    setLegendVisible(!legendVisible);
  };

  const handleColorChange = (categoryIndex, itemIndex, color) => {
    const updatedFileData = [...fileData];
    updatedFileData[categoryIndex].data[itemIndex].color = color;
    setFileData(updatedFileData);
    generateChartData(updatedFileData);
  };

  const toggleEditMode = () => {
    if (!isEditing) {
      setEditableData(JSON.parse(JSON.stringify(fileData)));
    }
    setIsEditing(!isEditing);
  };

  const handleAddCategory = () => {
    const newCategory = {
      category: `New Category ${editableData.length + 1}`,
      data: [
        {
          label: "New Item",
          type: "type",
          data: new Array(editableData[0]?.data?.[0]?.data?.length || 6).fill(
            0
          ),
        },
      ],
    };

    setEditableData((prevData) => {
      const updatedData = [...prevData, newCategory];

      requestAnimationFrame(() => {
        const categories = document.querySelectorAll(
          'div[class*="bg-slate-100"]'
        );
        const lastCategory = categories[categories.length - 1];

        if (lastCategory) {
          // Enhanced smooth scrolling
          lastCategory.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "start",
          });

          // Focus on the category input
          const categoryInput =
            lastCategory.querySelector('input[type="text"]');
          if (categoryInput) {
            categoryInput.focus();
          }
        }
      });

      return updatedData;
    });
  };

  const handleAddDataPoint = (categoryIndex) => {
    const updatedData = [...editableData];
    const newDataPointIndex = updatedData[categoryIndex].data.length;

    updatedData[categoryIndex].data.push({
      label: `New Item ${updatedData[categoryIndex].data.length + 1}`,
      data: new Array(updatedData[categoryIndex].data[0].data.length).fill(0),
    });

    setEditableData(updatedData);

    // Use setTimeout to ensure DOM has updated before focusing
    setTimeout(() => {
      // Find the newly added input
      const newInput = document.querySelector(
        `[data-category="${categoryIndex}"][data-index="${newDataPointIndex}"]`
      );

      if (newInput) {
        // Focus on the input
        newInput.focus();

        // Smooth scroll to the input
        newInput.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }, 0);
  };

  const handleRemoveCategory = (categoryIndex) => {
    const updatedData = editableData.filter(
      (_, index) => index !== categoryIndex
    );
    setEditableData(updatedData);
  };

  const handleRemoveDataPoint = (categoryIndex, dataIndex) => {
    const updatedData = [...editableData];
    updatedData[categoryIndex].data = updatedData[categoryIndex].data.filter(
      (_, index) => index !== dataIndex
    );
    setEditableData(updatedData);
  };

  const handleDataChange = (categoryIndex, dataIndex, field, value) => {
    const updatedData = [...editableData];
    if (field === "label") {
      updatedData[categoryIndex].data[dataIndex].label = value;
    } else if (field === "type") {
      updatedData[categoryIndex].data[dataIndex].type = value;
    } else if (field.startsWith("data")) {
      const monthIndex = parseInt(field.replace("data", ""));
      updatedData[categoryIndex].data[dataIndex].data[monthIndex] =
        parseFloat(value);
    }
    setEditableData(updatedData);
  };

  const saveEditedData = () => {
    setFileData(editableData);
    generateChartData(editableData);
    setIsEditing(false);
  };

  return (
    <div className="w-full max-w-full">
      {!fileData && !uploading ? (
        <div className="w-full mb-5">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center py-6 sm:py-9 w-full border border-gray-300 border-dashed rounded cursor-pointer bg-gray-50"
          >
            <div className="mb-2 sm:mb-3 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 40 40"
                fill="none"
              >
                <g id="Upload 02">
                  <path
                    id="icon"
                    d="M16.296 25.3935L19.9997 21.6667L23.7034 25.3935M19.9997 35V21.759M10.7404 27.3611H9.855C6.253 27.3611 3.33301 24.4411 3.33301 20.8391C3.33301 17.2371 6.253 14.3171 9.855 14.3171V14.3171C10.344 14.3171 10.736 13.9195 10.7816 13.4326C11.2243 8.70174 15.1824 5 19.9997 5C25.1134 5 29.2589 9.1714 29.2589 14.3171H30.1444C33.7463 14.3171 36.6663 17.2371 36.6663 20.8391C36.6663 24.4411 33.7463 27.3611 30.1444 27.3611H29.2589"
                    stroke="#4F46E5"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </g>
              </svg>
            </div>
            <h2 className="text-center text-gray-400 text-xs font-normal leading-4 mb-1 px-2 text-balance">
              JSON or CSV file only
            </h2>
            <h4 className="text-center text-gray-900 text-sm font-medium leading-snug px-2 text-balance">
              Drag and Drop your file here or
            </h4>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              onChange={handleFileUpload}
              accept=".json, .csv"
            />
          </label>
        </div>
      ) : null}

      {uploading && (
        <div className="w-full grid gap-1">
          <div className="relative flex items-center gap-2.5 py-1.5">
            <div className="relative w-full h-2.5 overflow-hidden rounded-3xl bg-gray-100">
              <div
                role="progressbar"
                aria-valuenow={progress}
                aria-valuemin="0"
                aria-valuemax="100"
                className="flex h-full items-center justify-center bg-indigo-600 text-white rounded-3xl"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <span className="ml-2 bg-white rounded-full text-gray-800 text-xs font-medium flex justify-center items-center">
              {progress}%
            </span>
          </div>
        </div>
      )}

      {fileData && (
        <div className="w-full overflow-x-auto">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-4">
            <button
              onClick={handleUploadAgain}
              className="px-4 py-2 bg-gradient-to-tl from-blue-600 to-violet-600 text-white rounded-sm w-full sm:w-auto"
            >
              Upload Again
            </button>
            <button
              onClick={toggleEditMode}
              className={`px-4 py-2 rounded-sm text-white w-full sm:w-auto ${isEditing
                ? "bg-gradient-to-tl from-red-600 to-rose-600"
                : "bg-gradient-to-tl from-green-600 to-emerald-600"
                }`}
            >
              {isEditing ? "Cancel Edit" : "Edit Data"}
            </button>
            {isEditing && (
              <button
                onClick={saveEditedData}
                className="px-4 py-2 bg-gradient-to-tl from-blue-600 to-violet-600 text-white rounded-sm w-full sm:w-auto"
              >
                Save Changes
              </button>
            )}
          </div>

          {isEditing ? (
            <div className="w-full overflow-x-auto">
              <button
                onClick={handleAddCategory}
                className="mb-4 px-4 py-2 bg-gradient-to-tl from-green-600 to-emerald-600 text-white rounded-sm w-full sm:w-auto"
              >
                Add Category
              </button>
              {editableData.map((category, categoryIndex) => (
                <div
                  key={categoryIndex}
                  className="mb-6 p-4 bg-slate-100 rounded-lg"
                >
                  <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-2">
                    <input
                      type="text"
                      value={category.category}
                      onChange={(e) => {
                        const updatedData = [...editableData];
                        updatedData[categoryIndex].category = e.target.value;
                        setEditableData(updatedData);
                      }}
                      className="text-lg font-bold px-2 py-1 border rounded w-full sm:w-auto mb-2 sm:mb-0"
                    />
                    <div className="flex flex-col sm:flex-row gap-2">
                      <button
                        onClick={() => handleAddDataPoint(categoryIndex)}
                        className="mr-0 sm:mr-2 px-3 py-1 bg-green-500 text-white rounded-sm text-sm w-full sm:w-auto"
                      >
                        Add Item
                      </button>
                      <button
                        onClick={() => handleRemoveCategory(categoryIndex)}
                        className="px-3 py-1 bg-red-500 text-white rounded-sm text-sm w-full sm:w-auto"
                      >
                        Remove Category
                      </button>
                    </div>
                  </div>

                  {category.data.map((item, dataIndex) => (
                    <div
                      key={dataIndex}
                      className="mb-3 p-3 bg-white rounded flex flex-col sm:flex-row items-center"
                    >
                      <div className="flex-grow w-full grid grid-cols-1 sm:grid-cols-4 gap-2 mb-2 sm:mb-0">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 col-span-1">
                          <input
                            type="text"
                            placeholder="Label"
                            data-category={categoryIndex}
                            data-index={dataIndex}
                            value={item.label}
                            onChange={(e) =>
                              handleDataChange(
                                categoryIndex,
                                dataIndex,
                                "label",
                                e.target.value
                              )
                            }
                            className="border px-2 py-1 rounded w-full"
                          />
                        </div>

                        {item.data.map((monthValue, monthIndex) => (
                          <input
                            key={monthIndex}
                            type="number"
                            placeholder={`Month ${monthIndex + 1}`}
                            value={monthValue}
                            onChange={(e) =>
                              handleDataChange(
                                categoryIndex,
                                dataIndex,
                                `data${monthIndex}`,
                                e.target.value
                              )
                            }
                            className="border px-2 py-1 rounded w-full"
                          />
                        ))}
                      </div>
                      <button
                        onClick={() =>
                          handleRemoveDataPoint(categoryIndex, dataIndex)
                        }
                        className="ml-0 sm:ml-2 mt-2 sm:mt-0 px-3 py-1 bg-red-500 text-white rounded-sm text-sm w-full sm:w-auto"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="min-w-full w-full">
                  <thead>
                    <tr>
                      <th className="px-2 sm:px-4 py-2 bg-slate-100 border-slate-200 border text-xs sm:text-base">
                        Category
                      </th>
                      <th className="px-2 sm:px-4 py-2 bg-slate-100 border-slate-200 border text-xs sm:text-base">
                        Label
                      </th>
                      <th className="px-2 sm:px-4 py-2 bg-slate-100 border-slate-200 border text-xs sm:text-base">
                        Data
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {fileData.map((category, index) => (
                      <tr key={index}>
                        <td className="px-2 sm:px-4 py-2 bg-slate-50 border-slate-200 border text-xs sm:text-base">
                          {category.category}
                        </td>
                        <td className="px-2 sm:px-4 py-2 bg-slate-50 border-slate-200 border text-xs sm:text-base">
                          {category.data.map((item, i) => (
                            <div key={i} className="mb-1">
                              <strong>{item.label}</strong>:{" "}
                              {item.data.join(", ")} {item.type}
                            </div>
                          ))}
                        </td>
                        <td className="px-2 sm:px-4 py-2 bg-slate-50 border-slate-200 border text-xs sm:text-base">
                          {category.data.map((item, i) => (
                            <div key={i}>{item.data.join(", ")}</div>
                          ))}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-4 mb-4">
                <button
                  onClick={() => handleChartChange("line")}
                  className="px-4 py-2 bg-gradient-to-tl from-blue-600 to-violet-600 text-white rounded-sm w-full sm:w-auto"
                >
                  Line Chart
                </button>
                <button
                  onClick={() => handleChartChange("bar")}
                  className="px-4 py-2 bg-gradient-to-tl from-blue-600 to-violet-600 text-white rounded-sm w-full sm:w-auto"
                >
                  Bar Chart
                </button>
                <button
                  onClick={() => handleChartChange("spline")}
                  className="px-4 py-2 bg-gradient-to-tl from-blue-600 to-violet-600 text-white rounded-sm w-full sm:w-auto"
                >
                  Spline Chart
                </button>
              </div>

              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 space-x-0 sm:space-x-4">
                  <div className="w-full sm:w-1/2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Graph Title:
                    </label>
                    <input
                      type="text"
                      value={chartTitle}
                      onChange={(e) => setChartTitle(e.target.value)}
                      className="w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter graph title"
                    />
                  </div>
                  <div className="flex items-center self-end">
                    <label className="mr-2 text-sm font-medium text-gray-700">
                      Show Legends
                    </label>
                    <label className="inline-flex relative items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={legendVisible}
                        onChange={handleLegendToggle}
                        className="sr-only peer"
                      />
                      <div
                        className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-blue-300 
                            peer-checked:after:translate-x-full peer-checked:after:border-white 
                            after:content-[''] after:absolute after:top-0.5 after:left-[2px] 
                            after:bg-white after:border-gray-300 after:border after:rounded-full 
                            after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                      ></div>
                    </label>
                  </div>
                </div>

                <div className="space-y-2 px-4 sm:px-6 md:px-0">
                  <h4 className="text-sm font-semibold text-gray-700">
                    Change Category Colors
                  </h4>
                  {fileData.map((category, categoryIndex) => (
                    <div
                      key={categoryIndex}
                      className="bg-slate-100 rounded-lg p-2 w-full"
                    >
                      <h5 className="text-xs font-medium text-gray-600 mb-2">
                        {category.category}
                      </h5>
                      <div className="flex flex-wrap gap-2 items-center">
                        {category.data.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className="flex items-center space-x-2 mb-1 sm:mb-0"
                          >
                            <span className="text-xs text-gray-500 mr-1 truncate max-w-[100px]">
                              {item.label}
                            </span>
                            <div
                              className="w-6 h-6 rounded-full border border-slate-200 relative cursor-pointer flex-shrink-0"
                              style={{
                                backgroundColor: item.color || "#0000FF",
                              }}
                            >
                              <input
                                type="color"
                                value={item.color || "#0000FF"}
                                onChange={(e) =>
                                  handleColorChange(
                                    categoryIndex,
                                    itemIndex,
                                    e.target.value
                                  )
                                }
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Graph editor ended */}

              <div className="mt-12">
                {chartData && chartType === "line" && (
                  <div className="hidden md:block">
                    {/* Desktop View */}
                    <Line
                      data={chartData}
                      options={{
                        responsive: true,
                        plugins: {
                          title: { display: true, text: chartTitle },
                          legend: { display: legendVisible, position: "top" },
                        },
                      }}
                    />
                  </div>
                )}
                {chartData && chartType === "line" && (
                  <div
                    className="block md:hidden overflow-x-auto w-screen max-w-full"
                    style={{
                      marginLeft: "calc(-50vw + 50%)",
                      marginRight: "calc(-50vw + 50%)",
                    }}
                  >
                    <div className="min-w-[600px]">
                      {/* Mobile View */}
                      <Line
                        data={chartData}
                        options={{
                          responsive: true,
                          plugins: {
                            title: { display: true, text: chartTitle },
                            legend: { display: legendVisible, position: "top" },
                          },
                        }}
                      />
                    </div>
                  </div>
                )}

                {chartData && chartType === "bar" && (
                  <div className="hidden md:block">
                    {/* Desktop View */}
                    <Bar
                      data={chartData}
                      options={{
                        responsive: true,
                        plugins: {
                          title: { display: true, text: chartTitle },
                          legend: { display: legendVisible, position: "top" },
                        },
                      }}
                    />
                  </div>
                )}
                {chartData && chartType === "bar" && (
                  <div
                    className="block md:hidden overflow-x-auto w-screen max-w-full"
                    style={{
                      marginLeft: "calc(-50vw + 50%)",
                      marginRight: "calc(-50vw + 50%)",
                    }}
                  >
                    <div className="min-w-[600px]">
                      {/* Mobile View */}
                      <Bar
                        data={chartData}
                        options={{
                          responsive: true,
                          plugins: {
                            title: { display: true, text: chartTitle },
                            legend: { display: legendVisible, position: "top" },
                          },
                        }}
                      />
                    </div>
                  </div>
                )}

                {chartData && chartType === "spline" && (
                  <div className="hidden md:block border-t-4 border-slate-100">
                    {/* Desktop View */}
                    <Line
                      data={chartData}
                      options={{
                        responsive: true,
                        plugins: {
                          title: { display: true, text: chartTitle },
                          legend: {
                            display: legendVisible,
                            position: "top",
                          },
                        },
                        elements: { line: { tension: 0.4 } },
                      }}
                    />
                  </div>
                )}
                {chartData && chartType === "spline" && (
                  <div
                    className="block md:hidden border-t-4 border-slate-100 overflow-x-auto w-screen max-w-full"
                    style={{
                      marginLeft: "calc(-50vw + 50%)",
                      marginRight: "calc(-50vw + 50%)",
                    }}
                  >
                    <div className="min-w-[600px]">
                      {/* Mobile View */}
                      <Line
                        data={chartData}
                        options={{
                          responsive: true,
                          plugins: {
                            title: { display: true, text: chartTitle },
                            legend: {
                              display: legendVisible,
                              position: "top",
                            },
                          },
                          elements: { line: { tension: 0.4 } },
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Form;
