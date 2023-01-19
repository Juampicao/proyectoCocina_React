import { useEffect } from 'react';
import { Contenedor, Header } from '../atoms';
import { ProductButtonsState, ProductCardFinal, ProductPrice, ProductState, ProductTitle } from "../components";
import { CustomLogger } from '../helpers/CustomLogger';
import useKitchenProvider from '../hooks/useKitchenProvider';

const customLogger = new CustomLogger(); 

export const Caja = () => {

  //? Hook Local
  //  const { kitchenCart, onProductCountChange, pedidosPagar, pedidosDisponible, pedidosTerminados, pedidosPreparacion}  = useKitchenCart()

  //? Context
  const { pedidosPagar, onProductCountChange, kitchenCart } = useKitchenProvider()

  useEffect(() => {
    customLogger.logDebug("Caja.jsx, pedidosPagar:", pedidosPagar)
    // customLogger.logDebug("Caja.jsx, kitchenCart:", kitchenCart)
  }, [])
  
  return (
    <>
  
      <Contenedor className=''>
            <Header title='Caja'/>
            {pedidosPagar?.map(product => (

                <ProductCardFinal
                    className="bg-red-900 "
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
      </Contenedor>
      
    </>
  )
}



