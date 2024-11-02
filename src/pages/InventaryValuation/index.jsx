import React, { useState, useEffect } from "react";
import {
    BarChart,
    Bar,
    LineChart,
    Line,
    Tooltip,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
} from "recharts";

const index = () => {
    const [inventoryData, setInventoryData] = useState([]);
    const [totalValue, setTotalValue] = useState(0);
    const [salesData, setSalesData] = useState([]);

    // Sample data (you may replace this with real data from an API or database)
    const fetchData = () => {
        const items = [
            { id: 1, name: "Item A", purchasePrice: 20, quantity: 100, sales: 80 },
            { id: 2, name: "Item B", purchasePrice: 15, quantity: 50, sales: 30 },
            { id: 3, name: "Item C", purchasePrice: 10, quantity: 200, sales: 150 },
            // Add more items as needed
        ];

        setInventoryData(items);

        // Calculate total inventory value
        const value = items.reduce((acc, item) => acc + item.purchasePrice * item.quantity, 0);
        setTotalValue(value);

        // Prepare sales data for chart
        const sales = items.map((item) => ({
            name: item.name,
            sales: item.sales,
        }));
        setSalesData(sales);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Overall Inventory Insights</h1>
            <div className="mb-6">
                <h2 className="text-2xl font-semibold">Total Inventory Value</h2>
                <p className="text-xl text-gray-900">{totalValue.toFixed(2)} QAR</p>
            </div>
            <div>
                <h2 className="text-2xl font-semibold mb-4">Sales Data by Item</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={salesData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="sales" fill="#4CAF50" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className="mt-8">
                <h2 className="text-2xl font-semibold">Inventory Breakdown</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={inventoryData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="quantity" stroke="#FF6347" />
                        <Line type="monotone" dataKey="purchasePrice" stroke="#1E90FF" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default index;
