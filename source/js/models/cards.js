import {getCardsByFilter, getSameGuitarType} from '../utils/filter.js';

export default class Cards {
  constructor() {
    this._cards = [];
    this._filterChangeHandlers = [];
    this._checkboxNames = [];
    this._minPrice = null;
    this._maxPrice = null;
  }

  getCards() {
    return getCardsByFilter(
        this._cards,
        this._checkboxNames,
        this._minPrice,
        this._maxPrice
    );
  }

  getCardsByGuitarTypeFilter() {
    return getSameGuitarType(
        this._cards,
        this._checkboxNames,
        this._minPrice,
        this._maxPrice
    );
  }

  setCards(cards) {
    this._cards = cards;
  }

  setFilter(checkboxNames, minPrice, maxPrice) {
    this._checkboxNames = checkboxNames;
    this._minPrice = minPrice;
    this._maxPrice = maxPrice;
    this._callHandlers(this._filterChangeHandlers);
  }

  setFilterChangeHandler(handler) {
    this._filterChangeHandlers.push(handler);
  }

  _callHandlers(handlers) {
    handlers.forEach((handler) => handler());
  }
}
