import './App.css';
import Boton from "./componentes/boton.jsx"
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear.jsx';
import { useState } from "react"
import {evaluate} from "mathjs"

function App() {

  const [input, setInput] = useState("");

  const agregarInput = valor => {
    let newInput =  input + valor
    if(newInput.length <=20){
      setInput(newInput);
    }else {
      alert("Error fuera de rango")
    }

  }
  const reiniciarInput = () => {
    setInput("")
  }
  const calcularResultado= () =>{
    if(input){
      setInput(evaluate(input));
    }else{
      alert(" Por favor ingrese valores para realizar los calculos")
    }
  }

  return (
    <div className="App">
      <div className="contenedor-calculadora">
        <Pantalla input={input} />
        <div className="fila">
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>={agregarInput}
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClear={reiniciarInput}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
