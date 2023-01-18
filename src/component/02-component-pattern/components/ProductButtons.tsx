import { useContext } from "react";
import "../styles/custom-styles.css";
import { ProductContext } from "./ProductCardFinal";


export interface IProductButtonsProps{
    className?: string,
    style?: React.CSSProperties
}
//  Product Button
export const ProductButtons = ({className, style} : IProductButtonsProps) => {
    
    const { increaseBy, counter, product, changeProductState } = useContext(ProductContext)
    
    return (
        <div className="parentProductButtons">

          <div className={` ${className} productButtons`}  style={style} >
            <button  onClick={() =>  increaseBy(-1)} >
                -
            </button>
            <div >
                {counter}
            </div>
            <button onClick={() => increaseBy(+1)} >
                  +
            </button>
             
            {/* <button onClick={() => { console.log(product.state), changeProductState("back",product) }} >
                Back
            </button>
               <button onClick={() => { console.log(product.state), changeProductState("next",product) }} >
               Next 
            </button>
             */}
            </div>
        </div>
            
    )
}

// <button  onClick={() => { console.log(product.state),changeProductState( "back" ,product), increaseBy(1)}} >
//             -
//         </button>
//         <div >
//             {counter}
//         </div>
//         <button onClick={() => { console.log(product.state),changeProductState("next",product), increaseBy(+1)}} >
//               +
//         </button>