import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
// import { saveAs } from "file-saver";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
import { Button } from "@/components/ui/button";

// import additional images as needed...

const Index = () => {
    const [selectedYear, setSelectedYear] = useState("");
    const [selectedMonth, setSelectedMonth] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [invoices, setInvoices] = useState([]);

    // Sample data for invoices
    const data = [
        {
            city: "New York",
            product: "Product A",
            items: 30,
            orders: 3,
            image: img1,
            date: "2023-01-15",
        },
        {
            city: "Los Angeles",
            product: "Product B",
            items: 20,
            orders: 5,
            image: img2,
            date: "2023-05-20",
        },
        {
            city: "Chicago",
            product: "Product C",
            items: 25,
            orders: 2,
            image: img3,
            date: "2024-07-10",
        },
        {
            city: "Houston",
            product: "Product D",
            items: 15,
            orders: 4,
            image: img1,
            date: "2024-08-22",
        },
        // Add more records as needed
    ];

    // Filter and search invoices based on criteria
    const filteredInvoices = invoices.filter((invoice) => {
        const matchYear = selectedYear ? invoice.date.startsWith(selectedYear) : true;
        const matchMonth = selectedMonth ? invoice.date.slice(5, 7) === selectedMonth : true;
        const matchSearch =
            invoice.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
            invoice.product.toLowerCase().includes(searchQuery.toLowerCase());
        return matchYear && matchMonth && matchSearch;
    });

    // Automatically generate invoices when component mounts
    useEffect(() => {
        const generatedInvoices = data.map((entry, index) => ({
            id: index + 1,
            ...entry,
            totalAmount: entry.orders * 50, // Example: $50 per order
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
            <h1 className="font-semibold text-3xl mb-5">Automated Billing</h1>

            {/* Filter and Search Controls */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
                <select
                    className="border p-2 rounded"
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                >
                    <option value="">Filter by Year</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                </select>

                <select
                    className="border p-2 rounded"
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                >
                    <option value="">Filter by Month</option>
                    <option value="01">January</option>
                    <option value="02">February</option>
                    <option value="03">March</option>
                    <option value="04">April</option>
                    <option value="05">May</option>
                    <option value="06">June</option>
                    <option value="07">July</option>
                    <option value="08">August</option>
                    <option value="09">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                </select>

                <input
                    type="text"
                    placeholder="Search by city or product"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="border-2 p-2 rounded outline-none"
                />
                {/* 
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                    Download All
                </button> */}
                <Button
                    onClick={downloadAllInvoices}
                    className="p-2 rounded lg:w-[100px] bg-[#2576b6] w-full "
                >
                    Download All
                </Button>
            </div>

            {/* Invoice List */}
            <div className="grid md:grid-cols-2 gap-6">
                {filteredInvoices.map((invoice) => (
                    <Card key={invoice.id} className="p-5 shadow-lg">
                        <div className="flex items-center gap-4 mb-4">
                            <img
                                src={invoice.image}
                                alt="Product"
                                className="w-20 h-20 object-cover rounded"
                            />
                            <div>
                                <h2 className="text-lg font-semibold">
                                    {invoice.city} - {invoice.product}
                                </h2>
                                <p>Date: {invoice.date}</p>
                            </div>
                        </div>
                        <div className="border-t pt-4">
                            <p>Orders: {invoice.orders}</p>
                            <p>Items: {invoice.items}</p>
                            <p>Total Amount: {invoice.totalAmount} QAR</p>
                        </div>
                        <Button
                            onClick={() => downloadInvoice(invoice)}
                            className="py-3 mt-4 px-4 rounded w-[100px] bg-[#2576b6]"
                        >
                            Download
                        </Button>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Index;
