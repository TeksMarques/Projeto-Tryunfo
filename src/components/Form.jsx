import React from 'react';
import Proptype from 'prop-types';

class Form extends React.Component {
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
      //   hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <main>
        <h1>Adicionar nova carta</h1>
        <form>
          <label htmlFor="name">
            Nome
            <input
              type="text"
              data-testid="name-input"
              name="cardName"
              id="name"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label htmlFor="textArea">
            Descrição
            <textarea
              data-testid="description-input"
              name="cardDescription"
              id="textArea"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label htmlFor="attr01">
            Attr01
            <input
              type="number"
              data-testid="attr1-input"
              name="cardAttr1"
              id="attr01"
              value={ cardAttr1 }
              onChange={ onInputChange }              
            />
          </label>
          <br />
          <label htmlFor="attr02">
            Attr02
            <input
              type="number"
              data-testid="attr2-input"
              name="cardAttr2"
              id="attr02"
              value={ cardAttr2 }
              onChange={ onInputChange }              
            />
          </label>
          <br />
          <label htmlFor="attr03">
            Attr03
            <input
              type="number"
              data-testid="attr3-input"
              name="cardAttr3"
              id="attr03"
              value={ cardAttr3 }
              onChange={ onInputChange }              
            />
          </label>
          <br />
          <label htmlFor="img">
            Imagem
            <input
              type="url"
              name="cardImage"
              id="img"
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label htmlFor="raridade">
            Raridade
            <select
              name="cardRare"
              id="raridade"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <br />
          <label htmlFor="super">
            Super Trybe Trunfo
            <input
              type="checkbox"
              name="cardTrunfo"
              id="super"
              data-testid="trunfo-input"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <button
            type="submit"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </main>
    );
  }
}

Form.propTypes = {
  cardName: Proptype.string,
  cardDescription: Proptype.string,
  cardAttr1: Proptype.number,
  cardAttr2: Proptype.number,
  cardAttr3: Proptype.number,
  cardImage: Proptype.string,
  cardRare: Proptype.string,
  cardTrunfo: Proptype.bool,
  //   hasTrunfo: Proptype.bool,
  isSaveButtonDisabled: Proptype.bool,
  onInputChange: Proptype.func,
  onSaveButtonClick: Proptype.func,
}.isRequired;
export default Form;
