import React from 'react';
import style from './Button.module.scss'

interface Props {
  children?: React.ReactNode;
}

class Botao extends React.Component<Props> {
  render() {
    return (
    <button className={style.botao} >
      {this.props.children}
    </button>
    );
  }
}
export default Botao