import { Contenedor, Header } from '../atoms';

import ProductCardFinal, { ProductButtons, ProductButtonsState, ProductIngredients, ProductState, ProductTitle } from '../components';
import { productsOrderedList } from '../data/products';
import { useKitchenCart } from '../hooks/useKitchenCart';

const Pedidos = () => {

   const { kitchenCart, onProductCountChange, pedidosDisponible}  = useKitchenCart()

  return (
        <>
          <Contenedor className=''>
            <Header title='Pedidos'/>
                {productsOrderedList?.map(product => (
                    // {pedidosDisponible?.map(product => (
                        <ProductCardFinal
                            className="bg-dark text-white "
                            key={product.id}
                            product={product}
                            onChange={onProductCountChange}
                            value={ kitchenCart[product.id]?.count || 0 }
                        >
                            <ProductTitle  /> 
                            <ProductState/>
                            <ProductIngredients />
                            <ProductButtons className="custom-buttons" />
                            <ProductButtonsState/>
                        </ProductCardFinal>
                ))}         
            </Contenedor>  
        </>
  )
}

export default Pedidos