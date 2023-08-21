import User from "@/models/user";
import { NextResponse } from "next/server";
import db from "@/config/connectToDb"

export async function POST(request) {
  const { name, email, phone, password, role } = await request.json();
  console.log("req: ", name, email, phone, password, role);
  await db.connect();
  await User.create({ name, email, phone, password, role });
  return NextResponse.json({ message: "User Created" }, { status: 201 });
}

export async function PUT(request){
  const {name, email, password} = await request.json();
  console.log("req: ", name, email, password);

  await db.connect();

  await User.findOneAndUpdate({email},
    { $set: { password }}
  )
  return NextResponse.json({ message: "User Updated" }, { status: 201 });
}

export async function GET() {
  await db.connect();
  const Users = await User.find();
  return NextResponse.json({ Users });
}

// export async function DELETE(request) {
//   const email = request.nextUrl.searchParams.get("email");
//   await db.connect();
//   await User.findByIdAndDelete(email);
//   return NextResponse.json({ message: "user deleted" }, { status: 200 });
// }