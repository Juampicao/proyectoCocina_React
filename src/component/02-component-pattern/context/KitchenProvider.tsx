import { createContext } from "react";
import { useKitchenCart } from "../hooks/useKitchenCart";
import { useProduct } from "../hooks/useProduct";
import { Product } from "../interfaces/interfaces";

interface KitchenContextProps{
    pedidosPagar: Product[],
    pedidosDisponible : Product[],
    pedidosPreparacion: Product[],
    pedidosTerminados: Product[],
    kitchenCart: any,
    onProductCountChange: any
    [x: string]: any;
}

export const KitchenContext = createContext({} as KitchenContextProps ); 

const { Provider } = KitchenContext; // Proveedor de informacion


interface Props{
    children?: any,
    product?: any,
    className?: string,
    style?: any,
    onChange?: any,
    value?: any,
}

// const ProductExample3 = new ProductOrderdClass("3", "Ñoquis", "./coffee-mug.png", 980, ["Queso Rayado", "Salsa Bolognesa"], "disponible")


const KitchenProvider = ({ children, product, className, style, onChange, value }: Props ) => {
    

    const {counter, increaseBy, changeProductState } = useProduct( {onChange, product, value} )

    const { kitchenCart,
        onProductCountChange,
        pedidosDisponible,
        pedidosPagar,
        pedidosPreparacion,
        pedidosTerminados,
        pedidosTerminadosStorage,
    } = useKitchenCart()
    
    return (
        <Provider  value={{
            counter,
            increaseBy,
            product,
            changeProductState,
            kitchenCart,
            onProductCountChange,
            pedidosDisponible,
            pedidosPagar,
            pedidosPreparacion,
            pedidosTerminados,
            pedidosTerminadosStorage,
        }}>
            {children}
        </Provider>
    )
}

export default  KitchenProvider