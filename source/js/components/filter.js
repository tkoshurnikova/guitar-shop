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
            type="number"
            name="price"
            id="min-price"
            placeholder="${formatPrice(Math.min(...prices))}"
          >
          <label class="visually-hidden" for="min-price">
            Цена от
          </label>
          <input
            type="number"
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
      const minPrice = element.querySelector(`#min-price`).value;
      const maxPrice = element.querySelector(`#max-price`).value;
      setFilter(minPrice, maxPrice);
      getCards();
    }));
  }

  _subscribeOnEvents() {
    const element = this.getElement();
    const prices = this._cards.map((card) => Number(card.price));

    element.querySelector(`.form__price-fieldset`).addEventListener(`change`, () => {
      const minPriceElement = element.querySelector(`#min-price`);
      const maxPriceElement = element.querySelector(`#max-price`);


      if (maxPriceElement.value && minPriceElement.value && Number(maxPriceElement.value) < Number(minPriceElement.value)) {

        const min = maxPriceElement.value < Math.min(...prices) ? Math.min(...prices) : maxPriceElement.value;
        minPriceElement.value = min;
        maxPriceElement.value = min;
      }

      if (minPriceElement.value && minPriceElement.value < Math.min(...prices)) {
        minPriceElement.value = Math.min(...prices);
      }

      if (maxPriceElement.value && maxPriceElement.value > Math.max(...prices)) {
        maxPriceElement.value = Math.max(...prices);
      }
    });
  }
}
