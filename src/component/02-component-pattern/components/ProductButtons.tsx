import { useContext } from "react";
import { ProductContext } from "./ProductCardFinal";

import styles from "../styles/styles.module.css";

export interface IProductButtonsProps{
    className?: string,
    style?: React.CSSProperties
}
//  Product Button
export const ProductButtons = ({className, style} : IProductButtonsProps) => {
    
    const { increaseBy, counter, product } = useContext(ProductContext)

    return (
          <div className={`${styles.buttonsContainer} ${className} `}  style={style} >
              <button className={styles.buttonMinus} onClick={() => increaseBy(-1)} >
                  -
              </button>
              <div className={styles.countLabel}>
                  {counter}
              </div>
                <button className={styles.buttonAdd} onClick={() => increaseBy(+1)} >
                  +
            </button>
            
        </div>
    )
}