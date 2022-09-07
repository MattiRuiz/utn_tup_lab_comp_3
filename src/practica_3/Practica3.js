import { useState } from "react";
import InputEditable from "./InputEditable";

export default function Practica3() {
  const array = [];
  const [infoInput, setInfoInput] = useState("");
  const [valueArray, setValueArray] = useState(array);

  const handlerInput = (event) => {
    setInfoInput(event.target.value);
  };

  const handlerAddArray = () => {
    if (infoInput) {
      setValueArray([infoInput, ...valueArray]);
    }
    setInfoInput("");
  };

  const itemParseado = (item, index) => {
    if (Math.trunc(item) % 2 === 0) {
      return (
        <li key={index}>
          <strong>Par:</strong> {Math.trunc(item)}
          <button type="button" onClick={borrarItem.bind(null, index)}>
            Borrar
          </button>
        </li>
      );
    } else {
      return (
        <li key={index}>
          <strong>Impar:</strong> {Math.trunc(item)}
          <button type="button" onClick={borrarItem.bind(null, index)}>
            Borrar
          </button>
        </li>
      );
    }
  };

  /*const borrarElemento = (event) => {
    const deleteElement = event.target.name;
    const newArray = valueArray.filter((item) => item !== deleteElement);
    setValueArray(newArray);
  };*/

  const borrarItem = (index) => {
    let newArray = [...valueArray];
    newArray.splice(index, 1);
    setValueArray(newArray);
  };

  const editItem = (index, newValue) => {
    let newArrayEditable = { ...valueArray };
    newArrayEditable.splice(index, 1, newValue);
    setValueArray(newArrayEditable);
  };

  return (
    <div>
      <h3>Práctica 3</h3>
      <h4>Ingrese información:</h4>
      <form>
        <input type="text" value={infoInput} onChange={handlerInput} />
        <button type="button" onClick={handlerAddArray}>
          Guardar
        </button>
      </form>
      <ul>
        {valueArray.map((item, index) => (
          <li key={index}>
            {parseInt(item) ? (
              itemParseado(item, index)
            ) : (
              <InputEditable
                index={index}
                value={item}
                borrar={borrarItem}
                editar={editItem}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
