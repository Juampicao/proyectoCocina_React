import { useContext } from "react";
import { ProductContext } from "../context/KitchenProvider";

const useKitchenProvider = () => {
    return useContext(ProductContext);
}

export default useKitchenProvider;