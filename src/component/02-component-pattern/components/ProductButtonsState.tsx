import { useContext } from "react";
import "../styles/custom-styles.css";
import { ProductContext } from "./ProductCardFinal";


export interface IProductButtonsStateProps{
    className?: string,
    style?: React.CSSProperties
}
//  Product Button
export const ProductButtonsState = ({className, style} : IProductButtonsStateProps) => {
    
    const {  product, changeProductState } = useContext(ProductContext)
    
    return (
        <div className="parentProductButtonsState">
            {/* {
                product.ingredients.length === 0 && */}
          <div className={` ${className} productButtonsState `}  style={style} >
             <p> Estado: </p>
            <button onClick={() => { console.log(product.state), changeProductState("back",product) }} >
                Back
            </button>
               <button onClick={() => { console.log(product.state), changeProductState("next",product) }} >
               Next 
            </button>
            
                </div>
            {/* } */}
            
        </div>
            
    )
}
