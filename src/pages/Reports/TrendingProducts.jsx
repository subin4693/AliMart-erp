import { Card } from "@/components/ui/card";
import React from "react";

const TrendingProducts = () => {
    const topProducts = [
        {
            productname: "Qatar Basmati Rice",
            price: 150.0,
            quantity: 20,
            total: 3000.0,
        },
        {
            productname: "Premium Dates",
            price: 120.0,
            quantity: 10,
            total: 1200.0,
        },
        {
            productname: "Arabic Coffee",
            price: 50.0,
            quantity: 15,
            total: 750.0,
        },  {
            productname: "Qatar Basmati Rice",
            price: 150.0,
            quantity: 20,
            total: 3000.0,
        },
       
    ];

    return (
        <Card className="p-5 w-full ">
            <h1 className="font-bold text-lg mb-5">Most Selling Products</h1>
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="border-b">
                        <th className="py-2 px-3 font-semibold">Product Name</th>
                        <th className="py-2 px-3 font-semibold">Price (QAR)</th>
                        <th className="py-2 px-3 font-semibold">Total Sales</th>
                    </tr>
                </thead>
                <tbody>
                    {topProducts.map((product, index) => (
                        <tr key={index} className="border-b hover:bg-gray-100">
                            <td className="py-2 px-3">{product.productname}</td>
                            <td className="py-2 px-3">{product.price.toFixed(2)}</td>
                            <td className="py-2 px-3">{product.total.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Card>
    );
};

export default TrendingProducts;
