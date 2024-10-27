"use client";

import * as React from "react";
import { Label, Pie, PieChart, Sector } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    ChartContainer,
    ChartStyle,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export const description = "An interactive pie chart displaying category data";

const desktopData = [
    { category: "Clothes", value: 186, fill: "hsl(var(--chart-1))" },
    { category: "Groceries", value: 305, fill: "hsl(var(--chart-2))" },
    { category: "Snacks", value: 237, fill: "hsl(var(--chart-3))" },
    { category: "Cold Drinks", value: 173, fill: "hsl(var(--chart-4))" },
    { category: "Sweets", value: 209, fill: "hsl(var(--chart-5))" },
];

const chartConfig = {
    january: { label: "Clothes", color: "hsl(var(--chart-1))" },
    february: { label: "Groceries", color: "hsl(var(--chart-2))" },
    march: { label: "Snacks", color: "hsl(var(--chart-3))" },
    april: { label: "Cold Drinks", color: "hsl(var(--chart-4))" },
    may: { label: "Sweets", color: "hsl(var(--chart-5))" },
};

const ChartComponent = () => {
    const id = "pie-interactive";
    const [activeCategory, setActiveCategory] = React.useState(desktopData[0].category);

    const activeIndex = React.useMemo(
        () => desktopData.findIndex((item) => item.category === activeCategory),
        [activeCategory],
    );

    const categories = React.useMemo(() => desktopData.map((item) => item.category), []);

    return (
        <Card data-chart={id} className="flex flex-col">
            <ChartStyle id={id} config={chartConfig} />
            <CardHeader className="flex-row items-start space-y-0 pb-0">
                <div className="grid gap-1">
                    <CardTitle>Products For Each Category</CardTitle>
                </div>
                <Select value={activeCategory} onValueChange={setActiveCategory}>
                    <SelectTrigger
                        className="ml-auto h-7 w-[150px] rounded-lg pl-2.5"
                        aria-label="Select a category"
                    >
                        <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent align="end" className="rounded-xl">
                        {desktopData.map(({ category, fill }) => (
                            <SelectItem
                                key={category}
                                value={category}
                                className="rounded-lg [&_span]:flex"
                            >
                                <div className="flex items-center gap-2 text-xs">
                                    <span
                                        className="flex h-3 w-3 shrink-0 rounded-sm"
                                        style={{
                                            backgroundColor: fill,
                                        }}
                                    />
                                    {category}
                                </div>
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </CardHeader>
            <CardContent className="flex flex-1 justify-center pb-0">
                <ChartContainer
                    id={id}
                    config={chartConfig}
                    className="mx-auto aspect-square w-full max-w-[300px]"
                >
                    <PieChart>
                        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                        <Pie
                            data={desktopData}
                            dataKey="value"
                            nameKey="category"
                            innerRadius={60}
                            strokeWidth={5}
                            activeIndex={activeIndex}
                            activeShape={({ outerRadius = 0, ...props }) => (
                                <g>
                                    <Sector {...props} outerRadius={outerRadius + 10} />
                                    <Sector
                                        {...props}
                                        outerRadius={outerRadius + 25}
                                        innerRadius={outerRadius + 12}
                                    />
                                </g>
                            )}
                        >
                            <Label
                                content={({ viewBox }) => {
                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                        return (
                                            <text
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                            >
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    className="fill-foreground text-3xl font-bold"
                                                >
                                                    {desktopData[activeIndex].value.toLocaleString()}
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 24}
                                                    className="fill-muted-foreground"
                                                >
                                                    Products
                                                </tspan>
                                            </text>
                                        );
                                    }
                                    return null;
                                }}
                            />
                        </Pie>
                    </PieChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
};

export default ChartComponent;
