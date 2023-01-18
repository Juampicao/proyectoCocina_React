import { ReactElement } from "react";
import { IProductButtonsProps } from "../components/ProductButtons";
import { IProductButtonsStateProps } from "../components/ProductButtonsState";
import { IProductImageProps } from "../components/ProductImage";
import { IProductIngredientsProps } from "../components/ProductIngredients";
import { IProductPriceProps } from "../components/ProductPrice";
import { IProductStateProps } from "../components/ProductState";
import { IProductTitleProps } from "../components/ProductTitle";



// Props  ProductCard
export interface ProductCardProps{
    product: Product  | ProductOrdered
    children?: ReactElement | ReactElement[]
    className?: string
    style?: React.CSSProperties
    onChange?: (args: onChangeArgs) => void;
    value?: number;
}

// Interfaz Product State
export interface IProductState{
    state : 'preparacion' | 'terminado' | null
}


// Interfaz Product
// export interface Product {
//     id: string,
//     title: string;
//     img?: string;
//     price: number
//     [x: string]: any; 
//     // state: 'preparacion' | 'terminado' | null
//     // orderNumber: number  | null
// }

export class Product {
    id: string;
    title: string;
    img?: string;
    price: number;
    ingredients: string[]
    [x: string]: any; 

    constructor(id: string = "", title: string = "", img: string = "", price: number = 0, ingredients : string[] = []) {
        this.id = id;
        this.title = title,
        this.img = img,
        this.price = price,
        this.ingredients = ingredients;    
    }
}

export interface ProductOrdered  extends Product{
    changeStateOrder: (newState: ProductOrdered["state"]) => void; 
    state:  "disponible"| "pagar" | 'preparacion' | 'terminado' 
    orderNumber: number  | null
}


export interface changeProductStateProps{
    type:  "back"| "next"
}
// Create Context
export interface ProductContextProps{
    counter: number,
    increaseBy: (value: number) => void;
    product: ProductOrdered
    changeProductState: (type: changeProductStateProps["type"], product: ProductOrdered) => void;
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps ):JSX.Element,
    Title: (Props: IProductTitleProps ) => JSX.Element,
    Image: ( Props: IProductImageProps )=> JSX.Element,
    Buttons: (Props: IProductButtonsProps) => JSX.Element
    Price: (Props: IProductPriceProps) => JSX.Element
    State : (Props: IProductStateProps) => JSX.Element
    Ingredients: (Props: IProductIngredientsProps) => JSX.Element;
    ChangeState: (Props: IProductButtonsStateProps) => JSX.Element
    
}

// OnChange Args to ProductCardFinal
export interface onChangeArgs{
    product: ProductOrdered
    count: number;
}


// Interface ProductCard
export interface ProductInCart extends Product{
    count: number
}