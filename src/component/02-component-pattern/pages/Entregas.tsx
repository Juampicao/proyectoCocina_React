import { useEffect, useState } from "react"
import Contenedor from "../atoms/Contenedor"
import Header from "../atoms/Header"
import ProductCardFinal, { ProductButtonsState, ProductState, ProductTitle } from "../components"
import { useShoppingCart } from "../hooks/useShoppingCart"

const Entregas = () => {

  const { shoppingCart, onProductCountChange,  pedidosTerminados}  = useShoppingCart()

  const [pedidosTerminadosLocal, setPedidosTerminadosLocal] = useState<any[]>([])
  useEffect(() => {
    setPedidosTerminadosLocal(pedidosTerminados)
  }, [onProductCountChange])
  
  return (
      <>
       <Contenedor className=''>
            <Header title='Entregas'/>
            {pedidosTerminadosLocal?.map((product : any) => (

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
        </Contenedor>
      </>          
  )
}

export default Entregas