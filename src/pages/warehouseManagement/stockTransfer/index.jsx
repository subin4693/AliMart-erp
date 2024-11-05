import React, { useState } from "react";

const warehouses = [
    { id: 1, name: "Warehouse A", location: "City A" },
    { id: 2, name: "Warehouse B", location: "City B" },
];

const products = [
    { id: 1, name: "Product A", stock: 50, warehouseId: 1 },
    { id: 2, name: "Product B", stock: 30, warehouseId: 1 },
    { id: 3, name: "Product C", stock: 20, warehouseId: 2 },
    { id: 4, name: "Product D", stock: 40, warehouseId: 2 },
];

const StockTransfer = () => {
    const [transfer, setTransfer] = useState({
        sourceWarehouse: "",
        destinationWarehouse: "",
        selectedProduct: "",
        quantity: 0,
        transferDate: "",
    });
    const [availableProducts, setAvailableProducts] = useState([]);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTransfer({ ...transfer, [name]: value });

        if (name === "sourceWarehouse") {
            const filteredProducts = products.filter(
                (product) => product.warehouseId === parseInt(value),
            );
            setAvailableProducts(filteredProducts);
            setTransfer({ ...transfer, selectedProduct: "", quantity: 0, [name]: value });
        }
    };

    const validateTransfer = () => {
        const selectedProduct = availableProducts.find(
            (p) => p.id === parseInt(transfer.selectedProduct),
        );
        if (!transfer.sourceWarehouse || !transfer.destinationWarehouse) {
            setError("Please select both source and destination warehouses.");
            return false;
        }
        if (transfer.sourceWarehouse === transfer.destinationWarehouse) {
            setError("Source and destination warehouses cannot be the same.");
            return false;
        }
        if (!transfer.selectedProduct) {
            setError("Please select a product to transfer.");
            return false;
        }
        if (transfer.quantity <= 0 || transfer.quantity > selectedProduct.stock) {
            setError(`Quantity must be between 1 and ${selectedProduct.stock}.`);
            return false;
        }
        setError("");
        return true;
    };

    const handleTransfer = (e) => {
        e.preventDefault();
        if (validateTransfer()) {
            alert(
                `Transfer confirmed: ${transfer.quantity} of ${
                    products.find((p) => p.id === parseInt(transfer.selectedProduct)).name
                } from Warehouse ${transfer.sourceWarehouse} to Warehouse ${
                    transfer.destinationWarehouse
                } on ${transfer.transferDate || "today"}.`,
            );
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Stock Transfer</h2>
            <form onSubmit={handleTransfer} className="space-y-4">
                {/* Source Warehouse */}
                <div>
                    <label className="block font-semibold mb-2">Source Warehouse</label>
                    <select
                        name="sourceWarehouse"
                        value={transfer.sourceWarehouse}
                        onChange={handleChange}
                        className="p-2 border rounded-md w-full"
                    >
                        <option value="">Select Source Warehouse</option>
                        {warehouses.map((warehouse) => (
                            <option key={warehouse.id} value={warehouse.id}>
                                {warehouse.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Destination Warehouse */}
                <div>
                    <label className="block font-semibold mb-2">Destination Warehouse</label>
                    <select
                        name="destinationWarehouse"
                        value={transfer.destinationWarehouse}
                        onChange={handleChange}
                        className="p-2 border rounded-md w-full"
                    >
                        <option value="">Select Destination Warehouse</option>
                        {warehouses.map((warehouse) => (
                            <option key={warehouse.id} value={warehouse.id}>
                                {warehouse.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Product Selection */}
                <div>
                    <label className="block font-semibold mb-2">Product</label>
                    <select
                        name="selectedProduct"
                        value={transfer.selectedProduct}
                        onChange={handleChange}
                        className="p-2 border rounded-md w-full"
                        disabled={!transfer.sourceWarehouse}
                    >
                        <option value="">Select Product</option>
                        {availableProducts.map((product) => (
                            <option key={product.id} value={product.id}>
                                {product.name} (Available: {product.stock})
                            </option>
                        ))}
                    </select>
                </div>

                {/* Quantity Field */}
                <div>
                    <label className="block font-semibold mb-2">Quantity</label>
                    <input
                        type="number"
                        name="quantity"
                        value={transfer.quantity}
                        onChange={handleChange}
                        className="p-2 border rounded-md w-full"
                        min="1"
                        max={
                            availableProducts.find(
                                (p) => p.id === parseInt(transfer.selectedProduct),
                            )?.stock || ""
                        }
                    />
                </div>

                {/* Transfer Date */}
                <div>
                    <label className="block font-semibold mb-2">Transfer Date</label>
                    <input
                        type="date"
                        name="transferDate"
                        value={transfer.transferDate}
                        onChange={handleChange}
                        className="p-2 border rounded-md w-full"
                    />
                </div>

                {error && <p className="text-red-500">{error}</p>}

                <button type="submit" className="p-2 bg-blue-500 text-white rounded-md w-full">
                    Confirm Transfer
                </button>
            </form>
        </div>
    );
};

export default StockTransfer;
