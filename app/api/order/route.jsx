import Order from "@/models/order";
import { NextResponse } from "next/server";
import db from "@/config/connectToDb"

export async function POST(request) {
  const { products, status,  email, phone, province, city, address } = await request.json();
  //console.log("req: ", products, status,  email, phone, province, city, address);
  await db.connect();
  await Order.create({ products, status,  email, phone, province, city, address  });
  return NextResponse.json({ message: "Order Created" }, { status: 201 });
}

export async function GET() {
  await db.connect();
  const Orders = await Order.find();
  return NextResponse.json({ Orders });
}

// export async function DELETE(request) {
//   const email = request.nextUrl.searchParams.get("email");
//   await db.connect();
//   await User.findByIdAndDelete(email);
//   return NextResponse.json({ message: "user deleted" }, { status: 200 });
// }