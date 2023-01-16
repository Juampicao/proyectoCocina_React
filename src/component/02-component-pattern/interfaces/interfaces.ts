import { ReactElement } from "react";
import { IProductButtonsProps } from "../components/ProductButtons";
import { IProductImageProps } from "../components/ProductImage";
import { IProductPriceProps } from "../components/ProductPrice";
import { IProductStateProps } from "../components/ProductState";
import { IProductTitleProps } from "../components/ProductTitle";



// Props  ProductCard
export interface ProductCardProps{
    product: Product
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
    price: number
    [x: string]: any; 

    constructor(id: string = "", title: string = "", img: string = "", price: number = 0,) {
        this.id = id;
        this.title = title,
        this.img = img,
        this.price = price
    }
}

export interface ProductOrdered  extends Product{
    
    state: 'preparacion' | 'terminado' | null
    orderNumber: number  | null
}



// Create Context
export interface ProductContextProps{
    counter: number,
    increaseBy: (value: number) => void;
    product: ProductOrdered

}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps ):JSX.Element,
    Title: (Props: IProductTitleProps ) => JSX.Element,
    Image: ( Props: IProductImageProps )=> JSX.Element,
    Buttons: (Props: IProductButtonsProps) => JSX.Element
    Price: (Props: IProductPriceProps) => JSX.Element
    State : (Props: IProductStateProps) => JSX.Element
    
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