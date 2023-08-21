
import Image from "next/image"
import Link from "next/link"

import Product from "@/models/product";
import db from "@/config/connectToDb"

import axios from "axios"

export async function fetchData(catagory) {

    //console.log(catagory);

    await db.connect();
    const Products = await Product.find({catagory: catagory});
    return (Products);
}




export default async function CatagoryPage({catagory}) {
    const data = await fetchData(catagory);


    return (
        <section className=" text-gray-600 body-font">

            <div className="my-5 mx-5 flex flex-wrap justify-center">

                {
                    data.map(product =>
                        <div key = {product.id} className="bg-white my-10 mx-4 w-11/12 lg:w-1/4 md:w-1/3 shadow-2xl">
                            
                            <Link
                                href={`/${catagory}/${product._id}`}>
                                <Image
                                    alt="ecommerce" src={product.imgs[0]}
                                    height={300}
                                    width={150} />
                            </Link>
                            <div className="p-4 bg-slate-100">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{product.catagory}</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">{product.title}</h2>
                                <p className="mt-1">PKR {product.price}</p>
                            
                            </div>
                        </div>
                    )

                }


            </div>

        </section>
    )
}

