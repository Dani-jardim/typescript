import React, { useState } from 'react';
import Botao from '../Button';
import style from './Formulario.module.scss'
import { Itarefa } from '../../types/tarefas';
import {v4 as uuidv4 } from 'uuid';

interface Props {
  setTarefas: React.Dispatch<React.SetStateAction <Itarefa[]>>
}

function Formulario ({setTarefas}: Props) {
  const [tarefa, setTarefa] = useState("")
  const [tempo, setTempo] = useState("00:00")
  function adicionarTarefa(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTarefas(tarefasAntigas =>
      [
        ...tarefasAntigas, 
        {
          tarefa,
          tempo, 
          selecionado:false,
          completado:false,
          id: uuidv4()
        }
      ] 
    );
    setTarefa("")
    setTempo("00:00")
  }
  return (
    <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
    <div className={style.inputContainer}>
      <label htmlFor="tarefa">Adicione uma nova tarefa</label>
      <input 
        type="text"
        id="tarefa"
        value={tarefa}
        onChange={e => setTarefa(e.target.value)} 
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
        value={tempo}
        onChange={e => setTempo(e.target.value)}
        id="tempo"
        min="00:00:00" 
        max=""
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

export default Formulario