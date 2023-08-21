import Product from "@/models/product";
import { NextResponse } from "next/server";
import db from "@/config/connectToDb"

export async function POST(request) {
  const { productId, title, description, price, imgs, catagory, qty, varients} = await request.json();

  await db.connect();
  await Product.create({ productId, title, description, price, imgs, catagory, qty, varients});
  return NextResponse.json({ message: "Product Created" }, { status: 201 });
}

export async function GET(request) {
  console.log("api says: ", request);

  //const { catagory } = request.query;

  //console.log(catagory);
  await db.connect();
  const Products = await Product.find();
  return NextResponse.json({ Products });
}

// export async function DELETE(request) {
//   const email = request.nextUrl.searchParams.get("email");
//   await db.connect();
//   await Product.findByIdAndDelete(email);
//   return NextResponse.json({ message: "user deleted" }, { status: 200 });
// }