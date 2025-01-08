import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(BarElement, CategoryScale, LinearScale);

const FileInputCard = () => {
    const [data, setData] = useState([]);
    const [selectedColumns, setSelectedColumns] = useState([]);
    const [xAxes, setXAxes] = useState([]);
    const [yAxis, setYAxis] = useState('');
    const [chartData, setChartData] = useState(null);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];

        if (file && file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
            const reader = new FileReader();

            reader.onload = (e) => {
                const binaryData = e.target.result;
                const workbook = XLSX.read(binaryData, { type: 'binary' });
                const sheetName = workbook.SheetNames[0];
                const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
                setData(sheetData);
            };

            reader.readAsBinaryString(file);
        } else {
            alert('Please upload a valid Excel file');
        }
    };

    const handleColumnSelection = (column) => {
        setSelectedColumns((prev) => {
            if (prev.includes(column)) {
                return prev.filter((col) => col !== column);
            } else {
                return [...prev, column];
            }
        });
    };

    const handleAxisSelection = (axis, isXAxis) => {
        if (isXAxis) {
            setXAxes((prev) => {
                if (prev.includes(axis)) {
                    return prev.filter((a) => a !== axis);
                } else {
                    return [...prev, axis];
                }
            });
        } else {
            setYAxis(axis);
        }
    };

    const generateChartData = () => {
        if (xAxes.length > 0 && yAxis) {
            const datasets = [];

            xAxes.forEach((xAxis) => {
                datasets.push({
                    label: `${yAxis} vs ${xAxis}`,
                    data: data.map((row) => row[yAxis]),
                    backgroundColor: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
                        Math.random() * 255
                    )}, ${Math.floor(Math.random() * 255)}, 0.6)`,
                    borderColor: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
                        Math.random() * 255
                    )}, ${Math.floor(Math.random() * 255)}, 1)`,
                    borderWidth: 1,
                });
            });

            setChartData({
                labels: data.map((row) => row[xAxes[0]]),
                datasets,
            });
        } else {
            alert('Please select at least one X-Axis and one Y-Axis');
        }
    };

    return (
        <div className="w-full mx-auto mt-10 p-6 bg-white border border-slate-200 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Upload Excel File</h2>
            <input
                type="file"
                accept=".xlsx"
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                onChange={handleFileUpload}
            />

            {data.length > 0 && (
                <div className="mt-6">
                    <h3 className="text-md font-semibold mb-2">Uploaded Data:</h3>
                    <table className="table-auto w-full border-collapse border border-gray-200">
                        <thead>
                            <tr>
                                {Object.keys(data[0]).map((key, index) => (
                                    <th key={index} className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">
                                        <input
                                            type="checkbox"
                                            className="mr-2"
                                            checked={selectedColumns.includes(key)}
                                            onChange={() => handleColumnSelection(key)}
                                        />
                                        {key}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row, rowIndex) => (
                                <tr key={rowIndex} className="odd:bg-gray-100 even:bg-white">
                                    {Object.values(row).map((value, cellIndex) => (
                                        <td
                                            key={cellIndex}
                                            className="border border-gray-300 px-4 py-2 text-sm text-gray-600"
                                        >
                                            {value}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="mt-6">
                        <label className="block mb-2 text-sm font-medium text-gray-700">Select X-Axes:</label>
                        {selectedColumns.map((key, index) => (
                            <div key={index} className="flex items-center mb-2">
                                <input
                                    type="checkbox"
                                    className="mr-2"
                                    checked={xAxes.includes(key)}
                                    onChange={() => handleAxisSelection(key, true)}
                                />
                                <label className="text-sm text-gray-700">{key}</label>
                            </div>
                        ))}

                        <label className="block mb-2 text-sm font-medium text-gray-700">Select Y-Axis:</label>
                        <select
                            className="block w-full mb-4 border border-gray-300 rounded-md p-2 text-sm"
                            value={yAxis}
                            onChange={(e) => handleAxisSelection(e.target.value, false)}
                        >
                            <option value="">Select Column</option>
                            {selectedColumns.map((key, index) => (
                                <option key={index} value={key}>{key}</option>
                            ))}
                        </select>

                        <button
                            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                            onClick={generateChartData}
                        >
                            Generate Chart
                        </button>
                    </div>

                    {chartData && (
                        <div className="mt-6">
                            <h3 className="text-md font-semibold mb-4">Histogram</h3>
                            <div className="relative w-full h-96">
                                <Bar data={chartData} options={{ responsive: true, maintainAspectRatio: true }} />
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default FileInputCard;
