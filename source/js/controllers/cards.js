import CardsListComponent from '../components/cards-list.js';
import PaginationComponent from '../components/pagination.js';
import NoCardsComponent from '../components/no-cards.js';
import SortComponent from '../components/sort.js';
import CardController from './card.js';
import FilterController from './filter.js';
import {render, remove, RenderPosition} from '../utils/render.js';
import {CARDS_PER_PAGE, SortType} from '../const.js';
import {saveDataToLocalStorage} from '../utils/local-storage.js';

export default class CardsController {
  constructor(container, cardsModel) {
    this._container = container;
    this._cardsModel = cardsModel;

    this._currentSortFeatureType = SortType.DEFAULT;
    this._currentSortDirectionType = SortType.DEFAULT;

    this._cardsListComponent = new CardsListComponent();
    this._noCardsComponent = new NoCardsComponent();
    this._filterController = null;

    this._paginationComponent = null;
    this._activePage = 1;

    this._onFilterChange = this._onFilterChange.bind(this);
    this._onSortFeatureTypeChange = this._onSortFeatureTypeChange.bind(this);
    this._onSortDirectionTypeChange = this._onSortDirectionTypeChange.bind(this);
    this._addToCart = this._addToCart.bind(this);
    this._resetFilters = this._resetFilters.bind(this);

    this._cardsModel.setFilterChangeHandler(this._onFilterChange);

    this._cardControllers = [];
  }

  render() {
    const container = this._container;
    const cards = this._cardsModel.getCards();

    this._renderSortComponents();
    render(container, this._cardsListComponent, RenderPosition.BEFOREEND);
    this._renderCards(cards);
    this._renderPagination(cards);
    this._setCartItemCount();
    this._renderFilterContoller();
  }

  _renderCards(cards) {
    const catalogListElement = document.querySelector(`.catalog__list`);
    const renderCardControllers = () => {
      const cardControllers = [];
      cards.slice(0, CARDS_PER_PAGE).forEach((card) => {
        const cardController = new CardController(catalogListElement, this._addToCart);
        cardController.render(card);
        cardControllers.push(cardController);
      });
      return cardControllers;
    };

    this._cardControllers = renderCardControllers();
  }

  _renderFilterContoller() {
    const catalogSectionElement = document.querySelector(`.catalog`);
    this._filterController = new FilterController(catalogSectionElement, this._cardsModel);
    this._filterController.render();
  }

  _renderPagination(cards) {
    const pagesNumber = Math.ceil(cards.length / CARDS_PER_PAGE);
    const activePage = this._activePage;
    if (pagesNumber !== 1) {
      this._paginationComponent = new PaginationComponent(pagesNumber, activePage);
      render(this._container, this._paginationComponent, RenderPosition.BEFOREEND);
    }
  }

  _renderSortComponents() {
    this._sortComponent = new SortComponent(
        this._currentSortFeatureType,
        this._currentSortDirectionType
    );
    render(this._container, this._sortComponent, RenderPosition.AFTERBEGIN);
    this._sortComponent
        .setSortFeatureTypeChangeHandler(this._onSortFeatureTypeChange);
    this._sortComponent
        .setSortDirectionTypeChangeHandler(this._onSortDirectionTypeChange);
  }

  _removeCards() {
    const catalogListElement = this._cardsListComponent.getElement();
    catalogListElement.innerHTML = ``;
    this._cardControllers = [];
  }

  _removePagination() {
    remove(this._paginationComponent);
  }

  _update() {
    this._removeCards();
    this._removePagination();
    this._renderCards(this._cardsModel.getCards());
    remove(this._sortComponent);

    if (this._cardsModel.getCards().length > 0) {

      this._renderPagination(this._cardsModel.getCards());

      this._renderSortComponents();
      this._onSortFeatureTypeChange(this._currentSortFeatureType);
      this._onSortDirectionTypeChange(this._currentSortDirectionType);

    } else {
      const catalogListElement = document.querySelector(`.catalog__list`);
      render(catalogListElement, this._noCardsComponent, RenderPosition.AFTERBEGIN);
      this._noCardsComponent.setToResetFiltersButtonClickHandler(this._resetFilters);
    }
  }

  _resetFilters() {
    const checkboxFilters = [];
    const minPrice = null;
    const maxPrice = null;
    this._cardsModel.setFilter(checkboxFilters, minPrice, maxPrice);
    this._onFilterChange();
    this._filterController.remove();
    this._filterController.render();
  }

  _onFilterChange() {
    this._update();
  }

  _onSortFeatureTypeChange(sortType) {
    this._currentSortFeatureType = sortType;
    let sortedCards = [];
    const cards = this._cardsModel.getCards();

    if (sortType === SortType.DEFAULT) {
      return;
    }

    if (this._currentSortDirectionType === SortType.DEFAULT) {
      this._currentSortDirectionType = SortType.ASCENDING;
    }

    switch (sortType) {

      case SortType.PRICE:
        sortedCards = cards.slice().sort((a, b) => {
          return this._currentSortDirectionType === SortType.ASCENDING ?
            a.price - b.price : b.price - a.price;
        });
        break;

      case SortType.POPULARITY:
        sortedCards = cards.slice().sort((a, b) => {
          return this._currentSortDirectionType === SortType.ASCENDING ?
            a.popularity - b.popularity : b.popularity - a.popularity;
        });
        break;

      case SortType.DEFAULT:
        sortedCards = cards;
        break;
    }

    this._removeCards();
    this._renderCards(sortedCards);
    remove(this._sortComponent);
    this._renderSortComponents();
  }

  _onSortDirectionTypeChange(sortType) {
    this._currentSortDirectionType = sortType;
    let sortedCards = [];
    const cards = this._cardsModel.getCards();

    if (sortType === SortType.DEFAULT) {
      return;
    }

    if (this._currentSortFeatureType === SortType.DEFAULT) {
      this._currentSortFeatureType = SortType.PRICE;
    }

    switch (sortType) {

      case SortType.ASCENDING:
        sortedCards = cards.slice().sort((a, b) => {
          return this._currentSortFeatureType === SortType.PRICE ?
            a.price - b.price : a.popularity - b.popularity;
        });
        break;

      case SortType.DESCENDING:
        sortedCards = cards.slice().sort((a, b) => {
          return this._currentSortFeatureType === SortType.PRICE ?
            b.price - a.price : b.popularity - a.popularity;
        });
        break;

      case SortType.DEFAULT:
        sortedCards = cards;
        break;
    }

    this._removeCards();
    this._renderCards(sortedCards);
    remove(this._sortComponent);
    this._renderSortComponents();
  }

  _setCartItemCount() {
    const cartItemsElement = document.querySelector(`.page-header__cart-items sup`);
    let cartItemsCounter = JSON.parse(localStorage.getItem(`session`)).length;

    if (cartItemsCounter > 0) {
      cartItemsElement.parentElement.classList.remove(`visually-hidden`);
    } else {
      cartItemsElement.parentElement.classList.add(`visually-hidden`);
    }

    cartItemsElement.innerHTML = cartItemsCounter;
  }

  _addToCart(card) {
    saveDataToLocalStorage(card);
    this._setCartItemCount();
  }
}
