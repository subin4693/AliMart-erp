import React from "react";
import {
    BarChart,
    Bar,
    LineChart,
    Line,
    PieChart,
    Pie,
    Tooltip,
    Legend,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
} from "recharts";
import CategoryPieChart from "./CategoryPieChart";

const WarehouseReport = () => {
    // Sample data
    const metrics = {
        totalStock: 5000,
        itemsPickedToday: 150,
        fulfillmentRate: 85, // in percentage
        averagePickingTime: "15 mins",
        stockMovementRate: "200 items/day",
    };

    const stockMovementData = [
        { name: "Week 1", movement: 1200 },
        { name: "Week 2", movement: 1400 },
        { name: "Week 3", movement: 800 },
        { name: "Week 4", movement: 1600 },
        { name: "Week 5", movement: 1300 },
    ];

    const pickingAccuracyData = [
        { section: "Store A", accuracy: 90 },
        { section: "Store B", accuracy: 80 },
        { section: "Store C", accuracy: 85 },
        { section: "Store D", accuracy: 95 },
    ];

    const fulfillmentData = [
        { name: "On-Time", value: 70 },
        { name: "Delayed", value: 20 },
        { name: "Canceled", value: 10 },
    ];

    return (
        <div className="p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Warehouse Management Reports</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
                {Object.entries(metrics).map(([key, value]) => (
                    <div key={key} className="bg-gray-100 p-4 rounded-lg shadow text-center">
                        <h2 className="text-lg font-semibold text-gray-700 capitalize">
                            {key.replace(/([A-Z])/g, " $1")}
                        </h2>
                        <p className="text-xl font-bold text-gray-900">{value}</p>
                    </div>
                ))}
            </div>
            <div className="space-y-8">
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Trends in Stock Movement</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={stockMovementData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Line
                                type="monotone"
                                dataKey="movement"
                                stroke="#4CAF50"
                                strokeWidth={2}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Picking Accuracy by Section</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={pickingAccuracyData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="section" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="accuracy" fill="#2576b6" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div>
                    <CategoryPieChart />
                </div>
                .{/* Additional Content */}
                <div className="mt-8">
                    <h2 className="text-2xl font-semibold mb-4">Employee Performance</h2>
                    <p className="text-gray-700 mb-2">Average Picking Efficiency: 92%</p>
                    <p className="text-gray-700 mb-4">Top Picker: John Doe (95% accuracy)</p>
                    <h2 className="text-2xl font-semibold mb-4">Historical Trends</h2>
                    <p className="text-gray-700 mb-2">
                        Over the past month, stock movement has increased by 15%.
                    </p>
                    <p className="text-gray-700">
                        Implementing new picking strategies has improved accuracy by 5%.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WarehouseReport;
