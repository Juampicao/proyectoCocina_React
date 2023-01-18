import { useEffect, useState } from "react";
import { Contenedor, Header } from '../atoms';

import { ProductButtonsState, ProductCardFinal, ProductState, ProductTitle } from "../components";
import { useKitchenCart } from "../hooks/useKitchenCart";

const Entregas = () => {

  const { kitchenCart, onProductCountChange,  pedidosTerminados}  = useKitchenCart()

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
                    value={ kitchenCart[product.id]?.count || 0 }
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