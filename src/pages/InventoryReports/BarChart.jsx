"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import YearPicker from "./YearPicker";
import MonthPicker from "./MonthPicker";
import { Button } from "@/components/ui/button";

export const description = "A bar chart with a label";

const chartData = [
    { order: "Confirmed", desktop: 186 },
    { order: "Packed", desktop: 85 },
    { order: "Refunded", desktop: 20 },
    { order: "Shipped", desktop: 186 },
];

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-1))",
    },
};

export default function BarChartComponent({
    selectedYear,
    setSelectedYear,
    selectedMonth,
    setSelectedMonth,
}) {
    return (
        <Card>
            <CardHeader>
                <div className="flex justify-between items-center">
                    <div>
                        <CardTitle>Sales</CardTitle>
                        {/* <CardDescription>January - June 2024</CardDescription> */}
                    </div>
                    {/* <div className="flex gap-2">
                        <YearPicker selectedYear={selectedYear} setSelectedYear={setSelectedYear} />
                        <MonthPicker
                            selectedYear={selectedYear}
                            selectedMonth={selectedMonth}
                            setSelectedMonth={setSelectedMonth}
                        />{" "}
                        <Button>Download</Button>
                    </div> */}
                </div>
            </CardHeader>
            <CardContent className="w-[90vh]">
                <ChartContainer config={chartConfig}>
                    <BarChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            top: 20,
                        }}
                    >
                        <CartesianGrid vertical={true} />
                        <XAxis
                            dataKey="order"
                            tickLine={false}
                            axisLine={true}
                        />
                        <ChartTooltip cursor={true} content={<ChartTooltipContent hideLabel />} />
                        <Bar dataKey="desktop" fill="#2576b6" radius={8}>
                            <LabelList
                                position="top"
                                offset={12}
                                className="fill-foreground"
                                fontSize={12}
                            />
                        </Bar>
                    </BarChart>
                </ChartContainer>
            </CardContent>
            {/* <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 font-medium leading-none">
                    Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                </div>
                <div className="leading-none text-muted-foreground">
                    Showing total visitors for the last 6 months
                </div>
            </CardFooter> */}
        </Card>
    );
}
