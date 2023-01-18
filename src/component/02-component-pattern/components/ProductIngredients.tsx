

import { useContext } from "react";
import { CheckBoxComponent } from "../atoms";
import "../styles/custom-styles.css";
import { ProductContext } from "./ProductCardFinal";


export interface IProductIngredientsProps{
    className?: string,
    style?: React.CSSProperties
    ingredients?: any[]
}

//  Product Button
export const ProductIngredients = ({className, style, ingredients} : IProductIngredientsProps) => {
    
    const { product } = useContext(ProductContext)
 
    return (
          <div className={` ${className} productIngredients `}  style={style} >
            <h1 className="font-bold text-center"> Ingredientes </h1>
            
            <CheckBoxComponent checkboxList={product.ingredients}/>
          </div>
    )
}