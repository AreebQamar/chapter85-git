"use client"

import Link from "next/link"
import { useState } from "react"
import axios from "axios";

import { useSession, signOut } from "next-auth/react";


var CryptoJS = require("crypto-js");

export default function RegisterPage() {

    const { data: session } = useSession();

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    
    const submitHandler = async (event) => {
        
        event.preventDefault();
        

        if (password === confirmPassword) {

            //console.log(session.user.email);
            //console.log(session);
            var encPassword = CryptoJS.AES.encrypt(password, process.env.NEXT_PUBLIC_AES_SECRET).toString();

            //console.log(password);

            try {
                const { data } = await axios.put("/api/user", {
                    name:"L",
                    email:session.user.email,
                    password: encPassword,
                });

                console.log(data)
                alert("User Registered");
            }
            catch (error) {
                console.log(error);
            }

            //console.log(data)
            //alert("User Registered");
        }
        else {
            console.log(password, confirmPassword);
            alert("passwords don't match. Try again!");

            //document.getElementById('confirmPasswordField').setCustomValidity("Passwords don't match!");
        }
    }


    return (
        <section className="text-gray-400 bg-gray-900 body-font relative">
            <div className="container px-5 py-10 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Register</h1>
                </div>

                <form onSubmit={submitHandler} className="">

                    <div className="p-2 w-1/2">
                        <div>
                            <label htmlFor="password" className="leading-7 text-sm text-gray-400">Password</label>
                            <input type="password" name="password" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-orange-500 focus:bg-gray-900 focus:ring-2 focus:ring-orange-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </div>

                    <div className="p-2 w-1/2">
                        <div>
                            <label htmlFor="password" className="leading-7 text-sm text-gray-400">Confirm Password</label>
                            <input type="password" id="confirmPassword" name="confirmPassword" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-orange-500 focus:bg-gray-900 focus:ring-2 focus:ring-orange-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                required
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)} />
                        </div>
                    </div>

                    <div className="my-7 w-full">
                        <button type="submit" className="flex mx-auto text-white bg-orange-700 border-0 py-2 px-8 focus:outline-none hover:bg-orange-600 rounded text-lg">Register</button>
                    </div>
                </form>

                already registered? <Link className="text-blue-800" href="/login">logIn</Link>
            </div>

        </section>
    )
}