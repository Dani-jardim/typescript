import React from 'react';
import Botao from '../Button';
import style from './Formulario.module.scss'
import { Itarefa } from '../../types/tarefas';

class Formulario extends React.Component<{
  setTarefas: React.Dispatch<React.SetStateAction <Itarefa[]>>
}> {
  state = {
    tarefa:'',
    tempo: '00:00',
  }
  adicionarTarefa(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    this.props.setTarefas(tarefasAntigas =>[...tarefasAntigas, {...this.state}] )
    this.setState({
      tarefe:'',
      tempo:'00:00'
    })
  }
  render() {
    return(
      <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Adicione uma nova tarefa</label>
          <input 
            type="text"
            id="tarefa"
            value={this.state.tarefa}
            onChange={e => this.setState({...this.state, tarefa: e.target.value})} 
            name="tarefa"
            placeholder="Digite sua tarefa"
            required
            />
        </div>
        <div className={style.inputContainer}>
        <label htmlFor='tempo'>Tempo</label>
          <input 
            type="time"
            step="1"
            name="tempo"
            value={this.state.tempo}
            onChange={e => this.setState({...this.state, tempo: e.target.value})}
            id="tempo"
            min="00:00:00" 
            max="01:30:00"
            required
          />
        </div>
        <Botao 
          type="submit">
          Adicionar
        </Botao>
      </form>
    )
  }
}
export default Formulario