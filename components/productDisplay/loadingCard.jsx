import Image from "next/image";


export default function LoadingDisplayCard() {
    return (
        <div className="mr-10 mb-10">
            <div className="shadow-xl hover:shadow-xl transform hover:scale-105 transition-transform duration-500 ease-in-out">
                <div className="w-72"> {/* Adjust the width and height as needed */}

                    <div className="flex justify-center items-center my-20">
                        <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
                    </div>
                    {/* <Image
                        src="/android-chrome-512x512.png"
                        alt="Alternate Image"
                        height={600}
                        width={600}
                    /> */}

                    <div className="bg-slate-100 p-4">
                        <h3 className="flex justify-start text-gray-500 text-xs tracking-widest title-font mb-1">
                            Category
                        </h3>
                        <h2 className="flex justify-start text-gray-900 title-font text-lg font-medium">
                            Title
                        </h2>
                        <p className="flex justify-start mt-1">PKR price</p>
                    </div>
                </div>
            </div>
        </div>
    );
};