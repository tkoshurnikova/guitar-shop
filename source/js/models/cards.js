import {getCardsByFilter} from '../utils/filter.js';
import {FilterType} from '../const.js';

export default class Cards {
  constructor() {
    this._cards = [];
    this._activeFilterType = FilterType.ALL;
    this._filterChangeHandlers = [];
  }

  getCardsAll() {
    return this._cards;
  }

  getCards() {
    return getCardsByFilter(this._cards, this._activeFilterType);
  }

  setCards(cards) {
    this._cards = cards;
  }

  setFilter(filterType) {
    this._activeFilterType = filterType;
    this._callHandlers(this._filterChangeHandlers);
  }

  setFilterChangeHandler(handler) {
    this._filterChangeHandlers.push(handler);
  }

  _callHandlers(handlers) {
    handlers.forEach((handler) => handler());
  }
}
