"use client"

import { useState, useEffect } from 'react';
import DisplayCard from '@/components/productDisplay/displayCard';
import ImageUploader from '@/components/addProducts/imageUploader';

import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



async function fetchProducts() {

    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/product`, { cache: 'no-store' });
    const data = await response.json();

    return data.products
}



export default function ProductEdit() {
    const [searchTerm, setSearchTerm] = useState('');

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    const [updatedProduct, setUpdatedProduct] = useState(null);
    const [tempSize, setTempSize] = useState("");

    const handleSetImags = async (newImgs) => {

        setUpdatedProduct({ ...updatedProduct, imgs: newImgs });
    }

    useEffect(() => {
        async function populateProducts() {
            const p = await fetchProducts();

            setProducts(p);
        }
        populateProducts();
    }, []);

    useEffect(() => {
        const handleSearch = () => {
            // Filter products based on the search term
            const filteredProducts = products.filter((product) =>
                product.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredProducts(filteredProducts);
            setUpdatedProduct(null);
        };
        handleSearch();
    }, [products, searchTerm]);


    const handleEditProduct = (product) => {

        setUpdatedProduct({
            _id: product._id,
            imgs: product.imgs,
            title: product.title,
            description: product.description,
            price: product.price,
            hasVarients: product.hasVarients,
            varients: product.varients
        });
    };

    const handleUpdateProductsState = () => {
        const productIndex = products.findIndex((product) => product._id === updatedProduct._id);

        if (productIndex !== -1) {
            // Create a copy of the products array
            const updatedProducts = [...products];

            // Update the product in the copied array with the updated data
            updatedProducts[productIndex]._id = updatedProduct._id;
            updatedProducts[productIndex].title = updatedProduct.title;
            updatedProducts[productIndex].description = updatedProduct.description;
            updatedProducts[productIndex].price = updatedProduct.price;
            updatedProducts[productIndex].imgs = updatedProduct.imgs;
            updatedProducts[productIndex].hasVarients = updatedProduct.hasVarients;
            updatedProducts[productIndex].varients = updatedProduct.varients;


            // Update the products state with the new array
            // console.log(updatedProducts[productIndex]);
            setProducts(updatedProducts);
        }
    };

    const handleUpdateProduct = () => {
        // Send a POST request to update the product details
        // console.log(updatedProduct);

        axios.put('/api/product', updatedProduct)
            .then((response) => {
                // console.log('Product updated:', response.data.message);
                toast.success('Product Updated',
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

                handleUpdateProductsState();
            }).catch((error) => {
                console.error('Error updating product:', error);
                toast.error('Update Fialed',
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
                // Handle errors, e.g., show an error message
            });
    };


    const handleDeleteProduct = () => {
        // Send a POST request to update the product details
        // console.log(updatedProduct);

        axios.delete('/api/product', {
            data: { productId: updatedProduct._id },
        })
            .then((response) => {
                // console.log('Product updated:', response.data.message);
                toast.success('Product Deleted',
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

                setProducts((prevProducts) => prevProducts.filter(product => product._id !== updatedProduct._id));

            }).catch((error) => {
                console.error('Error Deleting product:', error);
                toast.error('Delete Failed',
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
                // Handle errors, e.g., show an error message
            });
    };
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Edit or Delete a Product</h1>

            <ToastContainer />

            {/* Search input */}
            <div className="mb-4">
                <input
                    id='filterInput'
                    type="text"
                    placeholder="filter products"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border border-gray-300 rounded-lg py-2 px-4 w-full"
                />
            </div>

            {/* Product list */}
            <div className="mb-4">
                <div className="flex flex-wrap justify-center">
                    {
                        filteredProducts.map((product) => (
                            <button key={product._id}
                                onClick={() => handleEditProduct(product)}>
                                <DisplayCard product={product} />
                            </button>
                        ))
                    }
                </div>
            </div>

            {/* Product editing form */}
            {
                updatedProduct && (

                    <div className="bg-white rounded-lg p-4 shadow-md">

                        <ImageUploader orignalImages={updatedProduct.imgs} handleSetImages={handleSetImags} />

                        <div className='flex justify-center m-2'>

                            <button
                                onClick={handleDeleteProduct}
                                className="bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg py-2 px-4"
                            >
                                Delete Product
                            </button>
                        </div>

                        <h2 className="text-lg font-semibold mb-2">Edit Product: {updatedProduct.title}</h2>

                        <label htmlFor="productTitle" className="leading-7 text-sm text-gray-600">Title</label>
                        <input
                            id='productTitle'
                            type="text"
                            placeholder="Title"
                            value={updatedProduct.title}
                            onChange={(e) => setUpdatedProduct({ ...updatedProduct, title: e.target.value })}
                            className="border border-gray-300 rounded-lg py-2 px-4 w-full mb-2"
                        />
                        <label htmlFor="productTitle" className="leading-7 text-sm text-gray-600">Description</label>
                        <input
                            id='productDescription'
                            type="text"
                            placeholder="Description"
                            value={updatedProduct.description}
                            onChange={(e) => setUpdatedProduct({ ...updatedProduct, description: e.target.value })}
                            className="border border-gray-300 rounded-lg py-2 px-4 w-full mb-2"
                        />
                        <label htmlFor="productTitle" className="leading-7 text-sm text-gray-600">Price</label>
                        <input
                            id='productPrice'
                            type="number"
                            placeholder="Price"
                            value={updatedProduct.price}
                            onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
                            className="border border-gray-300 rounded-lg py-2 px-4 w-full mb-2"
                        />


                        <div>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={updatedProduct.hasVarients}
                                    onChange={()=>{
                                        setUpdatedProduct({...updatedProduct, hasVarients: !updatedProduct.hasVarients})
                                    }}
                                />
                                Has Variants
                            </label>
                            {

                                updatedProduct.hasVarients && (
                                    <div className='m-5'>
                                        <h1 className='font-bold text-lg'>Size Chart: </h1>
                                        <div className='bg-gray-200 p-2'>
                                            {
                                                updatedProduct.varients.map((size, index) => {
                                                    return (
                                                        <h1 key={index}>{size}</h1>
                                                    )
                                                })
                                            }
                                        </div>
                                        <label htmlFor="size adder" className="leading-7 text-sm text-gray-600">Size</label>
                                        <input type="size adder" id="size adder" name="size adder"
                                            className="w-full bg-yellow-50 bg-opacity-50 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-800 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"

                                            value={tempSize}
                                            onChange={(e) => { setTempSize(e.target.value) }} />
                                        <button className="bg-slate-200 border rounded my-3 mx-1 p-1 text-sm"
                                            onClick={()=>{
                                                setUpdatedProduct({...updatedProduct, varients:[...updatedProduct.varients, tempSize]})
                                            }}
                                        >
                                            add size
                                        </button>
                                    </div>
                                )
                            }
                        </div>


                        <button
                            onClick={handleUpdateProduct}
                            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg py-2 px-4"
                        >
                            Update Product
                        </button>
                    </div>
                )}
        </div>
    );
}
