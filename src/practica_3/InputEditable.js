import React, { useState } from "react";

function InputEditable({ index, value, borrar, editar }) {
  const [editValue, setEditValue] = useState(value);

  const onEditValue = (event) => {
    console.log("onEditValue: ", event.target.value);
    setEditValue(event.target.value);
  };

  return (
    <>
      {value} : {editValue}
      <input type="text" value={editValue} onChange={onEditValue} />
      <button type="button" onClick={borrar.bind(null, index)}>
        Borrar
      </button>
      <button type="button" onClick={editar.bind(null, index, editValue)}>
        Editar
      </button>
    </>
  );
}

export default InputEditable;
