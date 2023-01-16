import { useContext } from "react";
import { ProductContext } from "./ProductCardFinal";


export interface IProductPriceProps{
    className?: string,
    style?: React.CSSProperties
    price?: number
}

//  Product Button
export const ProductPrice = ({className, style, price} : IProductPriceProps) => {
    
    const { product } = useContext(ProductContext)
    
    return (
          <div className={`text-center text-black  bg-green-300 ${className} `}  style={style} >
            <h1>
                $ {price ? price : product.price}

            </h1>
          </div>
    )
}