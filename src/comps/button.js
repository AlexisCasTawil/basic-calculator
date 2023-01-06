import React from 'react';
import "../styles/button.css"

export default function Button(props) {

  const esOperador = value => { //Analiza el tipo de dato
    return isNaN(value) && (value !== "." & value !== "=");
  };

  return (  //className variable usando operador ternario, props.children para pasar el valor del botón
    <div className={`button-container ${esOperador(props.children) ? "operador" : null}`.trimEnd()}
      onClick={() => props.clicHandler(props.children)}>
      {props.children}
    </div>
  )
};