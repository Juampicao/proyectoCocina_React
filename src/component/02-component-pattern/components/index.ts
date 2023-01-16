import { ProductCardHOCProps } from "../interfaces/interfaces";
import { ProductCardFinal as ProductCardHOC } from "./ProductCardFinal";

// Imports
import { ProductButtons } from "./ProductButtons";
import { ProductImage } from "./ProductImage";
import { ProductPrice } from "./ProductPrice";
import { ProductState } from "./ProductState";
import { ProductTitle } from "./ProductTitle";

// Exports
export { ProductButtons } from "./ProductButtons";
export { ProductImage } from "./ProductImage";
export { ProductPrice } from "./ProductPrice";
export { ProductState } from "./ProductState";
export { ProductTitle } from "./ProductTitle";


// Asign new attributes to an object
export const ProductCardFinal: ProductCardHOCProps = Object.assign( ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons,
    Price: ProductPrice,
    State: ProductState
})

export default ProductCardFinal;


