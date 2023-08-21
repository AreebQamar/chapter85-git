"use client"

import { useState } from "react";

export default function VarientsBySizeAdder({handleSetVarients}) {
    const [size, setSize] = useState("");
    const [qty, setQty] = useState("");
    const [sizes, setSizes] = useState([]);

    
    const handleAddSize = (e) => {
        e.preventDefault();
        setSizes([...sizes, { size: size, qty: qty }]);

        handleSetVarients([...sizes, { size: size, qty: qty }]);
    }
    return (
        <div>
            <form onSubmit={handleAddSize}>

                <label htmlFor="title" className="leading-7 text-sm text-gray-600">Add sizes</label>
                <input type="text" id="size" required
                    className="w-full bg-yellow-50 bg-opacity-50 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-800 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={e => setSize(e.target.value)} />

                <label htmlFor="title" className="leading-7 text-sm text-gray-600">Quantity available for this size</label>
                <input type="number" id="qty" required
                    className="w-full bg-yellow-50 bg-opacity-50 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-800 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={e => setQty(e.target.value)} />

                <button type={"submit"} className="bg-slate-200 border rounded my-3  p-1 text-sm"
                > add </button>
            </form>
            <div>
                <ul>
                    <li className="font-bold">
                        size, qty
                    </li>
                    {
                        sizes.map(({ size, qty }, index) =>
                            <li key={index}>
                                {size}, {qty}
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}