import {getCardsByFilter} from '../utils/filter.js';

export default class Cards {
  constructor() {
    this._cards = [];
    this._filterChangeHandlers = [];
  }

  getCardsAll() {
    return this._cards;
  }

  getCards() {
    return getCardsByFilter(this._cards);
  }

  setCards(cards) {
    this._cards = cards;
  }

  setFilter() {
    this._callHandlers(this._filterChangeHandlers);
  }

  setFilterChangeHandler(handler) {
    this._filterChangeHandlers.push(handler);
  }

  _callHandlers(handlers) {
    handlers.forEach((handler) => handler());
  }
}
