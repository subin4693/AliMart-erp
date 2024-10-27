import { Menu, X, ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";
import logo from "@/assets/alimart logo.png";

const Sidebar = () => {
    const [open, setOpen] = useState(true);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const navigate = useNavigate();
    const toggleDropdown = () => {
        setDropdownOpen((prev) => !prev);
    };

    return (
        <div
            className={`${
                open ? "w-[20rem]" : "w-[5rem]"
            } h-screen bg-gray-800 transition-all duration-300 ease-in-out relative`}
        >
            <div
                className={`${
                    open ? "w-[20rem]" : "w-[5rem]"
                } h-screen bg-gray-800 transition-all duration-300 ease-in-out fixed left-0 top-0 bottom-0`}
            >
                <div className="flex pl-5  py-5 items-center">
                    <Button
                        size={"icon"}
                        onClick={() => setOpen(!open)}
                        className="text-white absolute right-5 "
                    >
                        {open ? <X /> : <Menu />}
                    </Button>

                    {/* Sidebar content */}
                    <div
                        className={`   min-w-[100px] max-w-[100px]  delay-50 ${
                            open ? "opacity-1" : "opacity-0 -z-10"
                        }`}
                    >
                        <img src={logo} className="w-full h-full" />
                    </div>
                </div>

                {open && (
                    <div className="relative mt-10 w-[90%] ml-5">
                        <Button
                            onClick={toggleDropdown}
                            className="flex justify-between p-5 items-center text-white w-full text-xl whitespace-nowrap"
                        >
                            Reports <ChevronDown className="ml-2" />
                        </Button>
                        {dropdownOpen && (
                            <div className="absolute left-0 mt-2 w-full bg-gray-700 text-white rounded shadow-lg z-10">
                                <Link to={"/"}>
                                    <div className="block px-4 py-2 hover:bg-gray-600 whitespace-nowrap">
                                        Overall Reports
                                    </div>
                                </Link>
                                <Link to={"/inventory"}>
                                    <div className="block px-4 py-2 hover:bg-gray-600 whitespace-nowrap">
                                        Inventory Reports
                                    </div>
                                </Link>
                                <Link to="/warehouse">
                                    <div className="block px-4 py-2 hover:bg-gray-600 whitespace-nowrap">
                                        Warehouse Management Reports
                                    </div>
                                </Link>
                                <div className="block px-4 py-2 hover:bg-gray-600 whitespace-nowrap">
                                    Profit & Loss Reports
                                </div>
                                <div className="block px-4 py-2 hover:bg-gray-600 whitespace-nowrap">
                                    Customizable Reports
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Sidebar;
