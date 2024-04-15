"use client"

import axios from 'axios';

import { useEffect, useState } from "react";

async function fetchOrders() {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/order`, { headers: { 'Cache-Control': 'no-store' } });
      console.log(response.data);
      return response.data.Orders;
    } catch (error) {
      console.error('Error fetching orders:', error);
      return [];
    }
  }
export default function OderDetailsPage({ params: { id } }) {

    const [orders, setorders] = useState([]);

    useEffect(() => {
        const fetchAndSetOrders = async () => {
          const fetchedOrders = await fetchOrders();
          setorders(fetchedOrders);
         
        };
        
        fetchAndSetOrders();
       
      }, []);
    

    return (
        <div className="m-2">
           
            <h1 className="text-2xl grid justify-items-center font-bold py-5">Order's Detal Page</h1>

            <div className="flex bg-slate-200 rounded p-2">
                <h1 className="font-bold mr-1">ID: </h1>
                {id}
            </div>

            <h1 className="text-xl grid justify-items-center font-bold m-1">Contact Details</h1>

            <div className="flex bg-slate-200 rounded p-2">
                <h1 className="font-bold mr-1">Email: </h1>
                {orders.userId}
            </div>

            <div className="flex bg-slate-200 rounded p-2">
                <h1 className="font-bold mr-1">Phone: </h1>
                {orders.phone}
            </div>

            <h1 className="text-xl grid justify-items-center font-bold m-1">Address Details</h1>

            <div className="flex bg-slate-200 rounded p-2">
                <h1 className="font-bold mr-1">Province: </h1>
                {orders.province}
            </div>

            <div className="flex bg-slate-200 rounded p-2">
                <h1 className="font-bold mr-1">City: </h1>
                {orders.city}
            </div>

            <div className="flex bg-slate-200 rounded p-2">
                <h1 className="font-bold mr-1">Address: </h1>
                {orders.address}
            </div>


            <h1 className = "text-xl grid justify-items-center font-bold m-1">Order Items</h1>
            {
                orders.products.map((product, index) => (
            <div key = {index} className="bg-slate-200 rounded p-2 m-1">
                        
                        <div className="flex">
                            <h1 className="font-bold mr-1"> {`${index+1}).`} </h1>
                           
                        </div>

                        <div className="flex">
                            <h1 className="font-bold mr-1">Product ID: </h1>
                            {product.productId}
                        </div>

                        <div className="flex">
                            <h1 className="font-bold mr-1">varient: </h1>
                            {product.size}
                        </div>

                        <div className="flex">
                            <h1 className="font-bold mr-1">Quantity: </h1>
                            {product.qty}
                        </div>
                    </div>
                ))
            }

        </div>
    )
} 