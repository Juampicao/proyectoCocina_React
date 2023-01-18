import { useContext } from "react";
import { Product } from "../interfaces/interfaces";
import "../styles/custom-styles.css";
import { ProductContext } from "./ProductCardFinal";


export interface IProductStateProps{
    className?: string,
    style?: React.CSSProperties
    state?: Product["state"]
}


const stateProductColor :  any= {
    disponible: `bg-slate-500 `,
    pagar: `bg-red-500`,
    preparacion: `bg-blue-500`,
    terminado: `bg-green-500`,
}


export const ProductState = ({className, style, state} : IProductStateProps) => {
    
    const { product } = useContext(ProductContext)
    
    return (
          <div className={` ${stateProductColor[product.state]}  ${className}  productState `}  style={style} >
            
            {state ? `Estado: ${state}` : <> <p> <span className="font-bold"> Estado: </span> { product.state} </p> </>}

          </div>
    )
}