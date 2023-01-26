import { Product } from "../interfaces/interfaces";
import { ProductOrderdClass } from "../models/ProductOrderedClass";



export type States = 
    | { type: 'add-product-ordered', payload: { product: Product } }
   

export type KitchenAction = 
    | { type: 'add-product-ordered', payload: { product: Product } }
    | { type: 'delete-product-ordered', payload: { product: Product, index: number } }
    | { type: 'change-state', payload: {index: number,  state: States} }


export function KitchenReducer(state: Product[], action: KitchenAction) {
    switch (action.type) {
        case "add-product-ordered":
            return {
                pedidos: [...state,  { product: action.payload.product}]
            }
        case "delete-product-ordered":
            return {
                pedidos: state.filter((product: Product, index: number) => index !== action.payload.index )
            }
        case "change-state":
            return {
                pedidos: state.map((product: Product, index:number) => index === action.payload.index ? {...product, completed: action.payload.state["state"] } : product  ) 
            }
        default: 
            return state
    }
}


export type ChangeStateAction = 
    | { type: 'pagar', payload: { product: ProductOrderdClass } }
    | { type: 'terminado', payload: { product: Product} }
    | { type: 'preparacion', payload: { product: Product} }


export function ChangeStateReducer(state: Product[], action: ChangeStateAction) {
    switch (action.type) {
        case "pagar":
            return {
                pedidos: [...state,  { product: action.payload.product.changeStateOrder("pagar")}]
            }
        case "terminado":
            return {
                pedidos: state.filter((product: Product, index: number) => index !== action.payload.index )
            }
        case "preparacion":
            return {
                pedidos: state.map((product: Product, index:number) => index === action.payload.index ? {...product, completed: action.payload.state["state"] } : product  ) 
            }
        default: 
            return state
    }
}