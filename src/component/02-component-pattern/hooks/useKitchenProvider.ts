import { useContext } from "react";
import { KitchenContext } from "../context/KitchenProvider";

const useKitchenProvider = () => {
    return useContext(KitchenContext);
}

export default useKitchenProvider;