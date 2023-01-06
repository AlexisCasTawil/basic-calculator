import React from "react";
import "../styles/clear.css";

const ClearButtom = (props) => (
  <div  //Se debe agregar clearHandler como propiedad del botón
    className="clear-button"
    onClick={props.clearHandler}>
    {props.children}
  </div>
);

export default ClearButtom;