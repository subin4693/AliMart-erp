import { Card } from "@/components/ui/card";
import React from "react";

const TrendingProducts = () => {
    const recentSales = [
        {
            customername: "John Doe",
            items: [
                {
                    product: "64a1a90b0f22b7a508e1c001",
                    category: "64a1b8f56f22d7a4179a1001",
                    quantity: 2,
                    price: 150.0,
                    total: 300.0,
                },
                {
                    product: "64a1a90b0f22b7a508e1c002",
                    category: "64a1b8f56f22d7a4179a1002",
                    quantity: 1,
                    price: 500.0,
                    total: 500.0,
                },
            ],
        },
        {
            customername: "Jane Smith",
            items: [
                {
                    product: "64a1a90b0f22b7a508e1c003",
                    category: "64a1b8f56f22d7a4179a1003",
                    quantity: 5,
                    price: 20.0,
                    total: 100.0,
                },
            ],
        },
        {
            customername: "Bob Johnson",
            items: [
                {
                    product: "64a1a90b0f22b7a508e1c004",
                    category: "64a1b8f56f22d7a4179a1004",
                    quantity: 3,
                    price: 200.0,
                    total: 600.0,
                },
            ],
        },
    ];
    return (
        <Card className="p-5 grid-1   ">
            <h1 className="font-bold text-lg">Recent Sales</h1>
            {recentSales.map((sales, index) => (
                <div key={index} className="mb-1">
                    <div>
                        <div className="flex justify-between align-center">
                            <h3 className="text-lg font-medium">{sales.customername}</h3>

                            <h3 className="text-lg font-semibold">
                                {sales.items.reduce((acc, item2) => acc + item2.total, 0)}{" "}
                            </h3>
                        </div>
                    </div>
                </div>
            ))}
        </Card>
    );
};

export default TrendingProducts;
