import { useState } from "react";

export default function Practica4() {
  const initialValue = Math.round(Math.random());
  const [input1Value, setInput1Value] = useState(initialValue);
  const [checkboxValue, setCheckboxValue] = useState(0);
  const [selectValue, setSelectValue] = useState();

  const handdlerInput1Value = (event) => {
    event.target.value === "1" ? setInput1Value(1) : setInput1Value(0);
  };

  const handdlerCheckbox = (event) => {
    event.target.checked ? setCheckboxValue(1) : setCheckboxValue(0);
  };

  const handdlerSelect = (event) => {
    setSelectValue(event.target.value);
  };

  return (
    <div>
      <div>
        <label for="input1">Entrada 1: </label>
        <input
          id="input1"
          type="number"
          value={input1Value}
          onChange={handdlerInput1Value}
          min="0"
          max="1"
        />
      </div>
      <div>
        <label>Entrada 2: </label>
        <input
          type="checkbox"
          value={checkboxValue}
          onChange={handdlerCheckbox}
        />
      </div>
      <div>
        <label for="logic-gate">Compuerta lógica: </label>
        <select id="logic-gate" onChange={handdlerSelect}>
          <option value="or">OR</option>
          <option value="and">AND</option>
          <option value="nand">NAND</option>
          <option value="nor">NOR</option>
          <option value="xor">XOR</option>
        </select>
      </div>
    </div>
  );
}
