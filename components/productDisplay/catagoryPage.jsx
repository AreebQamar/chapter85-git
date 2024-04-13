"use client"

import Link from 'next/link';
import { useState, useEffect } from 'react';
import DisplayCard from './displayCard';


import axios from 'axios';
import LoadingDisplayCard from './loadingCard';

async function fetchProducts(category) {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/product?category=${category}`);
    return response.data.Products;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export default function CategoryPage({ category }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAndSetProducts = async () => {
      const fetchedProducts = await fetchProducts(category);
      setProducts(fetchedProducts);
      setLoading(false);
    };
    
    fetchAndSetProducts();
  }, [category]);

  return (
    <section className="text-gray-600 body-font">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-4 px-10 md:px-10">{category}</h2>
      <div className="flex flex-wrap justify-center space-y-4 space-x-4">
        {
          loading ? (
            Array.from({ length: 10 }).map((_, index) => (
              <LoadingDisplayCard key={index}/>
            ))
          ) : products?.length > 0 ? (
            products.map((product) => (
              <Link href={`/category/${category}/${product._id}`} key={product._id}>
                <DisplayCard product={product} />
              </Link>
            ))
          ) : (
            <p>No products found.</p>
          )
        }
      </div>
    </section>
  );
}
