import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import img1 from "../../assets/1.png"; // Sample images
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";

const Index = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [batches, setBatches] = useState([]);
    const [showExpiredProducts, setShowExpiredProducts] = useState(true); // State to manage visibility

    // Sample data for batches
    const data = [
        {
            id: 1,
            productName: "Product A",
            category: "Grocery",
            batchNumber: "A123",
            expiryDate: "2023-10-01",
            quantity: 50,
            image: img1,
        },
        {
            id: 2,
            productName: "Product B",
            category: "Grocery",
            batchNumber: "B456",
            expiryDate: "2023-11-15",
            quantity: 30,
            image: img2,
        },
        {
            id: 3,
            productName: "Product C",
            category: "Grocery",
            batchNumber: "C789",
            expiryDate: "2024-01-10",
            quantity: 20,
            image: img3,
        },
        {
            id: 4,
            productName: "Product D",
            category: "Grocery",
            batchNumber: "D012",
            expiryDate: "2024-11-20",
            quantity: 15,
            image: img1,
        },
    ];

    // Automatically set batches when the component mounts
    useEffect(() => {
        setBatches(data);
    }, []);

    // Filter batches based on the search query and selected category
    const filteredBatches = batches.filter((batch) => {
        const matchCategory = selectedCategory
            ? batch.category.toLowerCase() === selectedCategory.toLowerCase()
            : true;
        return matchCategory && batch.productName.toLowerCase().includes(searchQuery.toLowerCase());
    });

    // Function to check if a product is expired
    const isExpired = (expiryDate) => new Date(expiryDate) < new Date();

    // Function to calculate days until expiration
    const daysUntilExpiration = (expiryDate) => {
        const today = new Date();
        const expirationDate = new Date(expiryDate);
        const diffTime = expirationDate - today;
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    };

    return (
        <div className="p-4">
            <h1 className="font-semibold text-3xl mb-5">Batch & Expiry Management</h1>

            {/* Search Control */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
                <select
                    className="border p-2 rounded"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    <option value="">Filter by Cagetory</option>
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

                <button
                    onClick={() => setShowExpiredProducts(!showExpiredProducts)}
                    className="bg-blue-500 text-white text-xl text-center py-3 font-semibold px-4 rounded"
                >
                    {!showExpiredProducts ? "Products Expiring Soon" : "Expired Products"}
                </button>
            </div>

            {showExpiredProducts ? (
                <>
                    <h2 className="text-2xl font-semibold mb-4 mt-4">Expired Products</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {filteredBatches
                            .filter((batch) => isExpired(batch.expiryDate))
                            .map((batch) => (
                                <Card key={batch.id} className="p-5 shadow-lg bg-red-100">
                                    <div className="flex flex-wrap justify-center items-center gap-4 mb-4">
                                        <img
                                            src={batch.image}
                                            alt="Product"
                                            className="w-20 h-20 object-cover rounded"
                                        />
                                        <div>
                                            <h2 className="text-lg font-semibold">
                                                {batch.productName}
                                            </h2>
                                            <p>Batch Number: {batch.batchNumber}</p>
                                            <p>Category: {batch.category}</p>
                                            <p>Expiry Date: {batch.expiryDate}</p>
                                            <p>Quantity: {batch.quantity}</p>
                                            <p className="mt-2 text-red-600 font-bold">
                                                Status: Expired
                                            </p>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                    </div>
                </>
            ) : (
                <>
                    <h2 className="text-2xl font-semibold mb-4">Products Expiring Soon</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {filteredBatches
                            .filter(
                                (batch) =>
                                    !isExpired(batch.expiryDate) &&
                                    new Date(batch.expiryDate) <=
                                        new Date(new Date().setMonth(new Date().getMonth() + 1)),
                            )
                            .map((batch) => (
                                <Card key={batch.id} className="p-5 shadow-lg bg-yellow-100">
                                    <div className="flex flex-wrap justify-center items-center gap-4 mb-4">
                                        <img
                                            src={batch.image}
                                            alt="Product"
                                            className="w-20 h-20 object-cover rounded"
                                        />
                                        <div>
                                            <h2 className="text-lg font-semibold">
                                                {batch.productName}
                                            </h2>
                                            <p>Batch Number: {batch.batchNumber}</p>
                                            <p>Category: {batch.category}</p>
                                            <p>Expiry Date: {batch.expiryDate}</p>
                                            <p>Quantity: {batch.quantity}</p>
                                            <p className="mt-2 text-yellow-600 font-bold">
                                                Status: Expiring Soon (
                                                {daysUntilExpiration(batch.expiryDate)} days left)
                                            </p>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Index;
