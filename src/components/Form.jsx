import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <main>
        <h1>Adicionar nova carta</h1>
        <form>
          <label htmlFor="name">
            Nome
            <input type="text" data-testid="name-input" name="name" id="name" />
          </label>
          <br />
          <label htmlFor="textArea">
            Descrição
            <textarea
              data-testid="description-input"
              name="textArea"
              id="textArea"
            />
          </label>
          <br />
          <label htmlFor="attr01">
            Attr01
            <input
              type="number"
              data-testid="attr1-input"
              name="attr01"
              id="attr01"
            />
          </label>
          <br />
          <label htmlFor="attr02">
            Attr02
            <input
              type="number"
              data-testid="attr2-input"
              name="attr02"
              id="attr02"
            />
          </label>
          <br />
          <label htmlFor="attr03">
            Attr03
            <input
              type="number"
              data-testid="attr3-input"
              name="attr03"
              id="attr03"
            />
          </label>
          <br />
          <label htmlFor="img">
            Imagem
            <input type="url" name="img" id="img" data-testid="image-input" />
          </label>
          <br />
          <label htmlFor="raridade">
            Raridade
            <select name="raridade" id="raridade" data-testid="rare-input">
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
              name="super"
              id="super"
              data-testid="trunfo-input"
            />
          </label>
          <br />
          <button type="submit" data-testid="save-button">Salvar</button>
        </form>
      </main>
    );
  }
}

export default Form;
