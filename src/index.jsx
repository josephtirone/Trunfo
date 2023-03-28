import React from 'react';
import PropTypes from 'prop-types';

export default class Form extends React.Component {
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
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form onSubmit={ (e) => e.preventDefault() }>
        <label htmlFor="name">
          Nome
          <input
            type="text"
            placeholder="Nome da carta"
            name="name"
            data-testid="name-input"
            id="name"
            value={ cardName }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <textarea
            name="description"
            id="description"
            data-testid="description-input"
            cols="30"
            rows="5"
          />
        </label>
        <section className="attr-section">
          <label htmlFor="attr1">
            Attr01
            <input type="number" name="attr1" id="attr1" data-testid="attr1-input" />
          </label>
          <label htmlFor="attr2">
            Attr02
            <input type="number" name="attr2" id="attr2" data-testid="attr2-input" />
          </label>
          <label htmlFor="attr3">
            Attr03
            <input type="number" name="attr3" id="attr3" data-testid="attr3-input" />
          </label>
        </section>
        <label htmlFor="image">
          Imagem
          <div id="image-field-container">
            <input type="text" id="image" data-testid="image-input" />
          </div>
        </label>
        <label htmlFor="rare">
          Raridade
          <select
            name="rare"
            id="rare"
            data-testid="rare-input"
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo">
          <input type="checkbox" name="trunfo" id="trunfo" data-testid="trunfo-input" />
          Super Trybe Trunfo
        </label>
        <button data-testid="save-button" type="submit">Salvar</button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
};

Form.defaultProps = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '',
  cardAttr2: '',
  cardAttr3: '',
  cardImage: '',
  cardRare: '',
  cardTrunfo: false,
  hasTrunfo: false,
  isSaveButtonDisabled: false,
  onInputChange: () => {},
  onSaveButtonClick: () => {},
};

// cardName, uma string;
// cardDescription, uma string;
// cardAttr1, uma string;
// cardAttr2, uma string;
// cardAttr3, uma string;
// cardImage, uma string;
// cardRare, uma string;
// cardTrunfo, um boolean;
// hasTrunfo, um boolean;
// isSaveButtonDisabled, um boolean;
// onInputChange, uma callback;
// onSaveButtonClick, uma callback;
