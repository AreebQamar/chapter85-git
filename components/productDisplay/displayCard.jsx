import Image from "next/image";

export default function DisplayCard({ product }) {

   
    return (
        <div className="mr-10 mb-10">
            <div className="shadow-xl hover:shadow-xl transform hover:scale-105 transition-transform duration-500 ease-in-out">
                    <div className="w-72"> {/* Adjust the width and height as needed */}
                    
                    <Image
                        className="w-full h-72 object-cover"
                        alt={product.title}
                        src={product.imgs[0]}
                        height={600}
                        width={600}
                    />

                    <div className="bg-slate-100 p-4">
                        <h3 className="flex justify-start text-gray-500 text-xs tracking-widest title-font mb-1">
                        {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                        </h3>
                        <h2 className="flex justify-start text-gray-900 title-font text-lg font-medium">
                        {product.title.charAt(0).toUpperCase() + product.title.slice(1)}
                        </h2>
                        <p className="flex justify-start mt-1">PKR {product.price}</p>
                    </div>
                    </div>
            </div>
        </div>
        
    )
}


