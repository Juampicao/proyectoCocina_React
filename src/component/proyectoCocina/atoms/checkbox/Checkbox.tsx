import { string } from "yup/lib/locale";
import "./checkbox.css";
import useCheck from "./hooks/useCheck.js";

interface CheckboxProps {
  value1: string,
  value2: string,
  onChange : () => void,
  defaultChecked: any,
}
const Checkbox = ({ value1: string = "",value2: string = "",onChange: () => void,defaultChecked = "" } :  CheckboxProps ) => {
  const { isChecked, changeChecked } = useCheck();
  return (
    <div className="font-bold  ">
      {value1}
      <label className="switch switch200">
        <input
          type="checkbox"
          onChange={onChange}
          defaultChecked={defaultChecked}
        />
        <span className="slider slider200"></span>
      </label>
      {value2}
    </div>
  );
};

export default Checkbox;
