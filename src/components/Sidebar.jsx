import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Button } from "./ui/button";

const Sidebar = () => {
    const [open, setOpen] = useState(true);

    return (
        <div
            className={`${
                open ? "w-[20rem]" : "w-[5rem]"
            } h-screen bg-gray-800 transition-all duration-300 ease-in-out  relative`}
        >
            <div
                className={`${
                    open ? "w-[20rem]" : "w-[5rem]"
                } h-screen bg-gray-800 transition-all duration-300 ease-in-out  fixed left-0 top-0 bottom-0`}
            >
                <Button
                    size={"icon"}
                    onClick={() => setOpen(!open)}
                    className="text-white m-2 absolute top-5 right-5"
                >
                    {open ? <X /> : <Menu />}
                </Button>

                {/* Sidebar content */}
                <div className={`mt-4 delay-500 ${open ? "block" : "hidden"}`}>
                    <p className="text-white">Sidebar Content</p>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
