

import { useContext } from "react";
import "../styles/custom-styles.css";
import { ProductContext } from "./ProductCardFinal";


export interface IProductIngredientsListProps{
    className?: string,
    style?: React.CSSProperties
    ingredients?: any[]
}

//  Product Button
export const ProductIngredientsList = ({className, style, ingredients} : IProductIngredientsListProps) => {
    
    const { product } = useContext(ProductContext)
 
    return (
          <div className={` ${className} productIngredients `}  style={style} >
            <h1 className="font-bold text-center"> Ingredientes </h1>
                {product.ingredients ? 
                    product.ingredients.map(((ingredient) => {
                        return (
                            <>
                            <ul>
                                <li>
                                    {ingredient}
                                </li>
                            </ul>
                            </>
                        )
                    }))
                    : 
                    ""
                }
            
          </div>
    )
}