import React from 'react';

class Mensagem extends React.Component {
  state = {
    mensagens: [
      {
      nomeRemetente: 'Jonvirson',
      content: 'oi'
      }
    ],

    valorInputRemetente: '',
    valorInputContent: ''
  }

  onClickEnviar = () => {
    const novaMensagem = {
      nomeRemetente: this.state.valorInputRemetente,
      content: this.state.valorInputContent
    }
    
    const enviando = [...this.state.mensagens, novaMensagem]
    
    this.setState({mensagens: enviando})
  }

  onChangeInputRemetente = (event) => {
    this.setState({valorInputRemetente: event.target.value});
  };

  onChangeInputContent = (event) => {
    this.setState({valorInputContent: event.target.value});
  };

  render() {

    const mostraMensagem = this.state.mensagens.map((mensagem) => {
      return ( 
      <p>
        <b>{ mensagem.nomeRemetente }: </b> {mensagem.content}
      </p>
      )})

    return (
      <div className = "App" >
        <div>
          { mostraMensagem }
        </div>
        
        <input
          value= { this.state.valorInputRemetente }
          onChange= { this.onChangeInputRemetente }
          placeholder= {'Digite seu nome'}
        />
        <input
          value= { this.state.valorInputContent }
          onChange= { this.onChangeInputContent }
          placeholder= {'Sua mensagem'}
        />
        <button onClick={this.onClickEnviar} > Enviar </button>
      </div> 
    )
  }
}

export default Mensagem