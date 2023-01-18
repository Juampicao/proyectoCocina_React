import { useEffect } from "react"
import Contenedor from "../atoms/Contenedor"
import Header from "../atoms/Header"
import ProductCardFinal, { ProductButtonsState, ProductState, ProductTitle } from "../components"
import { ProductIngredientsList } from "../components/ProductIngredientsList"
import { useShoppingCart } from "../hooks/useShoppingCart"

const Cocina = () => {


   const { shoppingCart, onProductCountChange, pedidosPreparacion}  = useShoppingCart()
    
    useEffect(() => {
      console.log("Cambio pedidos en preparacion" , pedidosPreparacion)
    }, [pedidosPreparacion])
    

    return ( 
        <>
          <Contenedor className=''>
            <Header title='Cocina'/>
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
            </Contenedor>
      </>
  )
}

export default Cocina