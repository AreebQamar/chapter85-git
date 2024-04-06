import Categories from "@/models/categories";
import { NextResponse } from "next/server";
import db from "@/config/connectToDb"

export async function POST(request) {
  
  const { name } = await request.json();
  // console.log("req: ", name);
  await db.connect();
  await Categories.create({ name });
  return NextResponse.json({ message: "category added" }, { status: 201 });
}

export async function GET() {
  await db.connect();
  const categories = await Categories.find();
  return NextResponse.json({ categories });
}

export async function DELETE(request) {

  const queryParams = new URL(request.url).searchParams;
  const categoryId = queryParams.get('_id');

  if (!categoryId) {
    return NextResponse.json({ message: "Category ID is required" }, { status: 400 });
  }

  await db.connect();
  const category = await Categories.findById(categoryId);

  if (!category) {
    return NextResponse.json({ message: "Category not found" }, { status: 404 });
  }

  await Categories.findByIdAndRemove(categoryId);

  return NextResponse.json({ message: "Category deleted" });
}