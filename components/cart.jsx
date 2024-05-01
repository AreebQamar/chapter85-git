"use client"

import Link from 'next/link'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { MdAddCircle, MdRemoveCircle } from 'react-icons/md'

import { useContext } from "react"
import { CartContext } from "@/context/cartContext"

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


export default function Cart({ handleCloseCart }) {

    //console.log(cart, netTotal, addToCart, reduceQuantity)
    const { cart, netTotal, addToCart, reduceQuantity, clearCart } = useContext(CartContext);

    //console.log(cart.varient)

    return (
        <div className="bg-orange-200 border-orange-900 absolute top-12 right-1 px-4 py-7 z-10 h-full">
            <div className="flex justify-end">
                <button onClick={handleCloseCart}>

                    <AiOutlineCloseCircle />
                </button>
            </div>

            <div className="p-0 m-1">
                <h1 className="flex justify-items-center">Shoping Cart</h1>
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
                                        <div>price: {cart[key].price}</div>
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

                            <div className="bg-yellow-50 text-center text decoration-8">total: {netTotal}</div>

                            <div className="mt-10 m-5">
                                <Link href='/checkOut'>
                                    <button className="bg-orange-800 m-2 p-1 text-orange-100 rounded border-teal-700 border ">check out</button>
                                </Link>
                                <button className="bg-orange-800 m-2 p-1 text-orange-100 rounded border-teal-700 border "
                                    onClick={() => clearCart()}>clear cart</button>
                            </div>
                        </div>
                }

            </div>

        </div>
    )

}

// transform transition-transform translate-x-full