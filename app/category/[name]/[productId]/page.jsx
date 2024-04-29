import DisplayProductDetails from "@/components/productDisplay/displayProductDetails.jsx";


export default function ProductDetailPage({params:{productId}}){
    return(
        <DisplayProductDetails id ={productId}/>
    )
}