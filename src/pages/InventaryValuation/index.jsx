import { Button } from "@/components/ui/button";
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

const Index = () => {
    const [inventoryData, setInventoryData] = useState([]);
    const [totalValue, setTotalValue] = useState(0);
    const [salesData, setSalesData] = useState([]);
    const [selectedYear, setSelectedYear] = useState("");
    const [selectedMonth, setSelectedMonth] = useState("");
    const [selectedWarehouse, setSelectedWarehouse] = useState(""); // New state for warehouse
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredData, setFilteredData] = useState([]);

    const fetchData = () => {
        const items = [
            {
                id: 1,
                name: "Item A",
                purchasePrice: 20,
                quantity: 100,
                sales: 80,
                date: "2023-01-15",
                warehouse: "Warehouse A", // Added warehouse field
            },
            {
                id: 2,
                name: "Item B",
                purchasePrice: 15,
                quantity: 50,
                sales: 30,
                date: "2023-02-20",
                warehouse: "Warehouse B", // Added warehouse field
            },
            {
                id: 3,
                name: "Item C",
                purchasePrice: 10,
                quantity: 200,
                sales: 150,
                date: "2024-01-10",
                warehouse: "Warehouse A", // Added warehouse field
            },
            // Add more items with dates and warehouse as needed
        ];

        setInventoryData(items);

        // Calculate total inventory value
        const value = items.reduce((acc, item) => acc + item.purchasePrice * item.quantity, 0);
        setTotalValue(value);

        // Prepare sales data for chart based on initial items
        setSalesData(
            items.map((item) => ({
                name: item.name,
                sales: item.sales,
            })),
        );
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        filterData();
    }, [selectedYear, selectedMonth, selectedWarehouse, searchQuery, inventoryData]);

    const filterData = () => {
        let filtered = inventoryData;

        if (selectedYear) {
            filtered = filtered.filter(
                (item) => new Date(item.date).getFullYear().toString() === selectedYear,
            );
        }

        if (selectedMonth) {
            filtered = filtered.filter(
                (item) => new Date(item.date).getMonth() + 1 === parseInt(selectedMonth),
            );
        }

        if (selectedWarehouse) {
            filtered = filtered.filter(
                (item) => item.warehouse.toLowerCase() === selectedWarehouse.toLowerCase(),
            );
        }

        if (searchQuery) {
            filtered = filtered.filter((item) =>
                item.name.toLowerCase().includes(searchQuery.toLowerCase()),
            );
        }

        setFilteredData(filtered);
    };

    // Update sales data based on filtered data
    useEffect(() => {
        const updatedSalesData = filteredData.map((item) => ({
            name: item.name,
            sales: item.sales,
        }));
        setSalesData(updatedSalesData);
    }, [filteredData]);

    return (
        <div className="p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Overall Inventory Insights</h1>
            <div className="mb-6">
                <h2 className="text-2xl font-semibold">Total Inventory Value</h2>
                <p className="text-xl text-gray-900">{totalValue.toFixed(2)} QAR</p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 mb-6">
                {/* <select
                    className="border p-2 rounded"
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                >
                    <option value="">Filter by Year</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                </select> */}

                <select
                    className="border p-2 rounded"
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                >
                    <option value="">Filter by Month</option>
                    <option value="1">January</option>
                    <option value="2">February</option>
                    <option value="3">March</option>
                    <option value="4">April</option>
                    <option value="5">May</option>
                    <option value="6">June</option>
                    <option value="7">July</option>
                    <option value="8">August</option>
                    <option value="9">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                </select>

                <select
                    className="border p-2 rounded"
                    value={selectedWarehouse}
                    onChange={(e) => setSelectedWarehouse(e.target.value)}
                >
                    <option value="">Filter by Warehouse</option>
                    <option value="Warehouse A">Warehouse A</option>
                    <option value="Warehouse B">Warehouse B</option>
                </select>
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
                    <LineChart data={filteredData}>
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

export default Index;
