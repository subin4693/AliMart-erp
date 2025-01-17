import Select from "@/components/Select";
import react, { useState } from "react";

import { Button } from "@/components/ui/button";

const TopBar = ({
    branches,
    categorys,
    date,
    setDate,
    selectedBranch,
    setSelectedBranch,
    selectedCategory,
    setSelectedCategory,
}) => {
    return (
        <div className="flex justify-end">
            <div className="flex gap-5 ">
             <div className="flex justify-center items-center"> Wharehouse: &nbsp;&nbsp;   <Select
                    defaultValue={selectedBranch}
                    options={branches}
                    value={selectedBranch}
                    setValue={setSelectedBranch}
                    className={"w-[20rem]"}
                /></div>
                {/* <Select
                    defaultValue={selectedCategory}
                    options={categorys}
                    value={selectedCategory}
                    setValue={setSelectedCategory}
                    className={"w-[20rem]"}
                /> */}
            </div>
            {/* <div className="flex gap-5">
                <DatePickerWithRange setData={setDate} className={"w-[20rem]"} />
                <Button>Download</Button>
            </div> */}
        </div>
    );
};
export default TopBar;
