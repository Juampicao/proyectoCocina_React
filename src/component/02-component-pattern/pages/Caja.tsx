import { useContext, useEffect } from 'react';
import Contenedor from '../atoms/Contenedor';
import Header from '../atoms/Header';
import { ProductButtonsState, ProductCardFinal, ProductState, ProductTitle } from "../components";
import { ProductContext } from '../components/ProductCardFinal';
import { CustomLogger } from '../helpers/customLogger';
import { useShoppingCart } from '../hooks/useShoppingCart';

const customLogger = new CustomLogger(); 

const Caja = () => {

  const { shoppingCart, onProductCountChange, pedidosPagar}  = useShoppingCart()
  
  const { product } = useContext(ProductContext)

  useEffect(() => {
    customLogger.logDebug("Caja.jsx, pedidosPagar:", pedidosPagar)
    customLogger.logDebug("Caja.jsx, shoppingCart:", shoppingCart)

  },[shoppingCart])
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
                    value={ shoppingCart[product.id]?.count || 0 }
                >
                    {/* <ProductPrice /> */}
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

export default Caja