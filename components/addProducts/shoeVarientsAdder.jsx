"use client"

import { useState } from "react";

export default function ShoeOrJacketVarientsAdder({handleSetVarients}) {

    const [varients, setVarients] = useState([]);

    const [color, setColor] = useState("");

    const [sizes, setSizes] = useState([]);
    const [size, setSize] = useState("");
    const [qty, setQty] = useState("");


    const handleColorChange = (e) => {
        setColor(e.target.value);
        setSize("");
        setSizes([]);


    }

    const handleSizeSubmit = () => {
        setSizes([...sizes,
        {
            size: size,
            qty: qty
        }]);
    }
    const handleSaveVarientsSubmit = () => {
        
        setVarients([...varients, {
            color: color,
            sizes: sizes
        }]);

        handleSetVarients([...varients, {
            color: color,
            sizes: sizes
        }]);
    }

    // console.log("size: ", size);
    // console.log("sizes: ", sizes);
    // console.log("varient: ", varient);
    // console.log("varients: ", varients);
    return (
        <div>
            <div>

                <label htmlFor="title" className="leading-7 text-sm text-gray-600">color</label>
                <input type="text" id="colos" required
                    className="w-full bg-yellow-50 bg-opacity-50 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-800 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={handleColorChange} />

                <label htmlFor="title" className="leading-7 text-sm text-gray-600">add sizes one-by-one</label>
                <input type="text" id="size" required
                    className="w-full bg-yellow-50 bg-opacity-50 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-800 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={(e) => setSize(e.target.value)} />

                <label htmlFor="title" className="leading-7 text-sm text-gray-600">quantity available for this size</label>
                <input type="text" id="size" required
                    className="w-full bg-yellow-50 bg-opacity-50 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-800 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={(e) => setQty(e.target.value)} />

                <button className="bg-slate-200 border rounded my-3 mx-1 p-1 text-sm" onClick={handleSizeSubmit}>add size</button>
                <button className="bg-slate-200 border rounded my-3 mx-1 p-1 text-sm" onClick={handleSaveVarientsSubmit}>save the varients</button>

            </div>




            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">

                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Colors
                                        </th>
                                        <th scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Size, quantity
                                        </th>
                                    </tr>
                                </thead>

                                <tbody className="bg-white divide-y divide-gray-200">
                                    {
                                        varients?.map((v, index) =>
                                            <tr key={index}>
                                                <td>{v.color}: </td>

                                                {
                                                    (v.sizes).map(({size, qty}, index) =>
                                                        <td key={index}>
                                                            {size}, {qty} 
                                                        </td>
                                                    )
                                                }
                                            </tr>
                                        )
                                    }
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </div>





        </div>

    );
};

