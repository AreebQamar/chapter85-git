"use client"

import { useEffect, useState } from "react";


export default function DisplayVarients({ varients, setSelectionHandler }) {

    // console.log(varients);

    const [selectedColor, setSelectedColor] = useState();
    const [selectedSize, setSelectedSize] = useState(0);

    const [availableSizes, setAvailableSizes] = useState();

    function colorSelectionHandler(color) {
        setSelectedColor(color);
        setSelectedSize("");
        setSelectionHandler({});
    }

    function sizeSelectionHandler(e) {
        console.log(e.target.value);
        if(e.target.value!==null)
            setSelectedSize(e.target.value);
    }

    useEffect(() => {

        if (selectedColor) {

            const shoesWithSelectedColor = varients.filter((varient) => varient.color === selectedColor)[0];
            setAvailableSizes(shoesWithSelectedColor.sizes);

        }
    }, [selectedColor])

    useEffect(() => {
        setSelectionHandler({
            selectedColor,
            selectedSize
        });

    }, [selectedSize])

    //console.log(varients);
    return (

        varients.length > 0 &&
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">


            {/* color selector */}
            <div className="flex">
                <span className="mr-3">Color</span>

                {
                    Object.keys(varients).map(i =>
                        <button key={i} onClick={() => { colorSelectionHandler(varients[i].color) }} className={`border-2 border-gray-300 ml-1 bg-${varients[i].color} rounded-full w-6 h-6 focus:outline-none`}>
                        </button>
                    )
                }
            </div>

            {/* size selector */}
            <div className="flex ml-6 items-center">

                <span className="mr-3">Size</span>

                <div className="relative">

                    <select
                        id="sizeSelector"
                        value = {selectedSize}
                        onChange={sizeSelectionHandler}
                        className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-800 text-base pl-3 pr-10">
                        {
                            availableSizes ?
                                <>
                                    <option value={""} selected> -- choose an option -- </option>
                                    {
                                        Object.keys(availableSizes).map((i) => (
                                            <option key={i} value={availableSizes[i].size}>
                                                {availableSizes[i].size}
                                            </option>
                                        ))
                                    }
                                </>
                                :
                                <option value = {""}>Select a color first</option>

                        }
                    </select>


                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                            <path d="M6 9l6 6 6-6"></path>
                        </svg>
                    </span>
                </div>


            </div>


        </div >

    )
}