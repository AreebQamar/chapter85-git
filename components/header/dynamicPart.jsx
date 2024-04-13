"use client"
import { useState, useEffect } from 'react';

import CategoryList from "./categoryList.jsx";
import Link from 'next/link.js';

async function fetchCategories() {

    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/categories`, { cache: "no-store" })
    const data = await response.json();
    return data.categories
}

export default function DynamicPart() {

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        // Use an async function to fetch categories and update state
        async function fetchData() {
            const data = await fetchCategories();
            setCategories(data);
        }

        fetchData();
    }, []);

    const [showList, setSetShowList] = useState(false);

    let delayTimer;

    const handleShowList = () => {
        setSetShowList(true);
        clearTimeout(delayTimer);
    };
    const handleCloseList = () => {
        setSetShowList(false);
    }




    return (
        <div className="relative text-base container mx-auto flex justify-center space-x-4">
            <button onClick={handleShowList} className='hover:underline'>
                Categories
            </button>
            {
                showList && <CategoryList categories={categories} handleCloseList={handleCloseList} handleShowList={handleShowList} />
            }
            <Link href="/shopAll" className='hover:underline'>Shop All</Link>
            <Link href="/about-us" className='hover:underline'>About Us</Link>
        </div>
    )
}