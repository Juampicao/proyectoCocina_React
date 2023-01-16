import { useContext } from "react";
import { Product } from "../interfaces/interfaces";
import { ProductContext } from "./ProductCardFinal";


export interface IProductStateProps{
    className?: string,
    style?: React.CSSProperties
    state?: Product["state"]
}

//  Product Button
export const ProductState = ({className, style, state} : IProductStateProps) => {
    
    const { product } = useContext(ProductContext)
    
    return (
          <div className={`text-center text-black  bg-red-300 capitalize ${className} `}  style={style} >
            
                 {state ? state : product.state}

          </div>
    )
}