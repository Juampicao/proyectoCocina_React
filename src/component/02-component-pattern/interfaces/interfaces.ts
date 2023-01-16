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
export interface Product {
    id: string,
    title: string;
    img?: string;
    price: number
    state: 'preparacion' | 'terminado' | null
    orderNumber: number  | null
}


// Create Context
export interface ProductContextProps{
    counter: number,
    increaseBy: (value: number) => void;
    product: Product

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
    product: Product
    count: number;
}


// Interface ProductCard
export interface ProductInCart extends Product{
    count: number
}