import { useState } from "react"
import { Product, ProductInCart } from "../interfaces/interfaces"

export const useShoppingCart = () => {
    
    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({})
    
    const [pedidosTerminados, setPedidosTerminados] = useState< Product[] >([])
    const [pedidosPreparacion, setPedidosPreparacion] = useState< Product[] >([])
    

    const onProductCountChange = ({count, product} : {count: number, product:Product}) => {

        console.log("[onProductCountChangeFn] Count:", count, product)

        setShoppingCart(oldShoppingCart => {

            if (count === 0) {
                
                const { [product.id] : toDelete , ...rest} = oldShoppingCart

                console.log({toDelete})
                return { ...rest }
            }   
            
            if (product.state === "terminado") {
                setPedidosTerminados(oldProducts => [...oldProducts, product])
            }

            if (product.state === "preparacion") {
                setPedidosPreparacion(oldProducts => [...oldProducts, product])
            }
            return {
                ...oldShoppingCart,
                [ product.id ] : {...product,count}
            }
            
        })

    }



    return {
        shoppingCart,
        onProductCountChange,
        pedidosTerminados,
        pedidosPreparacion
    }
}
