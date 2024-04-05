import Order from "@/models/order";
import db from "@/config/connectToDb"
import Link from "next/link";


export async function fetchData() {
    //console.log(catagory);
    await db.connect();
    const orders = await Order.find();
    return (orders);
}


export default async function DataTable() {

    const data = await fetchData();
    //console.log(data);

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Data Table</h2>
            <table className="w-full border">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border p-2">#</th>
                        <th className="border p-2">Order ID</th>
                        <th className="border p-2">User ID</th>
                        <th className="border p-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index} className="border">
                            <td className="border p-2">{index + 1}</td>
                            <td className="border p-2">{item.id}</td>
                            <td className="border p-2">{item.email}</td>
                            <td className="border p-2">{item.status}</td>
                            <td className="border p-2"><Link href={`/admin/orders/${item.id}`}
                                className="m-1 p-1 text-sm bg-teal-600 border-slate-950 rounded">Details</Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};


