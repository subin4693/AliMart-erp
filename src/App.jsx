import React from "react";

import {
    Reports,
    InventoryReports,
    WarehouseReports,
    AutomatedBilling,
    CustomerInfo,
} from "@/pages";
// import { InventoryReports } from "@/pages/InventoryReports";
import Layout from "@/layouts/Layout";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
                {
                    path: "/billing",
                    element: <AutomatedBilling />,
                },
                {
                    path: "/customers",
                    element: <CustomerInfo />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
};

export default App;
