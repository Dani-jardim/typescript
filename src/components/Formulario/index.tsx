import React from "react";
import Botao from "../Button";

class Formulario extends React.Component{
  render() {
    return(
      <form>
        <div>
          <label htmlFor="tarefa">Adicione uma nova tarefa</label>
          <input 
            type="text"
            id="nome" 
            name="nome"
            placeholder="Digite seu nome"
            />
        </div>
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
        <Botao/>
      </form>
    )
  }
}
export default Formulario