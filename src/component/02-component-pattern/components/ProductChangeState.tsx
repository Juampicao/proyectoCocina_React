import { useContext, useEffect, useState } from "react";
import { ProductContext } from "./ProductCardFinal";


export interface IProductChangeStateProps{
    className?: string,
    style?: React.CSSProperties
}

export const ProductChangeState = ({className, style} : IProductChangeStateProps) => {
    
    const { product } = useContext(ProductContext)
    
    const [isChecked, setIsChecked] = useState(false);

    const handleOnChange = () => {
     setIsChecked(!isChecked);
    };


    useEffect(() => {
        isChecked? product.state = "terminado" :  product.state = "preparacion"
    }, [isChecked])
    
    
    return (
          <div>

            <label> Pedido Listo: </label>

            <input
                type="checkbox"
                id="topping"
                name="topping"
                value="Paneer"
                checked={isChecked}
                onChange={handleOnChange}
             />
        </div>
    )
}