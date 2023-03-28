import React from 'react';
import PropTypes from 'prop-types';

export default class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage, cardRare,
      cardTrunfo,
      deleteCard,
    } = this.props;

    return (
      <div id="main-card">
        <h1 id="card-name" data-testid="name-card">{cardName}</h1>
        <img
          data-testid="image-card"
          src={ cardImage }
          alt={ cardName }
        />
        <h2 id="card-description" data-testid="description-card">{cardDescription}</h2>
        <h3 data-testid="attr1-card">{cardAttr1}</h3>
        <h3 data-testid="attr2-card">{cardAttr2}</h3>
        <h3 data-testid="attr3-card">{cardAttr3}</h3>
        <h2 data-testid="rare-card">{cardRare}</h2>
        {cardTrunfo && <h3 data-testid="trunfo-card">Super Trunfo</h3>}
        <button
          data-testid="delete-button"
          onClick={ () => { deleteCard(cardName, cardTrunfo); } }
          type="button"
        >
          Excluir

        </button>
      </div>
    );
  }
}

Card.defaultProps = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '',
  cardAttr2: '',
  cardAttr3: '',
  cardImage: '',
  cardRare: '',
  cardTrunfo: false,
  deleteCard: () => {},
};

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  deleteCard: PropTypes.func,
};
