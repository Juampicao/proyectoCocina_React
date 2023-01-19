import { useEffect } from "react";
import { CustomLogger } from "../../axios/helpers/CustomLogger";
import { Header } from "../atoms";
import { ProductButtons, ProductCardFinal, ProductPrice, ProductState, ProductTitle } from "../components";
import { ProductButtonsState } from "../components/ProductButtonsState";
import { ProductIngredients } from "../components/ProductIngredients";
import { ProductIngredientsList } from "../components/ProductIngredientsList";
import { productsOrderedList } from "../data/products";
import { useKitchenCart } from "../hooks/useKitchenCart";
import "../styles/custom-styles.css";
import "../styles/styles.module.css";

import Sonido from "../assets/sonidoNotificacion.mp3";
const customLogger = new CustomLogger(); 

export const ShoppingPage = () => {

    function playAudio() {
        new Audio(Sonido).play();
    }

    
   const { kitchenCart, onProductCountChange, pedidosPagar, pedidosDisponible, pedidosTerminados, pedidosPreparacion}  = useKitchenCart()
    
    useEffect(() => {
      customLogger.logDebug("Cambio pedidos en preparacion" , pedidosPreparacion)
    }, [pedidosPreparacion])


    
  return (
    <div className="bg-red-600  grid grid-cols-2 grid-rows-2">
        {/* <button onClick={() => playAudio()}> Sonido</button>   */}
        {/* Pedidos */}
        <div>
            <Header title="Pedidos"/>
            <div className="grid grid-cols-2">
                  
            {productsOrderedList?.map(product => (
            // {pedidosDisponible?.map(product => (
                <ProductCardFinal
                    className="bg-dark text-white  p-3"
                    key={product.id}
                    product={product}
                    onChange={onProductCountChange}
                    value={ kitchenCart[product.id]?.count || 0 }
                >
                    <ProductTitle  /> 
                    <ProductState />
                    <ProductIngredients />
                    <ProductButtons  />
                    <ProductButtonsState />
                </ProductCardFinal>
            ))}             
            </div>      
        </div>
        {/* Pedidos */}
              
          
        {/* Caja */}
          <div>
              <Header title="Caja" />
            <div className="grid grid-cols-2">
                {pedidosPagar?.map(product => (

                <ProductCardFinal
                    className="bg-red-900  p-3"
                    key={product.id}
                    product={product}
                    onChange={onProductCountChange}
                    value={ kitchenCart[product.id]?.count || 0 }
                >
                    <ProductPrice />
                    <ProductTitle className="text-white bg-dark" /> 
                    <ProductTitle title={`Pedido: ${product.orderNumber}`} /> 
                    <ProductState/>
                    <ProductButtonsState/>

                </ProductCardFinal>
            ))}              
            </div>
        </div>
        {/* Caja */}
          
        {/* COCINA */}
          {/* <div className="shopping-cart"> */}
            <div>  
                <Header title="Cocina"/>
                <div className="grid grid-cols-2">
                
                    {pedidosPreparacion?.map(product => (
                        
                        <ProductCardFinal
                            product={product}
                            key={product.id}
                            className="bg-blue-400"
                            //Delete or comment onChange & value for not give control to the child. 
                            onChange={onProductCountChange}
                            value={ kitchenCart[product.id]?.count || 0 }
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
            </div>
        {/* COCINA */}
              
          

        {/* ENTREGAS */}
           <div>
            <Header title="Pedidos"/>
            <div className="grid grid-cols-2">
                    
            {pedidosTerminados?.map(product => (

                <ProductCardFinal
                    className="bg-green-600 text-white p-2"
                    key={product.id}
                    product={product}
                    onChange={onProductCountChange}
                    value={ kitchenCart[product.id]?.count || 0 }
                >
                    <ProductTitle title={`Pedido: ${product.orderNumber}`} /> 
                    <ProductTitle />
                    <ProductState />
                    <ProductButtonsState/>
                    
                </ProductCardFinal>
            ))}              
          </div>
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