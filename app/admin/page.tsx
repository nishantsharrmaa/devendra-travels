"use client";
import { useEffect, useState } from "react";

interface Enquiry {
    _id: string;
    name: string;
    email: string;
    phone: string;
    tour: string;
    pickupLocation: string;
    passengers: string;
    message: string;
    status: string;
    createdAt: string;
}

export default function AdminPage() {
    const [password, setPassword] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
    const [loading, setLoading] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === "admin123") {
            setIsAuthenticated(true);
            fetchEnquiries();
        } else {
            alert("Wrong password!");
        }
    };

    const fetchEnquiries = async () => {
        setLoading(true);
        try {
            const response = await fetch("/api/enquiries", { cache: 'no-store' });
            const data = await response.json();
            setEnquiries(data.enquiries || []);
        } catch (error) {
            console.error("Error fetching enquiries:", error);
        } finally {
            setLoading(false);
        }
    };

    const updateStatus = async (id: string, newStatus: string) => {
        try {
            const response = await fetch(`/api/enquiries/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ status: newStatus }),
            });

            if (response.ok) {
                setEnquiries(
                    enquiries.map((e) => (e._id === id ? { ...e, status: newStatus } : e))
                );
                alert("Status updated!");
            }
        } catch (error) {
            console.error("Error updating status:", error);
        }
    };

    const deleteEnquiry = async (id: string) => {
        if (!confirm("Are you sure?")) return;
        try {
            const response = await fetch(`/api/enquiries/${id}`, {
                method: "DELETE",
            });

            if (response.ok) {
                setEnquiries(enquiries.filter((e) => e._id !== id));
                alert("Enquiry deleted!");
            }
        } catch (error) {
            console.error("Error deleting enquiry:", error);
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-earth-700 flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
                    <h1 className="text-3xl font-bold text-earth-900 mb-6 text-center">
                        Admin Login
                    </h1>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <input
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border border-earth-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-saffron-400"
                        />
                        <button
                            type="submit"
                            className="w-full bg-saffron-500 hover:bg-saffron-600 text-white font-semibold py-3 rounded-lg transition"
                        >
                            Login
                        </button>
                    </form>
                    <p className="text-center text-earth-600 text-sm mt-4">
                        Password: <span className="font-mono">admin123</span>
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-earth-50 p-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-4xl font-bold text-earth-900">Admin Dashboard</h1>
                    <button
                        onClick={() => setIsAuthenticated(false)}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                    >
                        Logout
                    </button>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-earth-900">
                            Enquiries ({enquiries.length})
                        </h2>
                        <button
                            onClick={fetchEnquiries}
                            className="bg-earth-700 hover:bg-earth-800 text-white px-4 py-2 rounded-lg"
                        >
                            Refresh
                        </button>
                    </div>

                    {loading ? (
                        <p className="text-center text-earth-600">Loading...</p>
                    ) : enquiries.length === 0 ? (
                        <p className="text-center text-earth-600">No enquiries yet</p>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b-2 border-earth-200">
                                        <th className="text-left py-3 px-4 font-semibold text-earth-900">
                                            Name
                                        </th>
                                        <th className="text-left py-3 px-4 font-semibold text-earth-900">
                                            Email
                                        </th>
                                        <th className="text-left py-3 px-4 font-semibold text-earth-900">
                                            Phone
                                        </th>
                                        <th className="text-left py-3 px-4 font-semibold text-earth-900">
                                            Pickup Location
                                        </th>
                                        <th className="text-left py-3 px-4 font-semibold text-earth-900">
                                            Pax
                                        </th>
                                        <th className="text-left py-3 px-4 font-semibold text-earth-900">
                                            Tour
                                        </th>
                                        <th className="text-left py-3 px-4 font-semibold text-earth-900">
                                            Message
                                        </th>
                                        <th className="text-left py-3 px-4 font-semibold text-earth-900">
                                            Status
                                        </th>
                                        <th className="text-left py-3 px-4 font-semibold text-earth-900">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {enquiries.map((enquiry) => (
                                        <tr key={enquiry._id} className="border-b border-earth-100 hover:bg-earth-50">
                                            <td className="py-4 px-4 text-earth-800">{enquiry.name}</td>
                                            <td className="py-4 px-4 text-earth-800">{enquiry.email}</td>
                                            <td className="py-4 px-4 text-earth-800">{enquiry.phone}</td>
                                            <td className="py-4 px-4 text-earth-800">{enquiry.pickupLocation || "-"}</td>
                                            <td className="py-4 px-4 text-earth-800">{enquiry.passengers || "-"}</td>
                                            <td className="py-4 px-4 text-earth-800">{enquiry.tour || "-"}</td>
                                            <td className="py-4 px-4 text-earth-800 max-w-xs truncate">
                                                {enquiry.message}
                                            </td>
                                            <td className="py-4 px-4">
                                                <select
                                                    value={enquiry.status}
                                                    onChange={(e) =>
                                                        updateStatus(enquiry._id, e.target.value)
                                                    }
                                                    className="border border-earth-200 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-saffron-400"
                                                >
                                                    <option>Pending</option>
                                                    <option>Contacted</option>
                                                    <option>Resolved</option>
                                                </select>
                                            </td>
                                            <td className="py-4 px-4">
                                                <button
                                                    onClick={() => deleteEnquiry(enquiry._id)}
                                                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}