import { useEffect } from "react";
import { ProductButtons, ProductCardFinal, ProductPrice, ProductState, ProductTitle } from "../components";
import { ProductButtonsState } from "../components/ProductButtonsState";
import { ProductIngredients } from "../components/ProductIngredients";
import { ProductIngredientsList } from "../components/ProductIngredientsList";
import { productsOrderedList } from "../data/products";
import { useShoppingCart } from "../hooks/useShoppingCart";
import "../styles/custom-styles.css";
import "../styles/styles.module.css";

export const ShoppingPage = () => {
    
   const { shoppingCart, onProductCountChange, pedidosPagar, pedidosDisponible, pedidosTerminados, pedidosPreparacion}  = useShoppingCart()
    


    useEffect(() => {
      console.log("Cambio pedidos en preparacion" , pedidosPreparacion)
    }, [pedidosPreparacion])


  return (
        <div className="grid gap-y-10 bg-red">
            
            {/* Pedidos */}
            <div>
            <h1 className="text-xl text-blue-500 font-bold"> Pedidos </h1>
            {productsOrderedList?.map(product => (
            // {pedidosDisponible?.map(product => (
                <ProductCardFinal
                    className="bg-dark text-white "
                    key={product.id}
                    product={product}
                    onChange={onProductCountChange}
                    value={ shoppingCart[product.id]?.count || 0 }
                >
                    <ProductTitle  /> 
                    <ProductState/>
                    <ProductIngredients />
                    <ProductButtons className="custom-buttons" />
                    <ProductButtonsState/>
                </ProductCardFinal>
            ))}              
            </div>
            {/* Pedidos */}
              
          
            {/* Caja */}
            <div>
                <h1 className="text-xl text-blue-500 font-bold"> Caja </h1>
                {pedidosPagar?.map(product => (

                <ProductCardFinal
                    className="bg-red-900 "
                    key={product.id}
                    product={product}
                    onChange={onProductCountChange}
                    value={ shoppingCart[product.id]?.count || 0 }
                >
                    <ProductPrice />
                    <ProductTitle className="text-white bg-dark" /> 
                    <ProductTitle title={`Pedido: ${product.orderNumber}`} /> 
                    <ProductState/>
                    <ProductButtonsState/>

                </ProductCardFinal>
            ))}              
            </div>
            {/* Caja */}
          
            {/* COCINA */}
            <div className="shopping-cart">
                <h1 className="text-xl text-blue-500 font-bold"> Cocina </h1>
    
                    {pedidosPreparacion?.map(product => (
                        
                        <ProductCardFinal
                            product={product}
                            key={product.id}
                            className="bg-blue-400"
                            //Delete or comment onChange & value for not give control to the child. 
                            onChange={onProductCountChange}
                            value={ shoppingCart[product.id]?.count || 0 }
                        >
                             <ProductTitle
                                className="text-white bg-dark"
                                title={product.title}
                                subtitle={`Cantidad: ${product.count}`}
                                /> 
                            <ProductState/> 
                            <ProductIngredientsList/>
                            <ProductButtonsState/>
                           
                        </ProductCardFinal>
                    ))
                }
              </div>
             {/* COCINA */}
              
          

          {/* ENTREGAS */}
           <div>
            <h1 className="text-xl text-blue-500 font-bold"> Pedidos </h1>
            {pedidosTerminados?.map(product => (

                <ProductCardFinal
                    className="bg-green-600 text-white p-2"
                    key={product.id}
                    product={product}
                    onChange={onProductCountChange}
                    value={ shoppingCart[product.id]?.count || 0 }
                >
                    <ProductTitle title={`Pedido: ${product.orderNumber}`} /> 
                    <ProductTitle />
                    <ProductState />
                    <ProductButtonsState/>
                    
                </ProductCardFinal>
            ))}              
          </div>
          
             {/* ENTREGAS */}
            
          
           
        </div>
  )
}


            {/* <div>
              <h1 className="font-bold text-xl text-blue-500"> Entregas</h1>
              <h2 className="font-bold"> Pedidos Terminados</h2>
             
             {pedidosTerminados?.map((product) => (
                 <div className="grid grid-cols gap-y-2  border-black border-2 rounded-xl max-w-xs p-3">
                     <div>
                      <span className="font-bold text-red-500"> Estado:  </span> {product.state}
                         
                     </div>
                     <div>                       
                      <span className="font-bold"> Pedido:  </span> {product.title}
                     </div>
                
                     <div>                         
                      <span className="font-bold">  Numero Pedido:  </span> {product.orderNumber}
                     </div>
                </div>
             ))}
              </div> */}