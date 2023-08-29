import React from 'react';
import style from './Button.module.scss'

interface Props {
    children: string
    type?: 'button' | 'submit' | 'reset' | undefined
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  }


function Botao ({children, type, onClick}: Props) {
    return (
    <button 
        type={type} 
        onClick={onClick} 
        className={style.botao} 
        >
      {children}
    </button>
    );
}
export default Botao