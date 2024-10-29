import React, { useState } from "react";
import { Card } from "@/components/ui/card";

const CustomerInfo = () => {
    const [customers, setCustomers] = useState([
        {
            name: "Json",
            email: "json@getMainColorOfGraphicItem.com",
            phone: "0000000000",
            address: "London, chicago",
        },
        {
            name: "Json",
            email: "json@getMainColorOfGraphicItem.com",
            phone: "0000000000",
            address: "London, chicago",
        },
        {
            name: "Json",
            email: "json@getMainColorOfGraphicItem.com",
            phone: "0000000000",
            address: "London, chicago",
        },
    ]);

    const [newCustomer, setNewCustomer] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    });
    const [editingIndex, setEditingIndex] = useState(null);

    // Add or update customer
    const handleAddCustomer = () => {
        if (editingIndex !== null) {
            const updatedCustomers = customers.map((customer, index) =>
                index === editingIndex ? newCustomer : customer,
            );
            setCustomers(updatedCustomers);
            setEditingIndex(null);
        } else {
            setCustomers([...customers, newCustomer]);
        }
        setNewCustomer({ name: "", email: "", phone: "", address: "" });
    };

    // Edit customer
    const handleEditCustomer = (index) => {
        setNewCustomer(customers[index]);
        setEditingIndex(index);
    };

    // Delete customer
    const handleDeleteCustomer = (index) => {
        const updatedCustomers = customers.filter((_, i) => i !== index);
        setCustomers(updatedCustomers);
    };

    return (
        <div className="p-4">
            <h1 className="font-semibold text-3xl mb-5">Customer Information</h1>

            {/* Customer Form */}
            {/* <Card className="p-5 mb-5 shadow-lg">
                <h2 className="text-xl font-semibold mb-4">Add or Edit Customer</h2>
                <div className="flex flex-col gap-3">
                    <input
                        type="text"
                        placeholder="Name"
                        value={newCustomer.name}
                        onChange={(e) => setNewCustomer({ ...newCustomer, name: e.target.value })}
                        className="border p-2 rounded w-full"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={newCustomer.email}
                        onChange={(e) => setNewCustomer({ ...newCustomer, email: e.target.value })}
                        className="border p-2 rounded w-full"
                    />
                    <input
                        type="tel"
                        placeholder="Phone"
                        value={newCustomer.phone}
                        onChange={(e) => setNewCustomer({ ...newCustomer, phone: e.target.value })}
                        className="border p-2 rounded w-full"
                    />
                    <textarea
                        placeholder="Address"
                        value={newCustomer.address}
                        onChange={(e) =>
                            setNewCustomer({ ...newCustomer, address: e.target.value })
                        }
                        className="border p-2 rounded w-full"
                    />
                    <button
                        onClick={handleAddCustomer}
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
                    >
                        {editingIndex !== null ? "Update Customer" : "Add Customer"}
                    </button>
                </div>
            </Card> */}

            {/* Customer List */}
            <Card className="shadow-lg p-4">
                <h2 className="text-xl font-semibold mb-4">Customer List</h2>
                {customers.length > 0 ? (
                    <div className="space-y-0 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {customers.map((customer, index) => (
                            <Card key={index} className="p-4 border-b pb-4 last:border-b-0">
                                <div className="mb-3">
                                    <h3 className="font-semibold text-lg">{customer.name}</h3>
                                    <p>Email: {customer.email}</p>
                                    <p>Phone: {customer.phone}</p>
                                    <p>Address: {customer.address}</p>
                                </div>
                                {/* <div className="flex gap-2">
                                    <button
                                        onClick={() => handleEditCustomer(index)}
                                        className="bg-yellow-500 text-white py-1 px-2 rounded hover:bg-yellow-600"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDeleteCustomer(index)}
                                        className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
                                    >
                                        Delete
                                    </button>
                                </div> */}
                            </Card>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-600">No customers available.</p>
                )}
            </Card>
        </div>
    );
};

export default CustomerInfo;
