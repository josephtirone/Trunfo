import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import validate from './utils/validateForm';

// forEach -> Vou rodar um vez para cada item do array
// Map -> Vou rodar um vez para cada item do array e retornar um array com um item para cada item rodado
// Reduce -> Vou rodar um vez para cada item do array e retornar qualquer coisa baseado em alguma informacao de cada item
// Some ->  Vou rodar um vez para cada item do array e retornar true se pelo menos algum dos itens atender algum criterio
// Every -> Vou rodar um vez para cada item do array e retornar true se todos atenderem algum criterio
// Filter -> Vou rodar um vez para cada item do array e retornar um array com todos os itens que atendem a um criterio

const initialState = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '',
  cardAttr2: '',
  cardAttr3: '',
  cardImage: '',
  cardRare: 'normal',
  cardTrunfo: false,
};

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      ...initialState,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      savedCards: [],
      savedCardsToShow: [],
    };

    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.nameFilter = this.nameFilter.bind(this);
    this.rareFilter = this.rareFilter.bind(this);
    this.trunfoFilter = this.trunfoFilter.bind(this);
  }

  onSaveButtonClick() {
    this.setState((prev) => {
      const newCard = { ...prev };
      delete newCard.savedCards;
      delete newCard.isSaveButtonDisabled;
      delete newCard.hasTrunfo;
      let cardIsTrunfo = false;
      if (prev.cardTrunfo) {
        cardIsTrunfo = true;
      }
      return {
        savedCards: [...prev.savedCards, {
          ...newCard,
        }],
        savedCardsToShow: [...prev.savedCards, {
          ...newCard,
        }],
        ...initialState,
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        hasTrunfo: cardIsTrunfo,
        isSaveButtonDisabled: true,
      };
    });
  }

  handleChange = (event) => {
    this.setState((prevState) => ({
      [event.target.name]: event.target.name === 'cardTrunfo'
        ? event.target.checked : event.target.value,
      isSaveButtonDisabled: !validate({ ...prevState,
        [event.target.name]: event.target.value,
      }),
    }
    ));
  }

  deleteCard(cardName, cardTrunfo) {
    const { savedCards } = this.state;
    const lista = savedCards.filter((card) => card.cardName !== cardName);
    if (cardTrunfo) {
      this.setState({
        hasTrunfo: false,
      });
    }
    this.setState({
      savedCards: lista,
      savedCardsToShow: lista,
    });
  }

  nameFilter(event) {
    const { savedCards } = this.state;
    const filteredListName = savedCards.filter(
      (card) => card.cardName.includes(event.target.value),
    );
    this.setState({
      savedCardsToShow: filteredListName,
    });
  }

  rareFilter(event) {
    const { savedCards } = this.state;
    const filteredListRare = savedCards.filter(
      (card) => card.cardRare === event.target.value,
    );
    if (event.target.value === 'todas') {
      this.setState({
        savedCardsToShow: savedCards,
      });
    } else {
      this.setState({
        savedCardsToShow: filteredListRare,
      });
    }
  }

  trunfoFilter(event) {
    const { savedCards } = this.state;
    const filteredListTrunfo = savedCards.filter(
      (card) => card.cardTrunfo === event.target.checked,
    );

    this.setState({
      savedCardsToShow: filteredListTrunfo,
    });
  }

  render() {
    const cards = [];
    const { savedCardsToShow } = this.state;
    for (let index = 0; index < savedCardsToShow.length; index += 1) {
      const element = savedCardsToShow[index];
      cards.push(<Card
        key={ index }
        cardId={ index }
        deleteCard={ this.deleteCard }
        { ...element }
      />);
    }
    return (
      <div id="main-container">

        <h1 className="title-header">Trunfo</h1>

        <div className="form-container">
          <Form
            { ...this.state }
            onSaveButtonClick={ this.onSaveButtonClick }
            onInputChange={ this.handleChange }
          />
        </div>

        <div className="card-content">
          {cards}
          <Card { ...this.state } />
        </div>

        <input type="text" data-testid="name-filter" onChange={ this.nameFilter } />

        <select data-testid="rare-filter" onChange={ this.rareFilter }>
          <option value="todas">Todas</option>
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito Raro</option>
        </select>

        <label htmlFor="trunfo-check">
          <input
            onChange={ this.trunfoFilter }
            type="checkbox"
            id="trunfo-check"
            data-testid="trunfo-filter"
          />
        </label>

      </div>
    );
  }
}

export default App;
