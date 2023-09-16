
"use client"

import { useEffect, useState } from "react";

import axios from "axios";




export default function PhoneVerifier({ phone, setIsPhoneVerified }) {

    const [OTP, setOTP] = useState("");
    const [phoneOTP_Orignal, setPhoneOTP_Orignal] = useState("");

    const [Disable_Verify_OTP_Button, setDisable_Verify_OTP_Button] = useState(true);

    const [time, setTime] = useState(0);


    const sendOTP = async () => {

        const randomNumber = Math.floor(Math.random() * 9000) + 1000
        setPhoneOTP_Orignal(randomNumber);

        //console.log("phone OTP: ", randomNumber);
        await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/sms`, {
            OTP: randomNumber,
            phone
        });

    }

    const handleVerifyOTP = () => {
        //console.log("OTP: ", OTP, phoneOTP_Orignal);
        if (phoneOTP_Orignal === Number(OTP)) {
            console.log("correct");
            setIsPhoneVerified(1);
            //setDisableEveryThing(false);
        }
        else
            console.log("in correct");
    }

    const handleOTPInput = (e) => {
        setOTP(e.target.value);
        if (e.target.value.length == 4) {
            setDisable_Verify_OTP_Button(false);
        }
        else {
            setDisable_Verify_OTP_Button(true);

        }
    }



    useEffect(() => {
        sendOTP();
    }, []);

    return (
        <div className="fixed inset-0 flex items-center justify-center">


            <div className="bg-cyan-950 p-6 w-1/2 flex flex-col mx-auto rounded-xl border-2 border-slate-800" >

                <div className="m-1">
                    <label htmlFor="OTP" className="leading-7 text-sm text-gray-400">Verify Phone</label>
                    <input type="OTP" id="OTP" name="OTP" placeholder="OTP"

                        className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-orange-500 focus:bg-gray-900 focus:ring-2 focus:ring-orange-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"

                        value={OTP}
                        onChange={handleOTPInput} />
                </div>


                <button className="w-1/5 m-2 py-2 border border-orange-950 rounded bg-orange-700 hover:bg-orange-800 drop-shadow-xl disabled:bg-slate-800"
                    disabled={Disable_Verify_OTP_Button}
                    onClick={handleVerifyOTP}
                >
                    verify
                </button>

            </div >
        </div >
    )
}