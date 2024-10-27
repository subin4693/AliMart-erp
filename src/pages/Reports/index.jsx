import React, { useState } from "react";
import BarChart from "./BarChart";
import TopBar from "./Topbar";
import { Card, CardContent } from "@/components/ui/card";
import TopCard from "./TopCard";
import { DollarSignIcon, PersonStanding, ShoppingBasket, SquareStack, Type } from "lucide-react";
import MixedBarChart from "./MixedBarChart";
import YearMonthWeekPicker from "./YearPicker";
import MonthPicker from "./MonthPicker";
import YearPicker from "./YearPicker";
import CategoryPieChart from "./CategoryPieChart";
import TrendingProducts from "./TrendingProducts";

const Reports = () => {
    const [date, setDate] = useState(null);
    const [selectedBranch, setSelectedBranch] = useState("all");
    const [selectedCategory, setSelectedCategory] = useState("all");

    const [selectedYear, setSelectedYear] = useState(null); // Selected year state
    const [selectedMonth, setSelectedMonth] = useState(null); // Selected month state

 
    const branches = [
        {
            _id: "idone",
            name: "Wharehouse 1",
            location: "location 1",
        },
        {
            _id: "idtwo",
            name: "Wharehouse 2",
            location: "location 2",
        },
        {
            _id: "idthree",
            name: "Wharehouse 3",
            location: "location 4",
        },
    ];
    const categorys = [
        {
            _id: "category1",
            name: "category1",
            location: "location 1",
        },
        {
            _id: "category2",
            name: "category2",
        },
        {
            _id: "category3",
            name: "category3",
        },
    ];

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
        },  {
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
        },  {
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
        },  {
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
        },  {
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
        },  {
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
        },  {
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
        },  {
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
        }, {
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
        },  {
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
        },  {
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
    ];
    return (
        <div className="  w-full">
            <TopBar
                branches={branches}
                categorys={categorys}
                date={date}
                setDate={setDate}
                selectedBranch={selectedBranch}
                setSelectedBranch={setSelectedBranch}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
            />
 

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-5 mt-5 ">
                <TopCard title={"Total Revenue"} number={"7900 Qar"} Icon={DollarSignIcon} />
                <TopCard title={"Total Sales count"} number={"400"} Icon={PersonStanding} />
                <TopCard title={"Total Categorys"} number={"7"} Icon={SquareStack} />
                <TopCard title={"Total Products"} number={"984"} Icon={ShoppingBasket} />
            </div>
                <div className="mt-5">
                    <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-5  ">
                        <BarChart
                            selectedMonth={selectedMonth}
                            setSelectedMonth={setSelectedMonth}
                            selectedYear={selectedYear}
                            setSelectedYear={setSelectedYear}
                        />

                        <Card className="p-5 grid-1   ">
                            <h1 className="font-bold text-lg">Recent Sales</h1>
                            {recentSales.map((sales, index) => (
                                <div key={index} className="mb-1">
                                    <div>
                                        <div className="flex justify-between align-center">
                                            <h3 className="text-lg font-medium">
                                                {sales.customername}
                                            </h3>

                                            <h3 className="text-lg font-semibold">
                                                {sales.items.reduce(
                                                    (acc, item2) => acc + item2.total,
                                                    0,
                                                )}{" "}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Card>
                    </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
                <MixedBarChart
                    selectedMonth={selectedMonth}
                    setSelectedMonth={setSelectedMonth}
                    selectedYear={selectedYear}
                    setSelectedYear={setSelectedYear}
                />
                <CategoryPieChart />
                <TrendingProducts />
            </div>
        </div>
    );
};

export default Reports;
