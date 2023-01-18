import { createContext } from "react";
import { useProduct } from "../hooks/useProduct";
import { ProductContextProps } from "../interfaces/interfaces";


export const ProductContext = createContext({} as ProductContextProps ); 

const { Provider } = ProductContext; // Proveedor de informacion


interface Props{
    children?: any,
    product?: any,
    className?: string,
    style?: any,
    onChange?: any,
    value?: any,
}

const KitchenProvider = ({ children, product, className, style, onChange, value }: Props ) => {
    
    const {counter, increaseBy, changeProductState } = useProduct( {onChange, product, value} )

    return (
        <Provider value={{
            counter,
            increaseBy,
            product,
            changeProductState,
        }}>
            {children}
        </Provider>
    )
}

export default  KitchenProvider