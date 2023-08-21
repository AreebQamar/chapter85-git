"use client"

import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';



import ImageUploader from "@/components/addProducts/imageUploader";
import VarientsAdder from "@/components/addProducts/varientsAdder";

import { useState } from "react";

import axios from "axios";

export default function AdminAddProductsPage() {
    
    const router = useRouter();
    const { data: session } = useSession();
    
    const [productId, setProductId] = useState("");
    const [title, setTitle] = useState("");
    const [catagory, setCatagory] = useState("");
    
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [qty, setQty] = useState("")


    const [colors, setColors] = useState(null);
    const [sizes, setSizes] = useState(null);
    //console.log(productId, title, catagory, description, price, qty);
    const [imgs, setImgs] = useState([]);
    
    const [varients, setVarients] = useState([]);


    const handleSetVarients = (value) => {
        setVarients(value)
    }

    const handleSubmit = async (e) => {
        
        e.preventDefault();
        if (imgs.length < 1) {
            alert("please fill all the required fields");
        }
        else {
            // console.log(varients);
            // console.log(imgs);
            // console.log(productId);
            // console.log(title);
            // console.log(price);
            // console.log(catagory);
            // console.log(description);

            try {
                const { data } = await axios.post("https://chapter85-887j3tw5o-areebqamar.vercel.app/api/product", {
                    v: varients,
                    imgs,
                    productId,
                    title,
                    price,
                    catagory,
                    description,

                });
                console.log(data);
            } catch (error) {
                console.log(error);

            }

        }




    }

    if (session && session.email !== "areeb@areeb.com") {
        router.push("/");
        return (
            <h1> you are not authorized</h1>

        )

    }


    return (
        <section className="text-gray-600 body-font relative">




            <ImageUploader handleSetImages={(value) => { setImgs(value) }} />

            <div className="container px-5 py-10 mx-auto">
                <div className="lg:w-1/2 md:w-2/3 mx-auto">


                    <form onSubmit={handleSubmit}
                        className="flex flex-wrap -m-2">

                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="productId" className="leading-7 text-sm text-gray-600">Product ID</label>
                                <input type="productId" id="productId" name="productId"
                                    className="w-full bg-yellow-50 bg-opacity-50 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-800 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    required
                                    value={productId}
                                    onChange={(e) => { setProductId(e.target.value) }} />
                            </div>
                        </div>

                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="title" className="leading-7 text-sm text-gray-600">title</label>
                                <input type="title" id="title" name="title"
                                    className="w-full bg-yellow-50 bg-opacity-50 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-800 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    required
                                    value={title}
                                    onChange={(e) => { setTitle(e.target.value) }} />
                            </div>
                        </div>

                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="price" className="leading-7 text-sm text-gray-600">Price</label>
                                <input type="price" id="price" name="price"
                                    className="w-full bg-yellow-50 bg-opacity-50 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-800 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    required
                                    value={price}
                                    onChange={(e) => { setPrice(e.target.value) }} />
                            </div>
                        </div>

                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="description" className="leading-7 text-sm text-gray-600">Description</label>
                                <textarea type="text" id="description" name="description"
                                    className="w-full bg-yellow-50 bg-opacity-50 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-800 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    required
                                    value={description}
                                    onChange={(e) => { setDescription(e.target.value) }} />
                            </div>
                        </div>

                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="qty" className="leading-7 text-sm text-gray-600">Quantity</label>
                                <input type="qty" id="qty" name="qty"
                                    className="w-full bg-yellow-50 bg-opacity-50 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-800 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    value={qty}
                                    onChange={(e) => { setQty(e.target.value) }} />
                            </div>
                        </div>

                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="Catatory" className="leading-7 text-sm text-gray-600">Catagory</label>
                                <select
                                    id="catagory"
                                    value={catagory}
                                    onChange={(e) => { setCatagory(e.target.value) }}
                                    required
                                    className="w-full bg-yellow-50 bg-opacity-50 rounded border appearance-none border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-800 text-base py-2 pl-3 pr-10"
                                >
                                    <option value={0} > -- choose an option -- </option>
                                    <option value={"shoes"} >shoes</option>
                                    <option value={"jackets"} >jackets</option>
                                    <option value={"bets"} >belts</option>
                                    <option value={"bags&wallets"} >bags&wallets</option>
                                </select>
                            </div>
                        </div>

                        <button type={"submit"}
                            className="bg-slate-200 border rounded my-3 mx-1 p-1 text-sm">Save All</button>


                    </form>
                    <VarientsAdder catagory={catagory} handleSetVarients={handleSetVarients}></VarientsAdder>

                </div>
            </div>
        </section>
    )
}