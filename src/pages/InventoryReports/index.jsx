import React, { useState } from "react";
import BarChart from "./BarChart";
import { Card } from "@/components/ui/card";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
import img4 from "../../assets/4.png";
import img5 from "../../assets/5.png";
import img6 from "../../assets/6.png";
import img7 from "../../assets/7.png";
import img8 from "../../assets/8.png";
import img9 from "../../assets/9.png";
import img10 from "../../assets/10.png";
import img11 from "../../assets/11.png";
import img12 from "../../assets/12.png";
import img13 from "../../assets/13.png";
import img14 from "../../assets/14.png";
import img15 from "../../assets/16.png";
import img17 from "../../assets/17.png";

const index = () => {
    const [selectedYear, setSelectedYear] = useState(null);
    const [selectedMonth, setSelectedMonth] = useState(null);
    const data = [
        { city: "New York", employees: 20, items: 30, orders: 3 },
        { city: "Los Angeles", employees: 18, items: 30, orders: 5 },
        { city: "Chicago", employees: 25, items: 30, orders: 2 },
        { city: "Houston", employees: 15, items: 30, orders: 4 },
    ];
    return (
        <div>
            <h1 className="font-semibold text-3xl mb-5">Recent Activity</h1>
            <div className="flex gap-10 flex-wrap">
                <div className="md:w-2/3 lg:w-[90vh]">
                    <BarChart
                        selectedMonth={selectedMonth}
                        setSelectedMonth={setSelectedMonth}
                        selectedYear={selectedYear}
                        setSelectedYear={setSelectedYear}
                    />
                </div>
                <Card className="p-5 w-full md:w-1/3 lg:w-[640px]">
                    <div className="flex items-center justify-between ">
                        <h1 className="text-xl font-semibold">Top item categories</h1>
                        <a href="" className="text-[#2576b6]">
                            View all
                        </a>
                    </div>
                    <div className="mt-5 flex flex-wrap gap-5">
                        <img
                            className="w-[100px] h-[100px] object-cover rounded-xl"
                            src={img1}
                            alt=""
                        />
                        <img
                            className="w-[100px] h-[100px] object-cover rounded-xl"
                            src={img2}
                            alt=""
                        />
                        <img
                            className="w-[100px] h-[100px] object-cover rounded-xl"
                            src={img3}
                            alt=""
                        />
                        <img
                            className="w-[100px] h-[100px] object-cover rounded-xl"
                            src={img4}
                            alt=""
                        />
                        <img
                            className="w-[100px] h-[100px] object-cover rounded-xl"
                            src={img5}
                            alt=""
                        />
                        <img
                            className="w-[100px] h-[100px] object-cover rounded-xl"
                            src={img6}
                            alt=""
                        />
                        <img
                            className="w-[100px] h-[100px] object-cover rounded-xl"
                            src={img7}
                            alt=""
                        />
                        <img
                            className="w-[100px] h-[100px] object-cover rounded-xl"
                            src={img8}
                            alt=""
                        />
                        <img
                            className="w-[100px] h-[100px] object-cover rounded-xl"
                            src={img9}
                            alt=""
                        />
                        <img
                            className="w-[100px] h-[100px] object-cover rounded-xl"
                            src={img10}
                            alt=""
                        />
                        <img
                            className="w-[100px] h-[100px] object-cover rounded-xl"
                            src={img11}
                            alt=""
                        />
                        <img
                            className="w-[100px] h-[100px] object-cover rounded-xl"
                            src={img12}
                            alt=""
                        />
                        <img
                            className="w-[100px] h-[100px] object-cover rounded-xl"
                            src={img13}
                            alt=""
                        />
                        <img
                            className="w-[100px] h-[100px] object-cover rounded-xl"
                            src={img14}
                            alt=""
                        />
                        <img
                            className="w-[100px] h-[100px] object-cover rounded-xl"
                            src={img15}
                            alt=""
                        />
                    </div>
                </Card>
            </div>
            <div className="flex flex-wrap gap-10 ">
                <Card className="p-5 w-[90vh] mt-10">
                    <h1 className="text-xl font-semibold mb-5">Stock numbers</h1>
                    <div className="">
                        <div className="flex justify-between items-center">
                            <h1>Low stock items</h1>
                            <h1>12</h1>
                        </div>
                        <div className="flex justify-between items-center">
                            <h1>Low stock items</h1>
                            <h1>12</h1>
                        </div>
                        <div className="flex justify-between items-center">
                            <h1>Low stock items</h1>
                            <h1>12</h1>
                        </div>
                    </div>
                </Card>
                <Card className="p-5 w-[640px]  mt-10">
                    <div className="flex items-center justify-between ">
                        <h1 className="text-xl font-semibold">Store list</h1>
                        <a href="" className="text-[#2576b6]">
                            View all
                        </a>
                    </div>
                    <div className="p-4">
                        {data.map((item, index) => (
                            <div
                                key={index}
                                className="flex justify-between items-center p-2 border-b last:border-b-0"
                            >
                                <h1 className="text-gray-800 flex-1">{item.city}</h1>
                                <h1 className="text-gray-600 flex-1 text-center">
                                    {item.employees} Employees
                                </h1>
                                <h1 className="text-gray-600 flex-1 text-center">
                                    {item.items} items
                                </h1>
                                <h1 className="text-gray-600 flex-1 text-center">
                                    {item.orders} Orders
                                </h1>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default index;
