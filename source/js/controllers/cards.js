import CardsListComponent from '../components/cards-list.js';
import CardController from './card.js';
import {render, RenderPosition} from '../utils/render.js';
import {CARDS_PER_PAGE} from '../const.js';

export default class CardsController {
  constructor(container, cardsModel) {
    this._container = container;
    this._cardsModel = cardsModel;
    this._cardsListComponent = new CardsListComponent();
    this._onFilterChange = this._onFilterChange.bind(this);
    this._cardsModel.setFilterChangeHandler(this._onFilterChange);
  }

  render() {
    const container = this._container;
    const cards = this._cardsModel.getCards();

    render(container, this._cardsListComponent, RenderPosition.BEFOREEND);
    this._renderCards(cards);
  }

  _renderCards(cards) {
    const catalogList = document.querySelector(`.catalog__list`);
    cards.slice(0, CARDS_PER_PAGE).forEach((card) => {
      const cardController = new CardController(catalogList);
      cardController.render(card);
    });
  }

  _removeCards() {
    const catalogList = this._cardsListComponent.getElement();
    catalogList.innerHTML = ``;
  }

  _update() {
    this._removeCards();
    this._renderCards(this._cardsModel.getCards());
  }

  _onFilterChange() {
    this._update();
  }
}
