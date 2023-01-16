import { useEffect, useState } from "react"
import ProductCardFinal, { ProductButtons, ProductState, ProductTitle } from "../components"
import { useShoppingCart } from "../hooks/useShoppingCart"
import { ProductInCart } from "../interfaces/interfaces"

const Cocina = () => {

   const { shoppingCart, onProductCountChange}  = useShoppingCart()

    const [productList, setProductList] = useState<{ [key: string]: ProductInCart }>()

    useEffect(() => {
        setProductList(shoppingCart)
    }, [shoppingCart])
    
  return (
     <div className="shopping-cart">
                  <h1> Cocina </h1>
                {
                    Object.entries( productList).map(([key, product]) => (
                        
                        <ProductCardFinal
                            product={product}
                            key={key}
                            className="bg-dark text-white"
                            
                            //Delete or comment onChange & value for not give control to the child. 
                            onChange={onProductCountChange} 
                            value={product.count}
                        >
                            <ProductState/>
                            <ProductTitle
                                className="text-white bg-dark"
                                title={product.title}
                                subtitle={`Cantidad: ${product.count}`}
                            /> 
                            <ProductButtons className="custom-buttons"
                            style={{
                                display: "flex",
                                justifyContent: "center"
                            }}
                        />
                        </ProductCardFinal>
                    ))
                }
            </div>
  )
}

export default Cocina