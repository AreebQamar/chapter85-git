"use client"

import Link from "next/link"
import { useState} from "react"

import {signIn} from "next-auth/react"

import { useRouter } from 'next/navigation';


export default function LogInPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();

    const submitHandler = async (event) => {

        event.preventDefault();

        try {
            const data = await signIn('credentials', {
                redirect: false,
                email,
                password
            });
            if (data?.error == null) {
                router.push("/");
            }
            else {
                alert("wrong email or password.");
            }
            console.log("log in page: ", data);
        } catch (error) {
            console.log(error);
        }

    }
    return (
        <section className="text-gray-400 bg-gray-900 body-font relative">
            <div className="container px-5 py-20 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Log In</h1>
                </div>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <form onSubmit={submitHandler} className="flex flex-wrap -m-2">

                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
                                <input type="email" id="email" name="email" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-orange-500 focus:bg-gray-900 focus:ring-2 focus:ring-orange-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} />
                            </div>
                        </div>
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="password" className="leading-7 text-sm text-gray-400">Password</label>
                                <input type="password" name="password" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-orange-500 focus:bg-gray-900 focus:ring-2 focus:ring-orange-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} />
                            </div>
                        </div>

                        <div className="my-7 w-full">
                            <button className="flex mx-auto text-white bg-orange-700 border-0 py-2 px-8 focus:outline-none hover:bg-orange-600 rounded text-lg">Button</button>
                        </div>
                    </form>


                    Don't have an account? <Link className="text-blue-800" href="/register">Register</Link>

                </div>
            </div>
        </section>
    )
}