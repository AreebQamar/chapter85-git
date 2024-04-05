"use client";

import Link from 'next/link';
import ForbiddenPage from '@/components/ForbiddenPage';
import ADMIN_LIST from "@/admins.js";

export default function AdminPage() {
  const admin_emails = ADMIN_LIST
  
  return (

    <div className="p-4">

      <div>
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <ul className="mt-4 space-y-2">

          <li>
            <div className="">Manage Products</div>
            <ul>

              <li>
                <Link href="/admin/manageProducts/addProducts">
                  <div className="text-blue-500 hover:underline">Add Products</div>
                </Link>
              </li>
              <li>
                <Link href="/admin/manageProducts/editProducts">
                  <div className="text-blue-500 hover:underline">Edit Products</div>
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link href="/admin/manageCategories">
              <div className="text-blue-500 hover:underline">Manage Categories</div>
            </Link>
          </li>

          <li>
            <Link href="/admin/orders">
              <div className="text-blue-500 hover:underline">Manage Orders</div>
            </Link>
          </li>
        </ul>
      </div>

    </div>
  );
}
