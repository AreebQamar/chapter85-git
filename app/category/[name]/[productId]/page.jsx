import DisplayProductDetails from "@/components/productDisplay/displayProductDetails"

export default function ProductDetailPage({params:{productId}}){
    return(
        <DisplayProductDetails id ={productId}/>
    )
}