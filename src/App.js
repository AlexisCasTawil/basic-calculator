import './App.css';
import Button from './comps/button';
import Screen from './comps/screen';
import ClearButtom from './comps/clear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

export default function App() {
  const [ input, setInput ] = useState("");
  //Función que tomará los valores para usarlos en la operación
  const addInput = value => {
    setInput(input + value);
  };

  const calcResult = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("por favor ingrese valores correctos");
    }
  };

  return (
    <div className="App">
      <header>Basic Calculator</header>
      <section className="calc-container">
        <Screen input={input}/>
        <div className="fila">
          <Button clicHandler={addInput}>1</Button>
          <Button clicHandler={addInput}>2</Button>
          <Button clicHandler={addInput}>3</Button>
          <Button clicHandler={addInput}>+</Button>
        </div>
        <div className="fila">
          <Button clicHandler={addInput}>4</Button>
          <Button clicHandler={addInput}>5</Button>
          <Button clicHandler={addInput}>6</Button>
          <Button clicHandler={addInput}>-</Button>
        </div>
        <div className="fila">
          <Button clicHandler={addInput}>7</Button>
          <Button clicHandler={addInput}>8</Button>
          <Button clicHandler={addInput}>9</Button>
          <Button clicHandler={addInput}>*</Button>
        </div>
        <div className="fila">
          <Button clicHandler={calcResult}>=</Button>
          <Button clicHandler={addInput}>0</Button>
          <Button clicHandler={addInput}>.</Button>
          <Button clicHandler={addInput}>/</Button>
        </div>
        <div className="fila">
          <ClearButtom clearHandler={() => setInput("")}>Clear</ClearButtom>
        </div>
      </section>
      <footer>Made by <a href='https://github.com/AlexisCasTawil'>AlexisCasTawil</a></footer>
    </div>
  );
}