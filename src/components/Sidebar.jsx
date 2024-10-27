import { Menu, X, ChevronDown } from "lucide-react"; // Import ChevronDown for the arrow icon
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const [open, setOpen] = useState(true);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen((prev) => !prev);
    };

    return (
        <div
            className={`${
                !open ? "w-[20rem]" : "w-[5rem]"
            } h-screen bg-gray-800 transition-all duration-300 ease-in-out relative`}
        >
            <div
                className={`${
                    !open ? "w-[20rem]" : "w-[5rem]"
                } h-screen bg-gray-800 transition-all duration-300 ease-in-out fixed left-0 top-0 bottom-0`}
            >
                <div className="flex items-center mt-5">
                    <Button
                        size={"icon"}
                        onClick={() => setOpen(!open)}
                        className="text-white absolute right-5 mt-5"
                    >
                        {!open ? <X /> : <Menu />}
                    </Button>

                    {/* Sidebar content */}
                    <div className={`mt-5 delay-500 ${!open ? "block" : "hidden"}`}>
                        <p className="text-white text-2xl">Sidebar Content</p>
                    </div>
                </div>
                {!open && (
                    <>
                        <div className="relative mt-10 w-[300px]">
                            <Link to={"/"}>
                                <Button
                                    onClick={toggleDropdown}
                                    className="flex justify-between p-5 items-center text-white w-full text-xl"
                                >
                                    Reports <ChevronDown className="ml-2" />
                                </Button>
                            </Link>
                            {dropdownOpen && (
                                <div className="absolute left-0 mt-2 w-full bg-gray-700 text-white rounded shadow-lg ">
                                    <Link to={"/inventory"}>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-600 ">
                                            Inventory Reports
                                        </a>
                                    </Link>

                                    <a href="#" className="block px-4 py-2 hover:bg-gray-600">
                                        Warehouse Management Reports
                                    </a>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-600">
                                        Profit & Loss Reports{" "}
                                    </a>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-600">
                                        Customizable Reports{" "}
                                    </a>
                                </div>
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Sidebar;
