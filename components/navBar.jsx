"use client"

import Image from "next/image"
import Link from "next/link"

import Cart from "./cart";

import { BsCart3 } from 'react-icons/bs';
import { useState } from "react";

import { CgProfile } from "react-icons/cg";

import { useSession, signOut } from "next-auth/react";


function DropDown() {

    const { data: session } = useSession();

    return (

        <div className="z-10 p-2 absolute top-16 right-2 bg-orange-300 border border-black rounded">

            <div className="rotate-45 bg-orange-300 absolute -top-3 right-12 p-3 border-l border-t border-black rounded">

            </div>

            <div className="m-1 italic">
                {session?.user.name}

            </div>

            {
                session?.user.email === "areeb@areeb.com" &&
                <>
                    <div>
                        <Link href="/admin/addProducts">
                            add products
                        </Link>
                    </div>
                    <div>
                        <Link href="/admin/orders">
                            orders
                        </Link>
                    </div>
                </>

            }

            <Link className="mx-1 font-bold underline" href="/manageAccount">
                Manage Account
            </Link>

            <div className="mt-1 text-slate-800 font-bold p-1 bg-orange-800 border-2 border-black rounded flex justify-center">
                <button onClick={() => signOut()}>Sign Out</button>
            </div>

        </div >

    )
}


export default function NavBar() {


    const [showChart, setShowCart] = useState(false);

    const [ShowMenu, setShowMenu] = useState(false);

    const { data: session } = useSession();

    const handleCloseCart = () => {
        setShowCart(false);
    }
   
    return (
        <div className="text-gray-600 body-font bg-gradient-to-b from-slate-300 flex flex-col p-1 px-5 md:flex-row justify-between items-center">
           
            
           
           
            <Link className="justify-items-center flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
                href='/'>
                <Image className="text-white p-px bg-gray-700 rounded-full "
                    src="/logo.jpeg"
                    alt=""
                    height={50}
                    width={50}
                />
                <span className="ml-3 text-xl">Chapter-85</span>
            </Link>

            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                <Link href='/belts' className="mx-3 hover:text-gray-900">Belts</Link>
                <Link href='/wallets' className="mx-3 hover:text-gray-900">Wallets</Link>
                <Link href='/shoes' className="mx-3 hover:text-gray-900">Shoes</Link>
                <Link href='/jackets' className="mx-3 hover:text-gray-900">jackets</Link>
                <Link href='/contactUs' className="mx-3 hover:text-gray-900">Contact us</Link>
            </nav>

            <div className="justify-items-center m-2">
                {
                    session ?
                        <CgProfile className="h-6 w-6"
                            onClick={() => setShowMenu(!ShowMenu)} />
                        :
                        <Link href="/login">
                            <button className="bg-orange-800 m-2 p-1 text-orange-100 rounded border-teal-700 border ">
                                Log in
                            </button>
                        </Link>
                }
            </div>

            <div className="justify-items-center">
                <BsCart3 className="h-6 w-6"
                    onClick={() => setShowCart(!showChart)} />
            </div>
            {
                showChart && <Cart handleCloseCart={handleCloseCart} />
            }
            {
                ShowMenu && <DropDown />
            }

        </div>
    )
}