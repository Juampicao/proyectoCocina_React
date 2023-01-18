import { useState } from "react"
import { Product, ProductInCart, ProductOrdered } from "../interfaces/interfaces"

export const useShoppingCart = () => {
    
    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({})
    
    const [pedidosDisponible, setPedidosDisponible] = useState< Product[] >([])
    const [pedidosPagar, setPedidosPagar] = useState< Product[] >([])
    const [pedidosPreparacion, setPedidosPreparacion] = useState< Product[] >([])
    const [pedidosTerminados, setPedidosTerminados] = useState< Product[] >([])
    

    interface onProductCountChangeProps{
        count: number,
        product: ProductOrdered,
        state?: ProductOrdered["state"];
    }

    
    const onProductCountChange = ({count, product, state} : onProductCountChangeProps) => {

        console.log("[onProductCountChangeFn] Count:", count, product)

        setShoppingCart(oldShoppingCart => {

            if (count === 0) {
                
                const { [product.id] : toDelete , ...rest} = oldShoppingCart

                console.log({toDelete})
                return { ...rest }
            }
            
            if (product.state === "disponible") {
                setPedidosDisponible(oldProducts => [...oldProducts, product])
                let pedidosTerminadosNew = pedidosTerminados.filter((product) =>  product.state === "terminados")
                setPedidosTerminados(pedidosTerminadosNew);
                let pedidosPagarNew = pedidosPagar.filter((product) =>  product.state === "pagar")
                setPedidosPagar(pedidosPagarNew);
            }

            if (product.state === "pagar") {
                setPedidosPagar(oldProducts => [...oldProducts, product])
                let pedidosPreparacionNew = pedidosPreparacion.filter((product) =>  product.state === "preparacion")
                setPedidosPreparacion(pedidosPreparacionNew);
            }

            if (product.state === "preparacion") {
                setPedidosPreparacion(oldProducts => [...oldProducts, product])
                let pedidosPagarNew = pedidosPagar.filter((product) =>  product.state === "pagar")
                setPedidosPagar(pedidosPagarNew);
                let pedidosTerminadosNew = pedidosTerminados.filter((product) =>  product.state === "terminados")
                setPedidosTerminados(pedidosTerminadosNew);
            }

            
            if (product.state === "terminado") {
                setPedidosTerminados(oldProducts => [...oldProducts, product])
                let pedidosPreparacionNew = pedidosPreparacion.filter((product) =>  product.state === "preparacion")
                setPedidosPreparacion(pedidosPreparacionNew);

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
        pedidosDisponible,
        pedidosPagar,
        pedidosPreparacion,
        pedidosTerminados,
    }
}
