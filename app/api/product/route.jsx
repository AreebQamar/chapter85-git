import Products from "@/models/product";
import { NextResponse } from "next/server";
import db from "@/config/connectToDb"

export async function POST(request) {
  const { productId, title, description, price, imgs, category } = await request.json();

  //  console.log( productId, title, description, price, imgs, category, qty)
  await db.connect();
  await Products.create({ productId, title, description, price, category, imgs });
  return NextResponse.json({ message: "Product Created" }, { status: 201 });
}

export async function GET(request) {

  try {
    // Get the request URL as a string
    const url = request.url;
    // Extract query parameters from the URL
    const queryParams = new URL(url).searchParams;

    const dynamicParams = {};

    // Loop through the query parameters and populate the dynamicParams object
    let limit = undefined;
    queryParams.forEach((value, key) => {
      if (key === 'limit') {
        limit = parseInt(value, 10); // Parse limit as an integer
      }
      else
        dynamicParams[key] = value;
    });

    // console.log(dynamicParams)

    await db.connect();

    // Use category in the database query to filter products
    const products = await Products.find(dynamicParams).limit(limit); // Modify this based on your database query syntax
    // Respond with a JSON containing the filtered products
    return NextResponse.json({ products });
  } catch (error) {
    console.error('Error in GET request:', error);
    // You can customize the error response here if needed
    return NextResponse.error(500, 'Internal Server Error');
  }
}

export async function PUT(request) {
  try {
    const { _id, title, description, price, imgs } = await request.json();
    // console.log( _id, title, description, price, imgs);

    if (!_id || !title || !description || !price || !imgs) {
      return NextResponse.error(404, 'Product not found');
    }

    await db.connect();

    // Find the product by productId and update its details
    const updatedProduct = await Products.findOneAndUpdate({ _id }, {
      title,
      description,
      price,
      imgs,
    });


    return NextResponse.json({ message: 'Product updated' });
  } catch (error) {
    console.error('Error in PUT request:', error);
    return NextResponse.error(500, 'Internal Server Error');
  }
}

export async function DELETE(request) {
  try {
    const { productId } = await request.json();
   
    await db.connect();

    // Find the product by productId and delete it
    const deletedProduct = await Products.findOneAndDelete({ _id: productId });

    if (!deletedProduct) {
      return NextResponse.error(404, 'Product not found');
    }

    return NextResponse.json({ message: 'Product deleted' });
  } catch (error) {
    console.error('Error in DELETE request:', error);
    return NextResponse.error(500, 'Internal Server Error');
  }
}
