import { Contenedor, Header } from '../atoms';

import Sonido from "../assets/sonidoNotificacion.mp3";
import { ProductButtonsState, ProductCardFinal, ProductState, ProductTitle } from "../components";
import useKitchenProvider from "../hooks/useKitchenProvider";
import { Product } from '../interfaces/interfaces';

export const Entregas = () => {


  //? Hook Local
  // const { kitchenCart, onProductCountChange,  pedidosTerminados}  = useKitchenCart()

  //? Context
  const { kitchenCart, onProductCountChange , pedidosTerminados} = useKitchenProvider()

  function playAudio() {
      new Audio(Sonido).play();
  }


  return (
      <>
      <Contenedor className=''>
        
            <Header title='Entregas'/>
            {pedidosTerminados?.map((product : Product) => (

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
