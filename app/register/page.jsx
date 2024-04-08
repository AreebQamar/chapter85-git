"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import axios from "axios";

import EmailVerifier from "@/components/signUp/emailVerifier";
import PhoneVerifier from "@/components/signUp/phoneVerifier";

var CryptoJS = require("crypto-js");

import { useRouter } from 'next/navigation';






export default function RegisterPage() {

    const router = useRouter();


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [phoneOTP_Orignal, setPhoneOTP_Orignal] = useState("");

    const [isEmailVerified, setIsEmailVerified] = useState(false);
    const [isPhoneVerified, setIsPhoneVerified] = useState(false);

    const [renderVerifier, setRenderVerifier] = useState(false);

    const closePopUp = () => {
        setRenderVerifier(false);
    }
    const submitHandler = async (event) => {

        event.preventDefault();

        if (password === confirmPassword) {

            setRenderVerifier(true);
            }
        else {
            console.log(password, confirmPassword);
            alert("passwords don't match. Try again!");

            //document.getElementById('confirmPasswordField').setCustomValidity("Passwords don't match!");
        }
    }

    const registerUser = async () => {

        if (isEmailVerified) {

            var encPassword = CryptoJS.AES.encrypt(password, process.env.NEXT_PUBLIC_AES_SECRET).toString();
            try {
                const { data } = await axios.post("/api/user", {
                    name,
                    email,
                    phone,
                    password: encPassword,
                    role: 'user'
                });

                console.log(data)
                alert("User Registered");

                router.push("/login");
            }
            catch (error) {
                console.log(error);
            }


        }
    }

    useEffect(function () {
        registerUser();

    }, [isEmailVerified]);

    return (
        <section className="text-gray-400 bg-gray-900 body-font">

            <div className="text-center w-full py-6">
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">Register</h1>
            </div>


            <form onSubmit={submitHandler} className="w-1/2  flex flex-col mx-auto ">

                <div className="p-2 ">
                    <div>
                        <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
                        <input type="email" id="email" name="email" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-orange-500 focus:bg-gray-900 focus:ring-2 focus:ring-orange-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                </div>

                <div className="p-2 ">
                    <div>
                        <label htmlFor="name" className="leading-7 text-sm text-gray-400">name</label>
                        <input type="name" id="name" name="name" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-orange-500 focus:bg-gray-900 focus:ring-2 focus:ring-orange-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)} />
                    </div>
                </div>


                <div className="p-2 ">
                    <div>
                        <label htmlFor="email" className="leading-7 text-sm text-gray-400">Phone</label>
                        <input type="phone" id="phone" name="phone" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-orange-500 focus:bg-gray-900 focus:ring-2 focus:ring-orange-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)} />
                    </div>
                </div>

                <div className="p-2 ">
                    <div>
                        <label htmlFor="password" className="leading-7 text-sm text-gray-400">Password</label>
                        <input type="password" name="password" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-orange-500 focus:bg-gray-900 focus:ring-2 focus:ring-orange-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>

                <div className="p-2 ">
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

            {
                renderVerifier && (
                    <EmailVerifier email={email} setIsEmailVerified={setIsEmailVerified} closePopUp={closePopUp}/>
                )

            }


            {/* {
                isEmailVerified && (
                    <PhoneVerifier phone={phone} setIsPhoneVerified={setIsPhoneVerified} />
                )
            }
           */}



            already registered? <Link className="text-blue-800" href="/login">logIn</Link>

        </section>
    )
}