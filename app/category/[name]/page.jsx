import CatagoryPage from "@/components/productDisplay/catagoryPage";

export default function CategoryPage({params:{name}}){
  
    return (
        <CatagoryPage category={name}/>
    )
}