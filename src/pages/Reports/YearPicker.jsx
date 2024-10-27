import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
const YearPicker = ({ selectedYear, setSelectedYear }) => {
    const [view, setView] = useState("decade"); // Start with year view

    const handleYearClick = (value) => {
        const year = value.getFullYear();
        setSelectedYear(year); // Set the selected year in the parent component
    };

    const currentYear = new Date().getFullYear();

    return (
        <div>
            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="outline">Select Year</Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 " align="start">
                    <Calendar
                        view={view}
                        onClickYear={handleYearClick}
                        onActiveStartDateChange={({ view }) => setView(view)}
                        value={new Date(selectedYear || 2000, 0)} // Set the value to the selected year
                        minDetail="decade"
                        maxDetail="decade"
                        minDate={new Date(2001, 0, 1)} // Limit the minimum year to 2000
                        maxDate={new Date(currentYear, 11, 31)} // Limit the maximum year to the current year
                        showNeighboringMonth={false}
                    />
                </PopoverContent>
            </Popover>
        </div>
    );
};

export default YearPicker;
