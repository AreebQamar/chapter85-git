import DisplayProductDetails from "@/components/productDisplay/DisplayProductDetails"

export default function ProductDetailPage({params:{productId}}){
    return(
        <DisplayProductDetails id ={productId}/>
    )
}