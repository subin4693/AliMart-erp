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
    { week: "January", desktop: 186 },
    { week: "February", desktop: 305 },
    { week: "March", desktop: 237 },
    { week: "April", desktop: 73 },
    { month: "May", desktop: 209 },
    { week: "June", desktop: 214 },
    { week: "January", desktop: 186 },
    { week: "February", desktop: 305 },
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
                        <CardTitle>Bar Chart - Label</CardTitle>
                        <CardDescription>January - June 2024</CardDescription>
                    </div>
                    <div className="flex gap-2">
                        <YearPicker selectedYear={selectedYear} setSelectedYear={setSelectedYear} />
                        <MonthPicker
                            selectedYear={selectedYear}
                            selectedMonth={selectedMonth}
                            setSelectedMonth={setSelectedMonth}
                        />{" "}
                        <Button>Download</Button>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            top: 20,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8}>
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
            <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 font-medium leading-none">
                    Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                </div>
                <div className="leading-none text-muted-foreground">
                    Showing total visitors for the last 6 months
                </div>
            </CardFooter>
        </Card>
    );
}
