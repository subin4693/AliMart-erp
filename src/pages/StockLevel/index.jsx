import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
import img4 from "../../assets/4.png";
import { Button } from "@/components/ui/button";

const Index = () => {
    const [selectedYear, setSelectedYear] = useState("");
    const [selectedMonth, setSelectedMonth] = useState("");
    const [selectedWarehouse, setSelectedWarehouse] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [invoices, setInvoices] = useState([]);

    // Sample data for invoices
    const data = [
        {
            city: "New York",
            product: "Product A",
            category: "Grocery",
            items: 30,
            warehouse: "Warehouse A",
            image: img1,
            date: "2023-01-15",
        },
        {
            city: "Los Angeles",
            product: "Product B",
            category: "Grocery",
            items: 20,
            warehouse: "Warehouse B",
            image: img2,
            date: "2023-05-20",
        },
        {
            city: "Chicago",
            product: "Product C",
            category: "Grocery",
            items: 25,
            warehouse: "Warehouse A",
            image: img3,
            date: "2024-07-10",
        },
        {
            city: "Houston",
            product: "Product D",
            category: "Grocery",
            items: 15,
            warehouse: "Warehouse C",
            image: img1,
            date: "2024-08-22",
        },
        {
            city: "Houston",
            product: "Product E",
            category: "Grocery",
            items: 85,
            warehouse: "Warehouse C",
            image: img4,
            date: "2024-08-22",
        },
    ];

    // Filter and search invoices based on criteria
    const filteredInvoices = invoices.filter((invoice) => {
        const matchYear = selectedYear ? invoice.date.startsWith(selectedYear) : true;
        const matchMonth = selectedMonth ? invoice.date.slice(5, 7) === selectedMonth : true;
        const matchWarehouse = selectedWarehouse
            ? invoice.warehouse?.toLowerCase() === selectedWarehouse?.toLowerCase()
            : true;
        const matchCategory = selectedCategory
            ? invoice.category?.toLowerCase() === selectedCategory?.toLowerCase()
            : true;
        const matchSearch =
            invoice.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
            invoice.product.toLowerCase().includes(searchQuery.toLowerCase());
        return matchYear && matchMonth && matchSearch && matchCategory && matchWarehouse;
    });

    // Automatically generate invoices when component mounts
    useEffect(() => {
        const generatedInvoices = data.map((entry, index) => ({
            id: index + 1,
            ...entry,
            totalAmount: entry.items * 50, // Example: $50 per item
        }));
        setInvoices(generatedInvoices);
    }, []);

    // Download individual invoice as JSON
    const downloadInvoice = (invoice) => {
        window.alert(`${invoice.product} Invoice is downloading....`);
    };

    // Download all invoices as JSON
    const downloadAllInvoices = () => {
        window.alert("Downloading....");
    };

    return (
        <div className="p-4">
            <h1 className="font-semibold text-3xl mb-5">Stock Levels</h1>

            {/* Filter and Search Controls */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
                <select
                    className="border p-2 rounded"
                    value={selectedWarehouse}
                    onChange={(e) => setSelectedWarehouse(e.target.value)}
                >
                    <option value="">Filter by Warehouse</option>
                    <option value="Warehouse A">Warehouse A</option>
                    <option value="Warehouse B">Warehouse B</option>
                    <option value="Warehouse C">Warehouse C</option>
                </select>

                <select
                    className="border p-2 rounded"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    <option value="">Filter by Category</option>
                    <option value="Cloths">Cloths</option>
                    <option value="Toys">Toys</option>
                    <option value="Grocery">Grocery</option>
                </select>

                <input
                    type="text"
                    placeholder="Search by city or product"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="border-2 p-2 rounded outline-none"
                />

                <p className="bg-blue-500 text-white text-xl text-center py-3 font-semibold px-4 rounded">
                    Total items {invoices.length}
                </p>
            </div>

            {/* Invoice List */}
            <div className="grid md:grid-cols-4 gap-6">
                {filteredInvoices.map((invoice) => (
                    <Card key={invoice.id} className="p-5 shadow-lg">
                        <div className="flex flex-wrap justify-center items-center gap-4 mb-4">
                            <img
                                src={invoice.image}
                                alt="Product"
                                className="w-20 h-20 object-cover rounded"
                            />
                            <div>
                                <h2 className="text-lg font-semibold">
                                    {invoice.city} - {invoice.product}
                                </h2>
                                <p>Category: {invoice.category}</p>
                                <p>Warehouse: {invoice.warehouse}</p>
                                <p>Date: {invoice.date}</p>
                                <p>
                                    Items: {invoice.items}{" "}
                                    <span
                                        className={
                                            invoice.items < 20
                                                ? "text-red-600 font-bold"
                                                : "text-green-600 font-bold"
                                        }
                                    >
                                        Left
                                    </span>
                                </p>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Index;
