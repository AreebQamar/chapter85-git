"use client"

import React, { useState, useEffect } from 'react';
import ADMIN_LIST from "@/admins.js";
import axios from 'axios';

export default function CategoriesPage() {
  const admin_emails = ADMIN_LIST
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');

  const fetchCategories = async () => {

    const response = await fetch('/api/categories');
    const data = await response.json();
    setCategories(data.categories);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleAddCategory = async () => {
    if (newCategory) {
      await fetch('/api/categories', {
        method: 'POST',
        body: JSON.stringify({ name: newCategory }),
      });
      setNewCategory('');
      fetchCategories();
    }
  };

  const handleDeleteCategory = async (categoryId) => {

    try {
      await axios.delete(`/api/categories?_id=${categoryId}`);
      fetchCategories();
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  return (
    <>

      <h1 className="text-2xl font-bold mb-4">Manage Categories</h1>

      {/* Input for Adding a New Category */}
      <div className="flex items-center space-x-2 mb-4">
        <input
          type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          className="border border-gray-300 rounded-lg py-2 px-4 w-1/2"
          placeholder="New Category Name"
        />
        <button
          onClick={handleAddCategory}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg py-2 px-4"
        >
          Add Category
        </button>
      </div>

      {/* List of Categories */}
      <ul className="space-y-2">
        {categories.map((category) => (
          <li
            key={category._id}
            className="flex items-center justify-between bg-gray-100 p-4 rounded-lg"
          >
            <span className="text-lg">{category.name}</span>
            <div className="space-x-2">
              <button
                onClick={() => handleDeleteCategory(category._id)}
                className="text-red-500 hover:underline"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

    </>
  );
}
