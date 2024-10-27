import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
const MonthPicker = ({ selectedYear, selectedMonth, setSelectedMonth }) => {
    const [view, setView] = useState("year"); // Start with month view

    const handleMonthClick = (value) => {
        const month = value.getMonth();
        setSelectedMonth(month); // Set the selected month in the parent component
    };

    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth(); // Current month

    return (
        <div className={`grid gap-2 `}>
            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="outline">Select Month</Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 " align="start">
                    <span className="custom-monthpicker">
                        <Calendar
                            view={view}
                            value={new Date(selectedYear, selectedMonth || 0)}
                            onClickMonth={handleMonthClick}
                            // Allow months starting from January
                            showNeighboringMonth={false}
                        />
                    </span>
                </PopoverContent>
            </Popover>
        </div>
    );
};

export default MonthPicker;
