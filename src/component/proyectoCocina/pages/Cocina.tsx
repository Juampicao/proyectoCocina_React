import { useEffect } from "react";
import { Contenedor, Header } from '../atoms';
import { ProductButtonsState, ProductCardFinal, ProductState, ProductTitle } from "../components";
import { ProductIngredientsList } from "../components/ProductIngredientsList";
import useKitchenProvider from "../hooks/useKitchenProvider";

export const Cocina = () => {

  //? Hook Local
  // const { kitchenCart, onProductCountChange, pedidosPreparacion } = useKitchenCart()
 
  //? Context
  const { kitchenCart, onProductCountChange , pedidosPreparacion} = useKitchenProvider()
    
    useEffect(() => {
      console.log("Cambio pedidos en preparacion" , pedidosPreparacion)
    }, [pedidosPreparacion])
    

    return ( 
        <>
          <Contenedor className=''>
            <Header title='Cocina'/>
              {pedidosPreparacion?.map(product  => (
                    
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
            </Contenedor>
      </>
  )
}