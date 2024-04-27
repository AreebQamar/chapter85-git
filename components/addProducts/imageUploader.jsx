
"use client"

import Image from "next/image";

import { useEffect, useState } from "react";

// import { AiFillDelete, AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";



const ImageUploader = ({orignalImages, handleSetImages }) => {
    const [selectedImages, setSelectedImages] = useState(orignalImages);

    useEffect(()=>{
        setSelectedImages(orignalImages);
    }, [orignalImages]);
    
    useEffect(()=>{
        
        handleSetImages(selectedImages);

    },[selectedImages]);


    const handleImageChange = (event) => {
        const files = event.target.files;
        const imageArray = [];

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const reader = new FileReader();

            reader.onload = () => {
                imageArray.push(reader.result);
                if (imageArray.length === files.length) {
                    setSelectedImages([...selectedImages, ...imageArray]);
                }
            };

            reader.readAsDataURL(file);
        }
    };

    const handleRemoveImage = (index) => {
        const updatedImages = [...selectedImages];
        updatedImages.splice(index, 1);
        setSelectedImages(updatedImages);

    };

    const handleShiftImageLeft = (index) => {
        if (index > 0) {
            const updatedImages = [...selectedImages];
            const temp = updatedImages[index - 1];
            updatedImages[index - 1] = updatedImages[index];
            updatedImages[index] = temp;
            setSelectedImages(updatedImages);

        }
    };

    const handleShiftImageRight = (index) => {
        if (index < selectedImages.length - 1) {
            const updatedImages = [...selectedImages];
            const temp = updatedImages[index + 1];
            updatedImages[index + 1] = updatedImages[index];
            updatedImages[index] = temp;
            setSelectedImages(updatedImages);
            
        }
    };

    //console.log(selectedImages);
    return (
        <div>
            <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageChange}
            />
            <div className="grid grid-flow-col overflow-auto">

                {
                    selectedImages.map((image, index) => (
                        <div key={index} className="group m-1 grid place-items-center border-2 rounded  hover:scale-105">
                            <img
                                src={image}
                                alt={`Preview ${index}`}
                            />
                            <div className="hidden group-hover:block absolute bottom-0 left-2">
                                <button
                                    className="m-1 p-1 border rounded bg-slate-200 text-red-400 text-sm"
                                    onClick={() => handleRemoveImage(index)}
                                >
                                    {/* <AiFillDelete /> */}
                                    D
                                </button>
                                <button
                                    className="m-1 p-1 border rounded bg-slate-200 text-sm"
                                    onClick={() => handleShiftImageLeft(index)}
                                >
                                    {/* <AiOutlineArrowLeft /> */}
                                    {"<"}
                                </button>
                                <button
                                    className="m-1 p-1 border rounded bg-slate-200 text-sm"
                                    onClick={() => handleShiftImageRight(index)}
                                >
                                    {/* <AiOutlineArrowRight /> */}
                                    {">"}
                                </button>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default ImageUploader;
