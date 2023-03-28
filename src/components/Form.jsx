/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import PropTypes from 'prop-types';

export default class Form extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage, cardRare,
      cardTrunfo, hasTrunfo, onInputChange,
      isSaveButtonDisabled,
      onSaveButtonClick } = this.props;

    return (
      <form onSubmit={ (e) => e.preventDefault() }>
        <label htmlFor="name">
          <input
            placeholder="Name"
            type="text"
            className="input"
            data-testid="name-input"
            onChange={ onInputChange }
            value={ cardName }
            name="cardName"
            id="name"
          />
        </label>
        <label htmlFor="description">
          <textarea
            className="input"
            placeholder="Description"
            name="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
            id="description"
            data-testid="description-input"
            cols="30"
            rows="10"
          />
        </label>
        <label htmlFor="attr1">
          <input
            type="number"
            className="input"
            placeholder="Attribute 1"
            value={ cardAttr1 }
            onChange={ onInputChange }
            data-testid="attr1-input"
            name="cardAttr1"
            id="attr1"
          />
        </label>
        <label htmlFor="attr2">
          <input
            type="number"
            className="input"
            placeholder="Attribute 2"
            value={ cardAttr2 }
            onChange={ onInputChange }
            data-testid="attr2-input"
            name="cardAttr2"
            id="attr2"
          />
        </label>
        <label htmlFor="attr3">
          <input
            type="number"
            className="input"
            placeholder="Attribute 3"
            value={ cardAttr3 }
            onChange={ onInputChange }
            data-testid="attr3-input"
            name="cardAttr3"
            id="attr3"
          />
        </label>
        <label htmlFor="image">
          <input
            type="text"
            value={ cardImage }
            className="input"
            placeholder="Image Path"
            onChange={ onInputChange }
            data-testid="image-input"
            name="cardImage"
            id="image"
          />
        </label>
        <label htmlFor="rare">
          <select
            className="input"
            placeholder="Rare"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
            name="cardRare"
            id="rare"
          >
            <option value="normal"> normal</option>
            <option value="raro"> raro</option>
            <option value="muito raro"> muito raro</option>
          </select>
        </label>
        {!hasTrunfo
          ? <label htmlFor="trunfo">
            <input
              type="checkbox"
              checked={ cardTrunfo }
              onChange={ onInputChange }
              data-testid="trunfo-input"
              name="cardTrunfo"
              id="trunfo"
            />
            Trunfo
          </label>
          : <p>Você já tem um Super Trunfo em seu baralho</p> }
        <button
          id="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          type="submit"
          data-testid="save-button"
        >
          Salvar
        </button>

      </form>

    );
  }
}

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
