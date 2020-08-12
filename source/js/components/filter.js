import AbstractComponent from './abstract-component.js';
import {debounce} from '../utils/debounce.js';
import {formatPrice} from '../utils/format.js';


const createFilterTemplate = (cards) => {
  const prices = cards.map((card) => Number(card.price));

  return (
    `<form class="form" method="post">
      <h3>Фильтр</h3>
      <fieldset class="form__price-fieldset">
        <legend>Цена, <span>₽</span></legend>
        <p>
          <input
            type="text"
            name="price"
            id="min-price"
            placeholder="${formatPrice(Math.min(...prices))}"
          >
          <label class="visually-hidden" for="min-price">
            Цена от
          </label>
          <input
            type="text"
            name="price"
            id="max-price"
            placeholder="${formatPrice(Math.max(...prices))}"
          >
          <label class="visually-hidden" for="max-price">
            Цена до
          </label>
        </p>
      </fieldset>
    </form>`
  );
};

export default class Filter extends AbstractComponent {
  constructor(cards) {
    super();
    this._cards = cards;
    this._subscribeOnEvents();
  }

  getTemplate() {
    return createFilterTemplate(this._cards);
  }

  setFilterChangeHandler(setFilter, getCards) {
    const element = this.getElement();

    element.addEventListener(`change`, debounce(() => {
      const minPriceElement = element.querySelector(`#min-price`);
      const minPriceValue = Number(minPriceElement.value.replace(/\s/g, ``));

      const maxPriceElement = element.querySelector(`#max-price`);
      const maxPriceValue = Number(maxPriceElement.value.replace(/\s/g, ``));

      setFilter(minPriceValue, maxPriceValue);
      getCards();
    }));
  }

  _subscribeOnEvents() {
    const element = this.getElement();
    const prices = this._cards.map((card) => Number(card.price));

    element.querySelector(`.form__price-fieldset`).addEventListener(`keydown`, (evt) => {
      const key = evt.keyCode;
      if (key === 46 || key === 8 || key === 37 || key === 39) {
        return true;
      } else if (key < 48 || key > 57) {
        evt.returnValue = false;
        if (evt.preventDefault) {
          evt.preventDefault();
        }
      }
      return true;
    });

    element.querySelector(`.form__price-fieldset`).addEventListener(`change`, () => {
      const minPriceElement = element.querySelector(`#min-price`);
      const maxPriceElement = element.querySelector(`#max-price`);

      let minPriceValue = Number(minPriceElement.value.replace(/\s/g, ``));
      let maxPriceValue = Number(maxPriceElement.value.replace(/\s/g, ``));

      if (maxPriceValue && minPriceValue && maxPriceValue < minPriceValue) {

        const min = maxPriceValue < Math.min(...prices) ? Math.min(...prices) : maxPriceValue;
        minPriceValue = min;
        maxPriceValue = min;
      }

      if (minPriceValue && minPriceValue < Math.min(...prices)) {
        minPriceValue = Math.min(...prices);
      }

      if (maxPriceValue && maxPriceValue > Math.max(...prices)) {
        maxPriceValue = Math.max(...prices);
      }

      if (minPriceValue) {
        minPriceElement.value = new Intl.NumberFormat(`ru-RU`).format(minPriceValue);
      }

      if (maxPriceValue) {
        maxPriceElement.value = new Intl.NumberFormat(`ru-RU`).format(maxPriceValue);
      }
    });
  }
}
