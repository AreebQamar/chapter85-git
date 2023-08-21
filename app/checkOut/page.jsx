"use client"

import Link from 'next/link'
import { MdAddCircle, MdRemoveCircle } from 'react-icons/md'

import { useContext, useState, use, useEffect } from "react"
import { useSession } from "next-auth/react";
import { CartContext } from "@/context/cartContext"

import { AiOutlineWarning } from "react-icons/ai"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useRouter } from 'next/navigation';

import axios from "axios";

function Add({ key, cart, addToCart }) {
    return (
        <div>+</div>
    )
}
function Subtract({ key, cart, remove }) {
    return (
        <div>-</div>
    )
}



async function fetchProductDetails() {
    const d = await fetch("http://localhost:3000/jackets/api/user");

    return d.json();
}

const dataPromis = fetchProductDetails();

export default function CheckOutPage() {

    const { data: session } = useSession();
    //console.log(session);
    const data = use(dataPromis);
    const users = data.Users;
    const thisUser = users.filter((user) => user.email === session?.user.email)[0];

    //console.log(thisUser);

    const router = useRouter();

    //console.log(cart, netTotal, addToCart, reduceQuantity);
    const { cart, netTotal, addToCart, reduceQuantity, clearCart } = useContext(CartContext);

    //console.log(cart.varient);

    // const [phone, setPhone] = useState("");
    // const [email, setEmail] = useState("");

    const [province, setProvince] = useState("");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");

    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        if (address && city && province) {
            setDisabled(false);
        }
        else {
            setDisabled(true);
        }
        
        // console.log(disabled, address, province, city);
    },[address, city, province])


    const handlePlaceOrder = async (cart) => {
        if (!disabled) {

            //console.log(cart);
            let products = [];

            const keys = Object.keys(cart);
            for (let i = 0; i < keys.length; i++) {
                //console.log(keys[i], cart[keys[i]]);

                const productId = keys[i];
                const qty = cart[keys[i]].qty;
                const size = cart[keys[i]].varient;

                products.push({ productId, qty, size });
            }

            //console.log(products);
            try {
                const data = await axios.post("/api/order", {

                    email: thisUser.email,
                    phone: thisUser.phone,

                    province,
                    city,
                    address,

                    products

                });
                //console.log(data);

                toast.success('Order generated',
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

            } catch (error) {
                console.log(error);
            }


        }
        else {
            toast.error('Please provide all the details',
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

    return (
        <div className='m-2'>
            <ToastContainer />
            <div className='font-bold text-xl'>Shipping details</div>

            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-10 mx-auto">
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">Sipping Address</label>
                                    <input type="text" id="address" name="address" className="w-full bg-yellow-50 borfer-slate-200  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        required
                                        onChange={(e) => setAddress(e.target.value)} />
                                </div>
                            </div>


                            {/* <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone Number</label>
                                    <input type="phone" id="phone" name="phone" className="w-full bg-yellow-50 borfer-slate-200 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        required
                                        onChange={onChangeHandler} />
                                </div>
                            </div> */}

                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="province" className="leading-7 text-sm text-gray-600">Province</label>
                                    <input type="province" id="email" name="province" className="w-full bg-yellow-50 borfer-slate-200 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        required
                                        onChange={(e) => setProvince(e.target.value)} />
                                </div>
                            </div>

                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="city" className="leading-7 text-sm text-gray-600">City</label>
                                    <input type="city" id="city" name="city" className="w-full bg-yellow-50 borfer-slate-200 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        required
                                        onChange={(e) => setCity(e.target.value)} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className='font-bold text-xl'>Review order</div>
            <div className=" border-orange-900 p-1">

                <div className="p-0 m-1">
                    {
                        Object.keys(cart).length == 0 ?
                            <div className="text-red-800">
                                cart empty, add somthing.
                            </div>
                            :
                            <div className="p-0 m-1">
                                {
                                    Object.keys(cart).map((key) =>
                                        <div key={key} className="m-1 p-1 bg-yellow-50 border borfer-slate-200 rounded ">
                                            <div>{cart[key].name}</div>
                                            <div>{cart[key].varient}</div>
                                            <div>{cart[key].price}</div>
                                            <div className="flex justify-center items-center">
                                                <div onClick={function () { addToCart(key, cart[key].name, cart[key].varient, cart[key].price) }}>
                                                    <div className="pr-5 text-orange-800"><MdAddCircle /></div>
                                                </div>

                                                <div className="m-1 p-3 bg-orange-200 border border-orange-500 rounded-sm">{cart[key].qty}</div>

                                                <div onClick={() => reduceQuantity(key)} >
                                                    <div className="pl-5 text-orange-800"><MdRemoveCircle /></div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }

                                <div className=" font-bold text-xl text decoration-8">total payable: {netTotal}</div>

                                <div className=" flex justify-center m-5">
                                    <button className="bg-orange-800 p-1 text-orange-100 rounded border-teal-700 border "
                                        onClick={() => { clearCart(); router.push("/"); }}>clear All</button>
                                </div>
                            </div>
                    }

                </div>
            </div>

            <div className='font-bold text-xl'>Payment method</div>

            <div className='m-2'>
                <div className='text-yellow-600 flex '>
                    <AiOutlineWarning className='m-1' />as of now only cash on delivary is available
                </div>
            </div>
            <button disabled={disabled} className="bg-orange-800 m-2 p-1 text-orange-100 rounded border-teal-700 border disabled:bg-orange-200 disabled:text-slate-900"
                onClick={() => handlePlaceOrder(cart)}>
                Place order
            </button>
        </div>
    )

}

// transform transition-transform translate-x-full