
import { NextResponse } from "next/server";


const accountSid = process.env.NEXT_PUBLIC_SMS_ACCOUNT_SID;
const authToken = process.env.NEXT_PUBLIC_SMS_AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);


export async function POST(req) {


    const { OTP, phone } = await req.json();
    console.log("SMS api: ", OTP, phone);

    try {
        client.messages.create({
            body: `\nfrom: Chapter-85,\nOTP for you phone number verification.\nNever share it with anyone.\n${OTP}`,
            from: '+12569603476',
            to: phone
        });
        return NextResponse.json({ message: "SMS Sent" }, { status: 201 });

    } catch (error) {
        console.log(error)
    }

}