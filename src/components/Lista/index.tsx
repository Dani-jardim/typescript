import { useState } from 'react';
import style from './Lista.module.scss';
import Item from './item';

function Lista() {

  const [tarefas, setTarefas] = useState([{
    tarefa:"ler",
    tempo:"01:00:00",
  },{
    tarefa:"treinar",
    tempo:"03:00:00",
  }])

  return(
    <aside className={style.listaTarefa} >
      <h2 onClick={() => {
      setTarefas([...tarefas, {tarefa:"cozinhar", tempo:"02:00:00"}])
    }}>Estudos do dia</h2>
      <ul>
      {tarefas.map((item, index) => (
       <Item
        key={index}
        {...item}
       />
      ))}
      </ul>
    </aside>
   )
}
export default Lista;