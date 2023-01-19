import { Product } from "../interfaces/interfaces";
import { ProductOrderdClass } from "../models/ProductOrderedClass";

export const product1 = new Product("1", "Hamburguesas", "./coffee-mug.png", 2300,  ["Tomate", "Chedar"])
export const product2 = new Product("2", "Milanesa", "./coffee-mug.png", 1500, ["Jamon", "Barbacoa"])


// export const productOrdered1 = new ProductOrderdClass("1", "Hamburguesas", "./coffee-mug.png", 2300, ["Tomate", "Chedar"] , "preparacion")
// export const productOrdered2 = new ProductOrderdClass("2", "Milanesa", "./coffee-mug.png", 1500, ["Jamon", "Barbacoa"],"terminado" )
// export const productOrdered3 = new ProductOrderdClass("3", "Ñoquis", "./coffee-mug.png", 980, ["Queso Rayado"],"disponible" )
// export const productOrdered4 = new ProductOrderdClass("4", "Empanada", "./coffee-mug.png", 300, ["Aceituna"], "pagar" )


// export const productOrdered1 = new ProductOrderdClass("1", "Hamburguesas", "./coffee-mug.png", 2300, ["Tomate", "Chedar"] , "pagar")
// export const productOrdered2 = new ProductOrderdClass("2", "Milanesa", "./coffee-mug.png", 1500, ["Jamon", "Barbacoa"],"pagar" )
export const productOrdered3 = new ProductOrderdClass("3", "Ñoquis", "./coffee-mug.png", 980, ["Paroisien", "Salsa Bolognesa"],"disponible" )
export const productOrdered4 = new ProductOrderdClass("4", "Empanada", "./coffee-mug.png", 300, ["Carne", "Jamon y Queso"], "disponible" )

export const productsOrderedList: ProductOrderdClass[] = [
    productOrdered3, productOrdered4]

export const productsList: Product[] = [product1, product2]

























// import { Product } from "../interfaces/interfaces";

// export const product1 : Product = {
//     id: "1",
//     title: "Zanahorias",
//     img: "./coffee-mug.png",
//     price: 2300,
//     state: "preparacion",
//     orderNumber: null
// }

// export const product2 : Product = {
//     id: "2",
//     title: "Manzanas",
//     img: "./coffee-mug.png",
//     price: 1500,
//     state: "terminado",
//     orderNumber: 1242,

//     // name: "Hamburguesa", price: 1500, ingredientes: ["Mayonesa", "Lechuga", "Tomate", "Queso"]

// }


// export const products: Product[] = [product1, product2]


