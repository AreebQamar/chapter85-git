"use client"

import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ImageUploader from "@/components/addProducts/imageUploader";
import VarientsAdder from "@/components/addProducts/varientsAdder";

import { useEffect, useState } from "react";

import axios from "axios";


async function fetchCategories() {

    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/categories`, { cache: "no-store" })
    const data = await response.json()

    return data.categories
}

export default function AdminAddProductsPage() {
    
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // Use an async function to fetch categories and update state
        async function fetchData() {
            const data = await fetchCategories();
            setCategories(data);
        }

        fetchData(); // Call the async function to fetch and set categories
    }, []);

    const [imgs, setImgs] = useState([]);
    const [productId, setProductId] = useState("");
    const [title, setTitle] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    // const [qty, setQty] = useState("")


    const handleSetVarients = (value) => {
        setVarients(value)
    }

    //console.log(productId, title, category, description, price, qty);


    const handleSubmit = async (e) => {

        e.preventDefault();
        if (imgs.length < 1) {
            alert("please fill all the required fields");
        }
        else {
            // console.log(imgs);
            // console.log(productId);
            // console.log(title);
            // console.log(price);
            // console.log(selectedCategory);
            // console.log(description);

            try {
                const { data } = await axios.post("/api/product", {
                    imgs,
                    productId,
                    title,
                    price,
                    category: selectedCategory,
                    description,

                });
                
                setImgs([]);
                setProductId("");
                setTitle("");
                setSelectedCategory("");
                setDescription("");
                setPrice("");

                toast.success('Product Added',
                    {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });

                // console.log(data);
            } catch (error) {
                console.log(error);
                toast.error('Failed to add the product',
                    {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });

            }

        }

    }


    return (
        <section className="text-gray-600 body-font relative">

        <ToastContainer />

        <ImageUploader orignalImages={imgs} handleSetImages={(value) => { setImgs(value) }} />

        <div className="container px-5 py-10 mx-auto">
            <div className="lg:w-1/2 md:w-2/3 mx-auto">


                <form onSubmit={handleSubmit}>

                    <div className="flex flex-wrap -m-2">

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

                        {/*quantity */}
                        {/* <div className="p-2 w-1/2">
    <div className="relative">
    <label htmlFor="qty" className="leading-7 text-sm text-gray-600">Quantity</label>
    <input type="qty" id="qty" name="qty"
    className="w-full bg-yellow-50 bg-opacity-50 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-800 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    value={qty}
            onChange={(e) => { setQty(e.target.value) }} />
            </div>
        </div> */}

                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="Catatory" className="leading-7 text-sm text-gray-600">Catagory</label>
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => { setSelectedCategory(e.target.value) }}
                                    required
                                    className="w-full bg-yellow-50 bg-opacity-50 rounded border appearance-none border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-800 text-base py-2 pl-3 pr-10"
                                >
                                    <option value={0} > -- choose an option -- </option>
                                    {
                                        categories.map((category) => (

                                            <option key={category._id} value={category.name} >{category.name}</option>
                                        ))}

                                </select>
                            </div>
                        </div>

                    </div>

                    <button type={"submit"}
                        className="bg-slate-200 border rounded my-3 mx-1 p-1 text-sm">Save All</button>

                </form>
                {/* <VarientsAdder category={category} handleSetVarients={handleSetVarients}></VarientsAdder> */}

            </div>
        </div>
    </section>
    )
}