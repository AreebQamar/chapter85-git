
import { mailOptions, transporter } from "@/config/nodeMailer";
import { NextResponse } from "next/server";



export async function POST(req) {

    const {OTP, email} =  await req.json();
    // console.log("req: ", OTP, email);
    try {
        await transporter.sendMail({
            ...mailOptions,
            to: email,
            subject: "Email Verification OTP",
            html: `<div>
            <div>Do not share the OTP with any one!</div>
            <h1>OTP</h1>
            <h2>${OTP}</h2>
        </div>`
        });

        return NextResponse.json({ message: "Mail Sent" }, { status: 201 });

    } catch (error) {
        console.log(error)
    }

}