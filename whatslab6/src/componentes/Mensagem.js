import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  section {
    background-color: #454545;
    box-sizing: border-box;
    color: #454545;
    border-radius: 40px;
    border: 10px solid currentColor;
    height: 620px;
    padding: 40px 0;
    width: 300px;
  }

  
  
`

const Tela = styled.div `
  background: #e5ddd5;
  display: flex;
  flex-direction: column-reverse;
  height:100%;
  width:100%;

  .formulario {
    display: flex;
    justify-content: space-evenly;
  }

  .mensagens {
    padding: 0 8px;
  }

  input,
  button {
    border: none;
    border-radius: 4px;
    height: 24px;
    margin-bottom: 4px;
  }
`

const Remetente = styled.input `
  width:50px;
`

const Conteudo = styled.input `
  width:160px;
`

class Mensagem extends React.Component {
  state = {
    mensagens: [
      {
      nomeRemetente: '',
      content: ''
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
        <b>{ mensagem.nomeRemetente } </b> {mensagem.content}
      </p>
      )})

    return (
      <Container>
        <section>
          <Tela>
            <div className="formulario">
              <Remetente
                value= { this.state.valorInputRemetente }
                onChange= { this.onChangeInputRemetente }
                placeholder= {'Usuário'}
              />
              <Conteudo
                value= { this.state.valorInputContent }
                onChange= { this.onChangeInputContent }
                placeholder= {'Sua mensagem'}
              />
              <button onClick={this.onClickEnviar} > Enviar </button>
            </div>
            <div className="mensagens">
              { mostraMensagem }
            </div>
          </Tela>
        </section>
      </Container> 
    )
  }
}

export default Mensagem