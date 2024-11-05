import React from "react";

import {
    Reports,
    InventoryReports,
    WarehouseReports,
    AutomatedBilling,
    CustomerInfo,
    StockLevel,
    InventaryValuation,
    BatchExpir,
} from "@/pages";
import WarehouseDashboard from "@/pages/warehouseManagement/warehouseDashboard/index";
import StockTransfer from "./pages/warehouseManagement/stockTransfer/index";
import StockTransferLogs from "./pages/warehouseManagement/stockTransferLogs/index";

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
                {
                    path: "/stock-levels",
                    element: <StockLevel />,
                },
                {
                    path: "/inventory-valuation",
                    element: <InventaryValuation />,
                },
                {
                    path: "/batch-expiry",
                    element: <BatchExpir />,
                },
                {
                    path: "/multiple-warehouse",
                    element: <WarehouseDashboard />,
                },
                {
                    path: "/stock-transfer",
                    element: <StockTransfer />,
                },
                {
                    path: "/stock-transfer-logs",
                    element: <StockTransferLogs />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
};

export default App;
