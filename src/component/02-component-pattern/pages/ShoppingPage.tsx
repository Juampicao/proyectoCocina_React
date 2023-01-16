import { useEffect } from "react";
import { ProductButtons, ProductCardFinal, ProductPrice, ProductState, ProductTitle } from "../components";
import { ProductChangeState } from "../components/ProductChangeState";
import { productsList } from "../data/products";
import { useShoppingCart } from "../hooks/useShoppingCart";
import "../styles/custom-styles.css";
import "../styles/styles.module.css";

export const ShoppingPage = () => {
    
   const { shoppingCart, onProductCountChange, pedidosTerminados, pedidosPreparacion}  = useShoppingCart()
    
    
    useEffect(() => {
      console.log("pedidosPreparacion" , pedidosPreparacion)
    }, [pedidosPreparacion])
    

  return (
        <div className="grid gap-y-10 bg-red">
            
            {/* CAJA */}
            <div>
            <h1 className="text-xl text-blue-500 font-bold"> Caja </h1>
            {productsList?.map(product => (
    
                <ProductCardFinal
                    className="bg-dark text-white"
                    key={product.id}
                    product={product}
                    onChange={onProductCountChange}
                    value={ shoppingCart[product.id]?.count || 0 }
                >
                    <ProductPrice />
                    <ProductTitle  className="text-white bg-dark" /> 
                    <ProductButtons className="custom-buttons" />
                </ProductCardFinal>
            ))}              
            </div>
            {/* CAJA */}
              
          
            {/* COCINA */}
            <div className="shopping-cart">
                <h1 className="text-xl text-blue-500 font-bold"> Cocina </h1>

    
                {
                    Object.entries( pedidosPreparacion).map(([key, product]) => (
                        
                        <ProductCardFinal
                            product={product}
                            key={key}
                            className="bg-dark text-white"
                            
                            //Delete or comment onChange & value for not give control to the child. 
                            // onChange={onProductCountChange} 
                            value={product.count}
                        >
                            <ProductState/>
                            <ProductTitle
                                className="text-white bg-dark"
                                title={product.title}
                                subtitle={`Cantidad: ${product.count}`}
                            /> 
                           
                            <ProductChangeState/>
                        </ProductCardFinal>
                    ))
                }
              </div>
             {/* COCINA */}
              
          

             {/* ENTREGAS */}
            <div>
              <h1 className="font-bold text-xl text-blue-500"> Entregas</h1>
              <h2 className="font-bold"> Pedidos Terminados</h2>
             {pedidosTerminados?.map((product) => (
                 <div className="grid grid-cols gap-y-2  border-black border-2 rounded-xl max-w-xs p-3">
                     <div>                       
                      <span className="font-bold"> Pedido:  </span> {product.title}
                     </div>
                
                     <div>                         
                      <span className="font-bold">  Numero Pedido:  </span> {product.orderNumber}
                     </div>
                </div>
             ))}
              </div>
             {/* ENTREGAS */}
            
           
        </div>
  )
}
