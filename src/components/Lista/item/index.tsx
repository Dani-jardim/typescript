import style from '../Lista.module.scss'


export default function Item({tarefa, tempo, selecionado, completado, id}: {tarefa:string, tempo: string, selecionado: boolean, completado:boolean, id: string}) {
  return(
  <li className={style.item}>
    <h3>{tarefa}</h3>
    <span>{tempo}</span>
  </li>
  ) 
}