import { ProductCardHOCProps } from "../interfaces/interfaces";
import { ProductCardFinal as ProductCardHOC } from "./ProductCardFinal";

// Imports
import { ProductButtons } from "./ProductButtons";
import { ProductButtonsState } from "./ProductButtonsState";
import { ProductChangeState } from "./ProductChangeState";
import { ProductImage } from "./ProductImage";
import { ProductIngredients } from "./ProductIngredients";
import { ProductIngredientsList } from "./ProductIngredientsList";
import { ProductPrice } from "./ProductPrice";
import { ProductState } from "./ProductState";
import { ProductTitle } from "./ProductTitle";

// Exports
export { ProductButtons } from "./ProductButtons";
export { ProductButtonsState } from "./ProductButtonsState";
export { ProductChangeState } from "./ProductChangeState";
export { ProductImage } from "./ProductImage";
export { ProductIngredients } from "./ProductIngredients";
export { ProductIngredientsList } from "./ProductIngredientsList";
export { ProductPrice } from "./ProductPrice";
export { ProductState } from "./ProductState";
export { ProductTitle } from "./ProductTitle";


// Asign new attributes to an object
export const ProductCardFinal: ProductCardHOCProps = Object.assign( ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons,
    Price: ProductPrice,
    State: ProductState,
    ChangeState: ProductChangeState,
    Ingredients: ProductIngredients,
    IngredientsList: ProductIngredientsList,
    ButtonChangeState: ProductButtonsState,
})

export default ProductCardFinal;


