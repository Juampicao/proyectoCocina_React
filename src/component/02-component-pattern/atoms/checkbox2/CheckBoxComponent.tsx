import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../components/ProductCardFinal";


export const CheckBoxComponent = ({checkboxList} : {checkboxList : string[]}) => {

    const { product } = useContext(ProductContext)

// State with list of all checked item
    const [checked, setChecked] = useState<any[]>([]);
    const [checkList, setCheckList] = useState<string[]>(["Apple", "Banana", "Tea", "Coffee"])

  // Add/Remove checked item from list
  const handleCheck = (event: any) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
      setChecked(updatedList);
  };

  // Generate string of checked items
  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + ", " + item;
      })
    : "";

  // Return classes based on whether item is checked
  var isChecked = (item : any) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";

    useEffect(() => {
      setCheckList(checkboxList)
    }, [checkboxList])
  
    useEffect(() => {
      product.ingredients = checked
    }, [checked])
    
  return (
    <div className="app">
      <div className="checkList">
        <div className="list-container p-2 ">
          {checkList.map((item, index) => (
            <div key={index}>
              <input value={item} type="checkbox" onChange={handleCheck} />
              <span className={` pl-2  ${isChecked(item)}`}>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* <div>
        {`Items Agregados: ${checkedItems}`}
      </div> */}
    </div>
    )
}
    
