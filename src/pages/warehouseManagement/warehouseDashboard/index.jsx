import React, { useState } from "react";

const warehouses = [
    {
        id: 1,
        name: "Warehouse A",
        location: "City A",
        totalStock: 200,
        lowStockAlert: 5,
        status: "active",
        zones: [
            {
                id: 1,
                name: "Zone A1",
                products: [
                    { id: 1, name: "Product A", stock: 10 },
                    { id: 2, name: "Product C", stock: 15 },
                ],
            },
            { id: 2, name: "Zone A2", products: [{ id: 3, name: "Product B", stock: 20 }] },
        ],
    },
    {
        id: 2,
        name: "Warehouse B",
        location: "City B",
        totalStock: 150,
        lowStockAlert: 3,
        status: "inactive",
        zones: [
            {
                id: 1,
                name: "Zone B1",
                products: [
                    { id: 4, name: "Product D", stock: 5 },
                    { id: 5, name: "Product E", stock: 8 },
                ],
            },
            { id: 2, name: "Zone B2", products: [{ id: 6, name: "Product F", stock: 12 }] },
        ],
    },
];

const WarehouseDashboard = () => {
    const [selectedWarehouse, setSelectedWarehouse] = useState(null);
    const [filter, setFilter] = useState({ name: "", location: "", status: "" });

    const handleWarehouseClick = (warehouse) => {
        setSelectedWarehouse(warehouse);
    };

    const handleSearchChange = (e) => {
        const { name, value } = e.target;
        setFilter({ ...filter, [name]: value });
    };

    const filteredWarehouses = warehouses.filter((warehouse) => {
        return (
            (filter.name
                ? warehouse.name.toLowerCase().includes(filter.name.toLowerCase())
                : true) &&
            (filter.location
                ? warehouse.location.toLowerCase().includes(filter.location.toLowerCase())
                : true) &&
            (filter.status ? warehouse.status === filter.status : true)
        );
    });

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Warehouse Dashboard</h2>

            <div className="mb-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Search by Warehouse Name"
                    value={filter.name}
                    onChange={handleSearchChange}
                    className="p-2 border rounded-md"
                />
                <input
                    type="text"
                    name="location"
                    placeholder="Search by Location"
                    value={filter.location}
                    onChange={handleSearchChange}
                    className="p-2 border rounded-md"
                />
                <select
                    name="status"
                    value={filter.status}
                    onChange={handleSearchChange}
                    className="p-2 border rounded-md"
                >
                    <option value="">Filter by Status</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                </select>
            </div>

            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                {filteredWarehouses.map((warehouse) => (
                    <div
                        key={warehouse.id}
                        className="p-4 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200"
                        onClick={() => handleWarehouseClick(warehouse)}
                    >
                        <h3 className="font-semibold text-xl">{warehouse.name}</h3>
                        <p>Location: {warehouse.location}</p>
                        <p>Total Stock: {warehouse.totalStock}</p>
                        <p>Low Stock Alerts: {warehouse.lowStockAlert}</p>
                        <p>
                            Status:{" "}
                            <span
                                className={
                                    warehouse.status === "active"
                                        ? "text-green-500"
                                        : "text-red-500"
                                }
                            >
                                {warehouse.status}
                            </span>
                        </p>
                    </div>
                ))}
            </div>

            {selectedWarehouse && (
                <div className="mt-6 p-4 bg-gray-200 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">{selectedWarehouse.name} - Details</h3>
                    <p>
                        <strong>Location:</strong> {selectedWarehouse.location}
                    </p>
                    <p>
                        <strong>Total Stock:</strong> {selectedWarehouse.totalStock}
                    </p>
                    <p>
                        <strong>Status:</strong> {selectedWarehouse.status}
                    </p>

                    <div className="mt-4">
                        <h4 className="text-lg font-semibold">Zones</h4>
                        {selectedWarehouse.zones.map((zone) => (
                            <div key={zone.id} className="mt-2 p-3 bg-white rounded-md">
                                <h5 className="font-semibold">{zone.name}</h5>
                                <ul className="list-disc list-inside">
                                    {zone.products.map((product) => (
                                        <li key={product.id} className="text-sm">
                                            {product.name} - Stock: {product.stock}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={() => setSelectedWarehouse(null)}
                        className="mt-4 p-2 bg-red-500 text-white rounded-md"
                    >
                        Close Details
                    </button>
                </div>
            )}
        </div>
    );
};

export default WarehouseDashboard;
