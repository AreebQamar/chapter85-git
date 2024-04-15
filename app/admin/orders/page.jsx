"use client"

import Link from "next/link";
import axios from 'axios';

import { useEffect, useState } from "react";

async function fetchOrders() {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/order`);
        return response.data.Orders;
    } catch (error) {
        console.error('Error fetching orders:', error);
        return [];
    }
}


export default function DataTable() {

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchAndSetOrders = async () => {
            const fetchedOrders = await fetchOrders();
            setOrders(fetchedOrders);
            setLoading(false);
        };

        fetchAndSetOrders();
    }, []);


    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Data Table</h2>
            {
                loading ?(
                    <h2 className="text-2xl font-bold mb-4">Loading...</h2>
                ) :
                    (

                        <table className="w-full border">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="border p-2">#</th>
                                    <th className="border p-2">Order ID</th>
                                    <th className="border p-2">User ID</th>
                                    <th className="border p-2">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order, index) => (
                                    <tr key={index} className="border">
                                        <td className="border p-2">{order + 1}</td>
                                        <td className="border p-2">{order.id}</td>
                                        <td className="border p-2">{order.email}</td>
                                        <td className="border p-2">{order.status}</td>
                                        <td className="border p-2"><Link href={`/admin/orders/${order.id}`}
                                            className="m-1 p-1 text-sm bg-teal-600 border-slate-950 rounded">Details</Link></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )
            }
        </div>
    );
};


