import ProductDetailPage from "@/components/productDisplay/productDetailPage"


export default function ShoeProductPage({params: {id}})
{
    return (
        <ProductDetailPage id = {id}/>
    )
}