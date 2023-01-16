import ProductCardFinal, { ProductButtons, ProductPrice, ProductTitle } from "../components"
import { products } from "../data/products"
import { useShoppingCart } from "../hooks/useShoppingCart"

const Caja = () => {

   const { shoppingCart, onProductCountChange}  = useShoppingCart()

    return (
      <>
        <h1> Caja </h1>
        <hr />
        <div style={({display: "flex", flexDirection: "row", flexWrap: "wrap" })}>
                                
            {products?.map(product => (
    
                <ProductCardFinal
                className="bg-dark text-white"
                key={product.id}
                product={product}
                onChange={onProductCountChange}
                value={ shoppingCart[product.id]?.count || 0 }
                >
                    {/* <ProductImage className="custom-image"/> */}
                    <ProductPrice />
                    <ProductTitle  className="text-white bg-dark" /> 
                    <ProductButtons className="custom-buttons" />
                </ProductCardFinal>
            ))}      
        </div>
        </>
  )
}

export default Caja