import * as React from "react";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
const SelectOption = ({ className, options, placeholder, setValue, value }) => {
    return (
        <Select
            value={value?._id || "all"}
            onValueChange={(e) => setValue(options.find((option) => option._id == e))}
            className={className}
        >
            <SelectTrigger className={className}>
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem value={"all"}>All</SelectItem>
                    {options?.map((option) => (
                        <SelectItem key={option?._id} value={option?._id}>
                            {option?.name}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};

export default SelectOption;
