import React, { useState } from "react";
import BarChart from "./BarChart";
import { Card } from "@/components/ui/card";
import img1 from "../../assets/emptyProfile.jpeg";

const index = () => {
    const [selectedYear, setSelectedYear] = useState(null); // Selected year state
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
            <div className="flex gap-20 flex-wrap">
                <BarChart
                    selectedMonth={selectedMonth}
                    setSelectedMonth={setSelectedMonth}
                    selectedYear={selectedYear}
                    setSelectedYear={setSelectedYear}
                />
                <Card className="p-5 w-[640px]">
                    <div className="flex items-center justify-between ">
                        <h1 className="text-xl font-semibold">Top item categories</h1>
                        <a href="" className="text-[#2576b6]">
                            View all
                        </a>
                    </div>
                    <div className="mt-5 flex flex-wrap gap-5">
                        <img
                            className="w-[100px] h-[100px] object-cover rounded-xl"
                            src="https://image.hm.com/assets/hm/d7/ab/d7ab85cf22bf20d96be22cabfa7bf2873d9d203d.jpg?imwidth=384"
                            alt=""
                        />
                        <img
                            className="w-[100px] h-[100px] object-cover rounded-xl"
                            src="https://image.hm.com/assets/hm/0d/29/0d2964b58c2a1455d44bdc5502154f974de8f196.jpg?imwidth=384"
                            alt=""
                        />
                        <img
                            className="w-[100px] h-[100px] object-cover rounded-xl"
                            src="https://image.hm.com/assets/hm/4a/2b/4a2b57bca946a5048960a0c3f8bfd276384d773e.jpg?imwidth=384"
                            alt=""
                        />
                        <img
                            className="w-[100px] h-[100px] object-cover rounded-xl"
                            src="https://image.hm.com/assets/hm/55/06/5506d53b838bfec2f14e932cc06df0659fc732e9.jpg?imwidth=384"
                            alt=""
                        />
                        <img
                            className="w-[100px] h-[100px] object-cover rounded-xl"
                            src="https://image.hm.com/assets/hm/e6/10/e610c66c02c8683696d966bb0f41978374b9acb1.jpg?imwidth=384"
                            alt=""
                        />
                        <img
                            className="w-[100px] h-[100px] object-cover rounded-xl"
                            src="https://image.hm.com/assets/hm/8d/a8/8da872af6f055b1719c3b3026aa684b4f6a09ac3.jpg?imwidth=384"
                            alt=""
                        />
                        <img
                            className="w-[100px] h-[100px] object-cover rounded-xl"
                            src="https://image.hm.com/assets/hm/64/5a/645af73e64795ee31dc3f14ec28c57c95314b749.jpg?imwidth=384"
                            alt=""
                        />
                        <img
                            className="w-[100px] h-[100px] object-cover rounded-xl"
                            src="https://image.hm.com/assets/hm/9e/15/9e150fa3302fe52ba1438c36d6211600cdd15d0b.jpg?imwidth=384"
                            alt=""
                        />
                        <img
                            className="w-[100px] h-[100px] object-cover rounded-xl"
                            src="https://image.hm.com/assets/hm/59/86/5986ca739b03829d73ad4abad1706eba09ec8d25.jpg?imwidth=384"
                            alt=""
                        />
                        <img
                            className="w-[100px] h-[100px] object-cover rounded-xl"
                            src="https://image.hm.com/assets/hm/90/db/90db22731ea4dbb25cd01093121e19914248b482.jpg?imwidth=384"
                            alt=""
                        />
                        <img
                            className="w-[100px] h-[100px] object-cover rounded-xl"
                            src="https://image.hm.com/assets/hm/39/3b/393bfd7e96f4c7db934cd4e66eee99ff2591cfc5.jpg?imwidth=384"
                            alt=""
                        />
                        <img
                            className="w-[100px] h-[100px] object-cover rounded-xl"
                            src="https://image.hm.com/assets/hm/bc/48/bc48e25799db71ba9a7d3cf55f9947b81edd74f7.jpg?imwidth=384"
                            alt=""
                        />
                        <img
                            className="w-[100px] h-[100px] object-cover rounded-xl"
                            src="https://image.hm.com/assets/hm/48/15/48153bf16fdbcaecbd2e80516fff8524f3c3d750.jpg?imwidth=384"
                            alt=""
                        />
                        <img
                            className="w-[100px] h-[100px] object-cover rounded-xl"
                            src="https://image.hm.com/assets/hm/34/84/3484db453febabd2ced82596d705b76da3d2692c.jpg?imwidth=384"
                            alt=""
                        />
                        <img
                            className="w-[100px] h-[100px] object-cover rounded-xl"
                            src="https://image.hm.com/assets/hm/7a/12/7a122c39551d37f18b23fe0ea9e061add2e63d5b.jpg?imwidth=384"
                            alt=""
                        />
                    </div>
                </Card>
            </div>
            <div className="flex flex-wrap gap-20 mb-5">
                <Card className="p-5 w-[500px] mt-10">
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
                <Card className="p-5 w-[700px] mt-10">
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
