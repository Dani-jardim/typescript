import Botao from "../Button";
import Relogio from "./Relogio";
import style from './Cronometro.module.scss'
import { tempoParaSegundo } from "../common/time";
import { Itarefa } from "../../types/tarefas";
import { useEffect, useState } from "react";

interface Props {
  selecionado: Itarefa | undefined
}

export default function Cronometro({selecionado}: Props) {
  
  const [tempo, setTempo] = useState<number>()

  useEffect(()=> {
    if(selecionado?.tempo){
      setTempo(tempoParaSegundo(selecionado.tempo))
    }

  },[selecionado])

  return(
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronometro</p>
      <div className={style.relogioWrapper}>
        <Relogio tempo={tempo}/>
      </div>
      <Botao onClick={()=>console.log("começando")}>
        Começar
      </Botao>
    </div>
  )
}