import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const TopCard = ({ title, number, Icon }) => {
    return (
        <Card className="bg-white shadow-md rounded-lg overflow-hidden">
            <CardHeader className="p-4">
                <div className="flex justify-between items-center">
                    {/* Title */}
                    <CardTitle className="text-lg font-semibold text-gray-700">{title}</CardTitle>
                    {/* Icon */}
                    <div className="p-2 bg-gray-100 rounded-full">
                        <Icon className="text-red-500 w-6 h-6" />
                    </div>
                </div>
            </CardHeader>

            <CardContent className="p-4">
                <CardDescription className="text-4xl font-bold text-gray-800">
                    {number}
                </CardDescription>
            </CardContent>
        </Card>
    );
};

export default TopCard;
