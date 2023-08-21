import React, { useState } from 'react';

import Image from 'next/image';

import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai";


const ImageViewer = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleNext = () => {
        if (currentIndex < images.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePreviewClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="flex flex-col items-center">
            <div className="mb-4">
                <div className="relative">

                    <Image className="w-full h-64 object-cover object-center rounded"
                        src={images[currentIndex]}
                        alt={`Image ${currentIndex + 1}`}
                        width={1920}
                        height={1080}
                    />
                    {/* <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} /> */}


                <button
                    onClick={handlePrevious}
                    disabled={currentIndex === 0}
                    className="p-1 disabled:hidden bg-dark absolute top-32 left-0" 
                >
                    <AiOutlineLeft />
                </button>
                <button
                    onClick={handleNext}
                    disabled={currentIndex === images.length - 1}
                    className="p-1 disabled:hidden bg-dark absolute top-32 right-0"
                >
                    <AiOutlineRight />
                </button>
            </div>
            </div>
            <div className="flex space-x-4">
                {images.map((imageUrl, index) => (
                    <div
                        key={index}
                        className={`border-2 rounded ${index === currentIndex ? 'border-blue-500' : 'border-gray-300'
                            }`}
                        onClick={() => handlePreviewClick(index)} // Handle click on preview
                    >
                        <Image className="h-10 w-full cursor-pointer object-cover object-center rounded"
                            src={imageUrl}
                            alt={`Image ${index + 1}`}
                            width={10}
                            height={10}
                        />
                        {/* <img src={imageUrl} alt={`Image ${index + 1}`} className="h-16 cursor-pointer" /> */}
                    </div>
                ))}
            </div>
        </div>
    );


};

export default ImageViewer;
