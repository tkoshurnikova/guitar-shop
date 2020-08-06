import CardsListComponent from '../components/cards-list.js';
import PaginationComponent from '../components/pagination.js';
import SortComponent from '../components/sort.js';
import CardController from './card.js';
import {render, remove, RenderPosition} from '../utils/render.js';
import {CARDS_PER_PAGE} from '../const.js';

export default class CardsController {
  constructor(container, cardsModel) {
    this._container = container;
    this._cardsModel = cardsModel;
    this._cardsListComponent = new CardsListComponent();
    this._paginationComponent = null;
    this._activePage = 1;
    this._onFilterChange = this._onFilterChange.bind(this);
    this._cardsModel.setFilterChangeHandler(this._onFilterChange);

    this._cardContollers = [];
  }

  render() {
    const container = this._container;
    const cards = this._cardsModel.getCards();

    render(container, new SortComponent(), RenderPosition.BEFOREEND);
    render(container, this._cardsListComponent, RenderPosition.BEFOREEND);
    this._renderCards(cards);
    this._renderPagination(cards);
  }

  _renderCards(cards) {
    const catalogList = document.querySelector(`.catalog__list`);
    const renderCardControlles = () => {
      const cardControllers = [];
      cards.slice(0, CARDS_PER_PAGE).forEach((card) => {
        const cardController = new CardController(catalogList);
        cardController.render(card);
        cardControllers.push(cardController);
      });
      return cardControllers;
    };

    this._cardContollers = renderCardControlles();
  }

  _renderPagination(cards) {
    const pagesNumber = Math.ceil(cards.length / CARDS_PER_PAGE);
    const activePage = this._activePage;
    if (pagesNumber !== 1) {
      this._paginationComponent = new PaginationComponent(cards, pagesNumber, activePage);
      render(this._container, this._paginationComponent, RenderPosition.BEFOREEND);
    }
  }

  _removeCards() {
    const catalogList = this._cardsListComponent.getElement();
    catalogList.innerHTML = ``;
    this._cardContollers = [];
  }

  _removePagination() {
    remove(this._paginationComponent);
  }

  _update() {
    this._removeCards();
    this._removePagination();
    this._renderCards(this._cardsModel.getCards());
    this._renderPagination(this._cardsModel.getCards());
  }

  _onFilterChange() {
    this._update();
  }
}
