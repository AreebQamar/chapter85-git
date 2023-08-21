import ShoeOrJacketVarientsAdder from "./shoeVarientsAdder";
import VarientsBySizeAdder from "./varientsBYSize";

export default function VarientsAdder({ catagory, handleSetVarients }) {

    return (
        catagory &&
            (catagory === "shoes" || catagory === "jackets") ?
            
            <ShoeOrJacketVarientsAdder handleSetVarients = {handleSetVarients} />
            :
                <VarientsBySizeAdder handleSetVarients = {handleSetVarients}/>
    )

}