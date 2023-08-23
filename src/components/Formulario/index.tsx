import React from "react";
import Botao from "../Button";
import './style.scss';

class Formulario extends React.Component{
  render() {
    return(
      <form className="novaTarefa">
        <div className="inputContainer">
          <label htmlFor="tarefa">Adicione uma nova tarefa</label>
          <input 
            type="text"
            id="nome" 
            name="nome"
            placeholder="Digite seu nome"
            />
        </div>
        <div className="inputContainer">
        <label>Tempo</label>
          <input 
            type="time"
            step="1"
            name="tempo"
            id="tempo"
            min="00:00:00" 
            max="01:30:00"
            required
          />
        </div>
    
        <Botao/>
      </form>
    )
  }
}
export default Formulario