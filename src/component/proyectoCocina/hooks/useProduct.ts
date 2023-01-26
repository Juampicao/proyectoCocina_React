import { useEffect, useState } from "react"
import { changeProductStateProps, onChangeArgs, Product, ProductOrdered } from "../interfaces/interfaces"

interface useProductArgs {
    product: Product  | ProductOrdered
    onChange?: (args: onChangeArgs) => void,
    value?: number
}


export const useProduct = ( {onChange, product,value = 0} : useProductArgs) => {
 
    const [counter, setCounter] = useState(value)

    const increaseBy = (value: number) => {
        
        const newValue = Math.max(counter + value, 0)

        setCounter(newValue)
        
        // If exists, emit.
        onChange && onChange({count: newValue, product});
    }

    function changeProductState(type: changeProductStateProps["type"], product: ProductOrdered) {
        
        if (type === "back") {
            if (product.state === "disponible") {
             product.changeStateOrder("disponible")
            } else if (product.state === "pagar") {
                product.changeStateOrder("disponible")
            } else if (product.state === "preparacion") {
                product.changeStateOrder("pagar");
            } else if (product.state === "terminado") {
                product.changeStateOrder("preparacion");
            }
        } else if (type === "next") {

            if (product.state === "disponible") {
                product.changeStateOrder("pagar")
            } else if (product.state === "pagar") {
                product.changeStateOrder("preparacion")
            } else if (product.state === "preparacion") {
                product.changeStateOrder("terminado");
            } else if (product.state === "terminado") {
                product.changeStateOrder("disponible");
            }
        }

        // const newValue = Math.max(counter + value, 0)

        // setCounter(newValue)
        
        // If exists, emit.
        onChange && onChange({count: counter, product});
    }


    // Todo agregar el product.state
    useEffect(() => {
      setCounter(value)
    // }, [value, product.state]) 
    }, [value])
    

    return {counter, increaseBy, changeProductState}

}


