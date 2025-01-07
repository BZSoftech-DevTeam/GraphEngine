import React, { useState } from "react";
import * as XLSX from "xlsx";
import {
    BarChart,
    Bar,
    LineChart,
    Line,
    PieChart,
    Pie,
    Cell,
    Tooltip,
    XAxis,
    YAxis,
    CartesianGrid,
    Legend,
    ResponsiveContainer,
} from "recharts";

function Dashboard() {
    const [excelData, setExcelData] = useState([]);
    const [selectedColumns, setSelectedColumns] = useState([]);
    const [selectedRows, setSelectedRows] = useState([]);
    const [xAxis, setXAxis] = useState(null);
    const [yAxes, setYAxes] = useState([]);
    const [renderSelection, setRenderSelection] = useState([]);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, { type: "array" });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
                setExcelData(jsonData);
                setSelectedRows(Array.from({ length: jsonData.length - 1 }, (_, i) => i));
            };
            reader.readAsArrayBuffer(file);
        }
    };

    const toggleColumnSelection = (colIndex) => {
        setSelectedColumns((prev) =>
            prev.includes(colIndex)
                ? prev.filter((index) => index !== colIndex)
                : [...prev, colIndex]
        );
    };

    const toggleRowSelection = (rowIndex) => {
        setSelectedRows((prev) =>
            prev.includes(rowIndex)
                ? prev.filter((index) => index !== rowIndex)
                : [...prev, rowIndex]
        );
    };

    const getChartData = () => {
        if (xAxis === null || yAxes.length === 0 || selectedRows.length === 0) return [];

        return selectedRows.map((rowIndex) => {
            const row = excelData[rowIndex + 1];
            const dataPoint = { x: row[xAxis] || "Undefined" };
            yAxes.forEach((colIndex, i) => {
                dataPoint[`y${i}`] = parseFloat(row[colIndex]) || 0;
            });
            return dataPoint;
        });
    };

    const chartComponents = {
        Bar: (
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={getChartData()}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="x" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {yAxes.map((_, i) => (
                        <Bar key={i} dataKey={`y${i}`} fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`} />
                    ))}
                </BarChart>
            </ResponsiveContainer>
        ),
        Line: (
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={getChartData()}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="x" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {yAxes.map((_, i) => (
                        <Line key={i} type="monotone" dataKey={`y${i}`} stroke={`#${Math.floor(Math.random() * 16777215).toString(16)}`} />
                    ))}
                </LineChart>
            </ResponsiveContainer>
        ),
        Pie: (
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Tooltip />
                    {yAxes.map((colIndex, i) => (
                        <Pie
                            key={i}
                            data={getChartData()}
                            dataKey={`y${i}`}
                            nameKey="x"
                            cx="50%"
                            cy="50%"
                            outerRadius={100 + i * 20}
                            fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
                            label
                        />
                    ))}
                </PieChart>
            </ResponsiveContainer>
        ),
    };

    const toggleChartSelection = (chartType) => {
        setRenderSelection((prev) =>
            prev.includes(chartType)
                ? prev.filter((type) => type !== chartType)
                : [...prev, chartType]
        );
    };

    return (
        <div>
            <div className="mb-6">
                <h2 className="text-3xl font-bold text-center">Dynamic Graph Generator</h2>
                <p className="text-gray-500 text-center mt-2">
                    Upload an Excel file, select columns, and specify X and Y axes to generate charts.
                </p>
            </div>

            <div className="mt-6">
                <input
                    type="file"
                    accept=".xlsx, .xls"
                    onChange={handleFileUpload}
                    className="block w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg cursor-pointer focus:outline-none"
                />
            </div>

            {excelData.length > 0 && (
                <div className="mt-6 overflow-x-auto">
                    <table className="min-w-full table-auto border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-300 px-4 py-2 text-center">
                                    <input
                                        type="checkbox"
                                        onChange={(e) => {
                                            if (e.target.checked) {
                                                setSelectedRows(
                                                    Array.from({ length: excelData.length - 1 }, (_, i) => i)
                                                );
                                            } else {
                                                setSelectedRows([]);
                                            }
                                        }}
                                        className="mr-2"
                                    />
                                    Select Rows
                                </th>
                                {excelData[0].map((header, colIndex) => (
                                    <th
                                        key={colIndex}
                                        className="border border-gray-300 px-4 py-2 text-left text-gray-700"
                                    >
                                        <div>
                                            <input
                                                type="checkbox"
                                                checked={selectedColumns.includes(colIndex)}
                                                onChange={() => toggleColumnSelection(colIndex)}
                                                className="mr-2"
                                            />
                                            {header || `Column ${colIndex + 1}`}
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {excelData.slice(1).map((row, rowIndex) => (
                                <tr key={rowIndex} className="hover:bg-gray-100">
                                    <td className="border border-gray-300 px-4 py-2 text-center">
                                        <input
                                            type="checkbox"
                                            checked={selectedRows.includes(rowIndex)}
                                            onChange={() => toggleRowSelection(rowIndex)}
                                            className="mr-2"
                                        />
                                    </td>
                                    {row.map((cell, cellIndex) => (
                                        <td
                                            key={cellIndex}
                                            className="border border-gray-300 px-4 py-2 text-gray-600"
                                        >
                                            {cell || ""}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {selectedColumns.length > 0 && (
                <div className="mt-6">
                    <h3 className="text-lg font-bold">Select Axes</h3>
                    <div className="mt-2">
                        <label className="block">
                            X-Axis:
                            <select
                                value={xAxis !== null ? xAxis : ""}
                                onChange={(e) => setXAxis(e.target.value !== "" ? Number(e.target.value) : null)}
                                className="block w-full mt-1 border-gray-300 rounded-md"
                            >
                                <option value="">-- Select X-Axis --</option>
                                {selectedColumns.map((colIndex) => (
                                    <option key={colIndex} value={colIndex}>
                                        {excelData[0][colIndex] || `Column ${colIndex + 1}`}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>
                    <div className="mt-4">
                        <label className="block">
                            Y-Axis:
                            <select
                                multiple
                                value={yAxes}
                                onChange={(e) =>
                                    setYAxes(Array.from(e.target.selectedOptions, (option) => Number(option.value)))
                                }
                                className="block w-full mt-1 border-gray-300 rounded-md"
                            >
                                {selectedColumns.map((colIndex) => (
                                    <option key={colIndex} value={colIndex}>
                                        {excelData[0][colIndex] || `Column ${colIndex + 1}`}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>
                </div>
            )}

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {Object.keys(chartComponents).map((chartType) => (
                    <div
                        key={chartType}
                        onClick={() => toggleChartSelection(chartType)}
                        className={`p-4 border rounded-md shadow cursor-pointer ${
                            renderSelection.includes(chartType)
                                ? "bg-blue-500 text-white"
                                : "bg-gray-100 text-gray-700"
                        } hover:bg-blue-300 hover:text-white`}
                    >
                        {chartType} Chart
                    </div>
                ))}
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {renderSelection.map((chartType) => (
                    <div key={chartType} className="p-4 border rounded-md shadow">
                        <h3 className="text-xl font-bold text-gray-700 mb-4">{chartType} Chart</h3>
                        {chartComponents[chartType]}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dashboard;