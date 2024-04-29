import DisplayProductDetails from "@/components/productDisplay/productDetails";


export default function ProductDetailPage({params:{productId}}){
    return(
        <DisplayProductDetails id ={productId}/>
    )
}