import { createContext } from "react";
import { useKitchenCart } from "../hooks/useKitchenCart";
import { useProduct } from "../hooks/useProduct";
import { Product } from "../interfaces/interfaces";
import { ProductOrderdClass } from "../models/ProductOrderedClass";

interface KitchenContextProps{
    pedidosPagar: Product[],
    pedidosDisponible : Product[],
    pedidosPreparacion: Product[],
    pedidosTerminados: Product[],
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

const ProductExample3 = new ProductOrderdClass("3", "Ñoquis", "./coffee-mug.png", 980, ["Queso Rayado", "Salsa Bolognesa"], "disponible")


const KitchenProvider = ({ children, product, className, style, onChange, value }: Props ) => {
    
    // const [kitchenCart, setKitchenCart] = useState<{ [key: string]: ProductInCart }>({})
    
    // const [pedidosDisponible, setPedidosDisponible] = useState< ProductOrderdClass[] >([])
    // const [pedidosPagar, setPedidosPagar] = useState< ProductOrderdClass[] >([ProductExample3])
    // const [pedidosPreparacion, setPedidosPreparacion] = useState< ProductOrderdClass[] >([])
    // const [pedidosTerminados, setPedidosTerminados] = useState< ProductOrderdClass[] >([])
    
    const {counter, increaseBy, changeProductState } = useProduct( {onChange, product, value} )

    const { kitchenCart,
        onProductCountChange,
        pedidosDisponible,
        pedidosPagar,
        pedidosPreparacion,
        pedidosTerminados
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
        }}>
            {children}
        </Provider>
    )
}

export default  KitchenProvider