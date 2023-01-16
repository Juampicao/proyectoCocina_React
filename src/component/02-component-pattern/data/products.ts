import { Product } from "../interfaces/interfaces";

export const product1 : Product = {
    id: "1",
    title: "Zanahorias",
    img: "./coffee-mug.png",
    price: 2300,
    state: "preparacion",
    orderNumber: null
}

export const product2 : Product = {
    id: "2",
    title: "Manzanas",
    img: "./coffee-mug.png",
    price: 1500,
    state: "terminado",
    orderNumber: 1242,

    // name: "Hamburguesa", price: 1500, ingredientes: ["Mayonesa", "Lechuga", "Tomate", "Queso"]

}

export const products: Product[] = [product1, product2]


