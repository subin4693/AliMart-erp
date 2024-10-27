import React from "react";

import { Reports, InventoryReports, WarehouseReports } from "@/pages";
// import { InventoryReports } from "@/pages/InventoryReports";
import Layout from "@/layouts/Layout";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Sidebar from "./components/Sidebar";

const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,

            children: [
                {
                    path: "/",
                    element: <Reports />,
                },
                {
                    path: "/inventory",
                    element: <InventoryReports />,
                },
                {
                    path: "/warehouse",
                    element: <WarehouseReports />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
};

export default App;
