import Contenedor from '../atoms/Contenedor'
import Header from '../atoms/Header'
import ProductCardFinal, { ProductButtons, ProductButtonsState, ProductIngredients, ProductState, ProductTitle } from '../components'
import { productsOrderedList } from '../data/products'
import { useShoppingCart } from '../hooks/useShoppingCart'

const Pedidos = () => {

   const { shoppingCart, onProductCountChange, pedidosDisponible}  = useShoppingCart()

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
                            value={ shoppingCart[product.id]?.count || 0 }
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