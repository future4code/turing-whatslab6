import React from 'react';

class Mensagem extends React.Component {
    state = {
        mensagens: [
          {
          nomeRemetente: ' ',
          content: ' '
        }
      ], 
        
      valorInputMensagem: '',
      valorInputContent: ''
    
    }
    
    
      onChangeInputMensagem = (event) => {
        
        this.setState({ valorInputMesagem: event.target.value });
    };
    
      onChangeInputContent = (event) => {
          
        this.setState({ valorInputContent: event.target.value });
      };

    render() {




        const mostraMensagem = this.state.mensagens.map((mensagem) => {      
            return (
              <p>
                {mensagem.nomeRemetente} - {mensagem.content}
              </p>
            )
          })
        
          return (
            <div className="App">
            <input
            value={ this.state.valorInputMensagem }
            onChange={ this.onChangeInputMensagem }
            placeholder={'Digite seu nome'}
            />
            <input
            value={ this.state.valorInputContent }
            onChange={ this.onChangeInputContent }
            placeholder={'Sua mensagem'}
            />
            <button>
              Enviar
            </button>
          </div> 

        )
    }


}

export default Mensagem