import { Menu, X, ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";
import logo from "@/assets/alimart logo.png";

const Sidebar = () => {
    const [open, setOpen] = useState(true);
    const [dropdownOpen, setDropdownOpen] = useState({
        reports: false,
        billing: false,
        qrBarcode: false,
        inventory: false,
        warehouse: false,
        tracking: false,
        userRoles: false,
    });

    const toggleDropdown = (section) => {
        setDropdownOpen((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    return (
        <div
            className={` ${open ? "w-[22rem]" : "w-[5rem]"
                } h-screen bg-gray-800 transition-all duration-300 ease-in-out relative`}
        >
            <div
                className={`${open ? "w-[22rem]" : "w-[5rem]"
                    } h-screen  bg-slate-900 transition-all duration-300 ease-in-out fixed left-0 top-0 bottom-0`}
            >
                <div className="flex pl-5  py-5 items-center bg-slate-900">
                    <Button
                        size={"icon"}
                        onClick={() => setOpen(!open)}
                        className="text-white absolute right-5 "
                    >
                        {open ? <X /> : <Menu />}
                    </Button>

                    {/* Sidebar content */}
                    <div
                        className={`   min-w-[100px] max-w-[100px]  delay-100 ${open ? "opacity-1" : "opacity-0 -z-10"
                            }`}
                    >
                        <img src={logo} className="w-full h-full" />
                    </div>
                </div>

                {open && (
                   <div className="relative mt-10 w-[90%] ml-5 space-y-4 overflow-y-auto h-[calc(100vh-70px)] ">
       
                        <div className="mb-2">
                            <Button
                                onClick={() => toggleDropdown("reports")}
                                className="flex justify-between p-5 items-center text-white w-full text-xl"
                            >
                                Reports <ChevronDown className="ml-2" />
                            </Button>
                            {dropdownOpen.reports && (
                                <div className="bg-gray-700 text-white rounded shadow-lg z-10">
                                    <Link to={"/"}>
                                        <div className="px-4 py-2 hover:bg-gray-600">Overall Reports</div>
                                    </Link>
                                    <Link to={"/inventory"}>
                                        <div className="px-4 py-2 hover:bg-gray-600">Inventory Reports</div>
                                    </Link>
                                    <Link to={"/warehouse"}>
                                        <div className="px-4 py-2 hover:bg-gray-600">Warehouse Management Reports</div>
                                    </Link>
                                    <Link to={"/"}>
                                        <div className="px-4 py-2 hover:bg-gray-600">Profit & Loss Reports</div>
                                    </Link>
                                    <Link to={"/"}>
                                        <div className="px-4 py-2 hover:bg-gray-600">Customizable Reports</div>
                                    </Link>
                                </div>
                            )}
                        </div>
                        <div  >
                            <Button
                                onClick={() => toggleDropdown("billing")}
                                className="flex justify-between p-5 items-center text-white w-full text-xl "
                            >
                                Billing & Invoicing <ChevronDown className="ml-2" />
                            </Button>
                            {dropdownOpen.billing && (
                                <div className="bg-gray-700 text-white rounded shadow-lg z-10">
                                    <Link to={"/billing"}>
                                        <div className="px-4 py-2 hover:bg-gray-600">Automated Billing</div>
                                    </Link>
                                    <Link to={"/customers"}>
                                        <div className="px-4 py-2 hover:bg-gray-600">Customer Information</div>
                                    </Link>
                                    <Link to={"/"}>
                                        <div className="px-4 py-2 hover:bg-gray-600">Multiple Payment Options</div>
                                    </Link>
                                    <Link to={"/"}>
                                        <div className="px-4 py-2 hover:bg-gray-600">Invoice Templates</div>
                                    </Link>
                                    <Link to={"/"}>
                                        <div className="px-4 py-2 hover:bg-gray-600">Recurring Invoices</div>
                                    </Link>
                                </div>
                            )}
                        </div>
                        <div>
                            <Button
                                onClick={() => toggleDropdown("qrBarcode")}
                                className="flex justify-between p-5 items-center text-white w-full text-xl"
                            >
                                QR Barcode Generation <ChevronDown className="ml-2" />
                            </Button>
                            {dropdownOpen.qrBarcode && (
                                <div className="bg-gray-700 text-white rounded shadow-lg z-10">
                                    <Link to={"/qr-products"}>
                                        <div className="px-4 py-2 hover:bg-gray-600">QR Code for Products</div>
                                    </Link>
                                    <Link to={"/qr-printing"}>
                                        <div className="px-4 py-2 hover:bg-gray-600">QR Code Printing</div>
                                    </Link>
                                    <Link to={"/product-info"}>
                                        <div className="px-4 py-2 hover:bg-gray-600">Product Information Retrieval</div>
                                    </Link>
                                </div>
                            )}

                        </div>
                        <div>
                            <Button
                                onClick={() => toggleDropdown("inventory")}
                                className="flex justify-between p-5 items-center text-white w-full text-xl"
                            >
                                Inventory Management <ChevronDown className="ml-2" />
                            </Button>
                            {dropdownOpen.inventory && (
                                <div className="bg-gray-700 text-white rounded shadow-lg z-10">
                                    <Link to={"/stock-levels"}>
                                        <div className="px-4 py-2 hover:bg-gray-600">Real-Time Stock Levels</div>
                                    </Link>
                                    <Link to={"/stock-in-out"}>
                                        <div className="px-4 py-2 hover:bg-gray-600">Stock In/Out Management</div>
                                    </Link>
                                    <Link to={"/low-stock-alerts"}>
                                        <div className="px-4 py-2 hover:bg-gray-600">Low Stock Alerts</div>
                                    </Link>
                                    <Link to={"/batch-expiry"}>
                                        <div className="px-4 py-2 hover:bg-gray-600">Batch & Expiry Management</div>
                                    </Link>
                                    <Link to={"/inventory-valuation"}>
                                        <div className="px-4 py-2 hover:bg-gray-600">Inventory Valuation</div>
                                    </Link>
                                </div>
                            )}
                        </div>
                        <div>
                            <Button
                                onClick={() => toggleDropdown("warehouse")}
                                className="flex justify-between p-5 items-center text-white w-full text-xl"
                            >
                                Warehouse Management <ChevronDown className="ml-2 text-xl" />
                            </Button>
                            {dropdownOpen.warehouse && (
                                <div className="bg-gray-700 text-white rounded shadow-lg z-10">
                                    <Link to={"/multiple-warehouse"}>
                                        <div className="px-4 py-2 hover:bg-gray-600">Multiple Warehouse Support</div>
                                    </Link>
                                    <Link to={"/stock-transfer"}>
                                        <div className="px-4 py-2 hover:bg-gray-600">Stock Transfer</div>
                                    </Link>
                                    <Link to={"/warehouse-zones"}>
                                        <div className="px-4 py-2 hover:bg-gray-600">Warehouse Zones</div>
                                    </Link>
                                    <Link to={"/warehouse-analytics"}>
                                        <div className="px-4 py-2 hover:bg-gray-600">Warehouse Analytics</div>
                                    </Link>
                                </div>
                            )}
                        </div>
                        <div> <Button
                            onClick={() => toggleDropdown("tracking")}
                            className="flex justify-between p-5 items-center text-white w-full text-xl"
                        >
                            Tracking System <ChevronDown className="ml-2" />
                        </Button>
                            {dropdownOpen.tracking && (
                                <div className="bg-gray-700 text-white rounded shadow-lg z-10">
                                    <Link to={"/shipment-tracking"}>
                                        <div className="px-4 py-2 hover:bg-gray-600">Shipment Tracking</div>
                                    </Link>
                                    <Link to={"/order-tracking"}>
                                        <div className="px-4 py-2 hover:bg-gray-600">Order Tracking</div>
                                    </Link>
                                    <Link to={"/fleet-management"}>
                                        <div className="px-4 py-2 hover:bg-gray-600">Vehicle Fleet Management</div>
                                    </Link>
                                    <Link to={"/product-tracking"}>
                                        <div className="px-4 py-2 hover:bg-gray-600">Product Tracking</div>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>

        </div>
    );
};

export default Sidebar;
