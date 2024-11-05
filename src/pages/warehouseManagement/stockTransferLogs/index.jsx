import React, { useState, useEffect } from "react";

const transferLogs = [
    {
        id: 1,
        date: "2024-11-01",
        product: "Product A",
        quantity: 20,
        source: "Warehouse A",
        destination: "Warehouse B",
        status: "Completed",
        user: "John Doe",
    },
    {
        id: 2,
        date: "2024-11-02",
        product: "Product B",
        quantity: 15,
        source: "Warehouse B",
        destination: "Warehouse C",
        status: "Pending Approval",
        user: "Jane Smith",
    },
    {
        id: 3,
        date: "2024-11-03",
        product: "Product C",
        quantity: 10,
        source: "Warehouse A",
        destination: "Warehouse C",
        status: "In Transit",
        user: "Alice Johnson",
    },
];

const StockTransferLogs = () => {
    const [filters, setFilters] = useState({
        dateFrom: "",
        dateTo: "",
        product: "",
        source: "",
        destination: "",
        status: "",
    });

    const [filteredLogs, setFilteredLogs] = useState(transferLogs);

    useEffect(() => {
        const filtered = transferLogs.filter((log) => {
            const matchesDateFrom = filters.dateFrom
                ? new Date(log.date) >= new Date(filters.dateFrom)
                : true;
            const matchesDateTo = filters.dateTo
                ? new Date(log.date) <= new Date(filters.dateTo)
                : true;
            const matchesProduct = filters.product
                ? log.product.toLowerCase().includes(filters.product.toLowerCase())
                : true;
            const matchesSource = filters.source
                ? log.source.toLowerCase().includes(filters.source.toLowerCase())
                : true;
            const matchesDestination = filters.destination
                ? log.destination.toLowerCase().includes(filters.destination.toLowerCase())
                : true;
            const matchesStatus = filters.status ? log.status === filters.status : true;
            return (
                matchesDateFrom &&
                matchesDateTo &&
                matchesProduct &&
                matchesSource &&
                matchesDestination &&
                matchesStatus
            );
        });
        setFilteredLogs(filtered);
    }, [filters]);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
    };

    const handleStatusChange = (id, newStatus) => {
        setFilteredLogs((prevLogs) =>
            prevLogs.map((log) => (log.id === id ? { ...log, status: newStatus } : log)),
        );
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Stock Transfer Logs</h2>

            {/* Filter Options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div>
                    <label className="block font-semibold mb-1">Date From</label>
                    <input
                        type="date"
                        name="dateFrom"
                        value={filters.dateFrom}
                        onChange={handleFilterChange}
                        className="p-2 border rounded-md w-full"
                    />
                </div>
                <div>
                    <label className="block font-semibold mb-1">Date To</label>
                    <input
                        type="date"
                        name="dateTo"
                        value={filters.dateTo}
                        onChange={handleFilterChange}
                        className="p-2 border rounded-md w-full"
                    />
                </div>
                <div>
                    <label className="block font-semibold mb-1">Product</label>
                    <input
                        type="text"
                        name="product"
                        value={filters.product}
                        onChange={handleFilterChange}
                        className="p-2 border rounded-md w-full"
                        placeholder="Product name"
                    />
                </div>
                <div>
                    <label className="block font-semibold mb-1">Source Warehouse</label>
                    <input
                        type="text"
                        name="source"
                        value={filters.source}
                        onChange={handleFilterChange}
                        className="p-2 border rounded-md w-full"
                        placeholder="Source Warehouse"
                    />
                </div>
                <div>
                    <label className="block font-semibold mb-1">Destination Warehouse</label>
                    <input
                        type="text"
                        name="destination"
                        value={filters.destination}
                        onChange={handleFilterChange}
                        className="p-2 border rounded-md w-full"
                        placeholder="Destination Warehouse"
                    />
                </div>
                <div>
                    <label className="block font-semibold mb-1">Status</label>
                    <select
                        name="status"
                        value={filters.status}
                        onChange={handleFilterChange}
                        className="p-2 border rounded-md w-full"
                    >
                        <option value="">All</option>
                        <option value="Pending Approval">Pending Approval</option>
                        <option value="In Transit">In Transit</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>
            </div>

            {/* Transfer Logs Table */}
            <table className="w-full text-left border">
                <thead>
                    <tr>
                        <th className="p-3 border-b">Date</th>
                        <th className="p-3 border-b">Product</th>
                        <th className="p-3 border-b">Quantity</th>
                        <th className="p-3 border-b">Source</th>
                        <th className="p-3 border-b">Destination</th>
                        <th className="p-3 border-b">Status</th>
                        <th className="p-3 border-b">User</th>
                        <th className="p-3 border-b">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredLogs.map((log) => (
                        <tr key={log.id} className="border-b hover:bg-gray-100">
                            <td className="p-3">{log.date}</td>
                            <td className="p-3">{log.product}</td>
                            <td className="p-3">{log.quantity}</td>
                            <td className="p-3">{log.source}</td>
                            <td className="p-3">{log.destination}</td>
                            <td className="p-3">{log.status}</td>
                            <td className="p-3">{log.user}</td>
                            <td className="p-3">
                                {log.status === "Pending Approval" && (
                                    <button
                                        onClick={() => handleStatusChange(log.id, "Approved")}
                                        className="px-2 py-1 bg-green-500 text-white rounded mr-2"
                                    >
                                        Approve
                                    </button>
                                )}
                                {log.status === "In Transit" && (
                                    <button
                                        onClick={() => handleStatusChange(log.id, "Completed")}
                                        className="px-2 py-1 bg-blue-500 text-white rounded"
                                    >
                                        Complete
                                    </button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StockTransferLogs;
