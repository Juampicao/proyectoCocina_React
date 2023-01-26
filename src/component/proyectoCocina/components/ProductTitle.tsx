import { useContext } from "react";
import "../styles/custom-styles.css";
import { ProductContext } from "./ProductCardFinal";

export interface IProductTitleProps{
    title?: string,
    subtitle?: string,
    className?: string
    style?: React.CSSProperties

}
// Product Title
export const ProductTitle = ({ title, subtitle, className, style } : IProductTitleProps) => {
    
    const { product } = useContext(ProductContext)

    return (
        <div>
            <h3 className={`  ${className} productTitle  `}
                    style={style}        
                    >
                {title ? title : product.title}
                
            </h3>
            <p> {subtitle? subtitle : ""} </p>
        </div>

    )
}