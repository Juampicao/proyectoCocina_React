import randomNumber from "../helpers/randomNumber";
import { Product, ProductOrdered } from "../interfaces/interfaces";

// export class ProductOrderdClass extends Product {
//     id: string;
//     title: string;
//     img?: string | undefined;
//     price: number;
//     state: "preparacion" | "terminado" | null;
//     orderNumber: number | null;

//     constructor(id: string = "", title: string = "", price: number = 0, state : ProductOrdered["state"]) {
//         this.price = price;
//         this.id = id;
//         this.title = title;
//         this.state = state;
//         this.orderNumber = randomNumber(1000,5000)
//     }


//     public changeStateOrder(newState : ProductOrdered["state"]) {
//         return this.state = newState;
//     }

// }


export class ProductOrderdClass extends Product {
   
    state: ProductOrdered["state"];
    orderNumber: number | null;

    constructor(id: string, title : string = "", img: string = "", price: number = 0, ingredients:  string[] = [],  state: ProductOrdered["state"]) {
        super(id, title,img, price, ingredients )

        this.state = state;
        this.orderNumber = randomNumber(1000,5000)
    }


    public changeStateOrder(newState : ProductOrdered["state"]) {
        return this.state = newState;   
    }

}