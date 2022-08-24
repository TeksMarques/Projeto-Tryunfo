import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: 0,
    cardAttr2: 0,
    cardAttr3: 0,
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    saveCards: [],
  };  

  onSaveButtonClick = (event) => {
    const { cardTrunfo } = this.state;
    if (cardTrunfo) {
      this.setState({ hasTrunfo: true });
    }

    this.setState(
      (estado) => ({
        saveCards: [...estado.saveCards, event],
      }),
      () => {
        this.setState({
          cardName: '',
          cardDescription: '',
          cardImage: '',
          cardAttr1: 0,
          cardAttr2: 0,
          cardAttr3: 0,
          cardRare: 'normal',
        });
      }
    );
  };

  verificaAtributo = (number) => {
    const numeroMax = 90;
    if (Number(number) >= 0 && Number(number) <= numeroMax) {
      return true;
    }
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, () => {
      const {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
      } = this.state;
      const attr1 = this.verificaAtributo(cardAttr1);
      const attr2 = this.verificaAtributo(cardAttr2);
      const attr3 = this.verificaAtributo(cardAttr3);
      const sum = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
      const sumMax = 210;
      if (
        cardName &&
        cardDescription &&
        cardImage &&
        cardRare &&
        sum <= sumMax &&
        attr1 &&
        attr2 &&
        attr3
      ) {
        this.setState({ isSaveButtonDisabled: false });
      } else {
        this.setState({ isSaveButtonDisabled: true });
      }
    });
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      saveCards,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          onInputChange={this.onInputChange}
          cardName={cardName}
          cardDescription={cardDescription}
          cardAttr1={cardAttr1}
          cardAttr2={cardAttr2}
          cardAttr3={cardAttr3}
          cardImage={cardImage}
          cardRare={cardRare}
          cardTrunfo={cardTrunfo}
          hasTrunfo={hasTrunfo}
          isSaveButtonDisabled={isSaveButtonDisabled}
          onSaveButtonClick={this.onSaveButtonClick}
        />
        <h1>Pré-visualização</h1>
        <Card
          cardName={cardName}
          cardDescription={cardDescription}
          cardAttr1={cardAttr1}
          cardAttr2={cardAttr2}
          cardAttr3={cardAttr3}
          cardImage={cardImage}
          cardRare={cardRare}
          cardTrunfo={cardTrunfo}
        />
        <h1>Meus cards</h1>
        {saveCards.map((elemento) => (
          <Card
            cardName={ elemento.cardName }
            cardDescription={ elemento.cardDescription }
            cardAttr1={elemento.cardAttr1}
            cardAttr2={elemento.cardAttr2}
            cardAttr3={elemento.cardAttr3}
            cardImage={elemento.cardImage}
            cardRare={elemento.cardRare}
            cardTrunfo={elemento.cardTrunfo}
          />
        ))}
      </div>
    );
  }
}

export default App;
