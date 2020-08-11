import AbstractComponent from './abstract-component.js';
import {debounce} from '../utils/debounce.js';
import {formatPrice} from '../utils/format.js';

const createCheckboxMarkup = (type, item) => {
  return (
    `<input
      class="visually-hidden"
      type="checkbox"
      name="${type}"
      id="${item.type}"
      aria-label="${item.label}"
      ${item.isChecked ? `checked` : ``}
      ${item.isDisabled ? `disabled` : ``}
      data-label="${item.item}"
    >
    <label
      for="${item.type}"
    >
    ${item.label}
    </label>`
  );
};

const createCheckboxFieldset = (filter) => {
  const checkboxMarkup = filter.checkboxes.map((item) =>
    createCheckboxMarkup(filter.type, item))
      .join(`\n`);

  return (
    `<fieldset class="form__checkbox-fieldset ${filter.type}">
      <legend>${filter.title}</legend>
      ${checkboxMarkup}
    </fieldset>`
  );
};

const createFilterTemplate = (filtersByType, filtersByStrings, cards, minPrice, maxPrice) => {
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
            value=${cards.length ? minPrice : 0}
          >
          <label class="visually-hidden" for="min-price">
            Цена от
          </label>
          <input
            type="number"
            name="price"
            id="max-price"
            placeholder="${formatPrice(Math.max(...prices))}"
            value=${cards.length ? maxPrice : 0}
          >
          <label class="visually-hidden" for="max-price">
            Цена до
          </label>
        </p>
      </fieldset>
      ${createCheckboxFieldset(filtersByType)}
      ${createCheckboxFieldset(filtersByStrings)}
    </form>`
  );
};

export default class Filter extends AbstractComponent {
  constructor(filtersByType, filtersByStrings, cards, minPrice, maxPrice) {
    super();
    this._filtersByType = filtersByType;
    this._filtersByStrings = filtersByStrings;
    this._cards = cards;
    this._minPrice = minPrice;
    this._maxPrice = maxPrice;
    this._subscribeOnEvents();
  }

  getTemplate() {
    return createFilterTemplate(
        this._filtersByType,
        this._filtersByStrings,
        this._cards,
        this._minPrice,
        this._maxPrice
    );
  }

  setFilterChangeHandler(handler) {
    const element = this.getElement();

    element.addEventListener(`change`, debounce(() => {
      const checkedCheckboxesElements = Array.from(
          element.querySelectorAll(`input:checked`)
      );
      const checkboxNames = checkedCheckboxesElements.map((item) => item.dataset.label);

      const minPrice = element.querySelector(`#min-price`).value;
      const maxPrice = element.querySelector(`#max-price`).value;

      handler(checkboxNames, minPrice, maxPrice);
    }));
  }

  _subscribeOnEvents() {
    const element = this.getElement();
    const filtersByType = this._filtersByType;
    const filtersByStrings = this._filtersByStrings;

    element.querySelector(`.form__price-fieldset`).addEventListener(`change`, () => {
      const minPrice = element.querySelector(`#min-price`);
      const maxPrice = element.querySelector(`#max-price`);

      if (maxPrice.value &&
          minPrice.value &&
          Number(maxPrice.value) < Number(minPrice.value)
      ) {
        minPrice.value = maxPrice.value;
        maxPrice.value = minPrice.value;
      }

      if (minPrice.value < 0) {
        minPrice.value = 0;
      }

      if (maxPrice.value < 0) {
        maxPrice.value = 0;
      }
    });

    element.querySelector(`.guitar-type`).addEventListener(`change`, (evt) => {
      if (evt.target.tagName !== `INPUT`) {
        return;
      }
      filtersByType.checkboxes.forEach((checkbox) => {
        if (checkbox.item === evt.target.dataset.label) {
          checkbox.isChecked = evt.target.checked;
        }
      });
    });

    element.querySelector(`.strings-number`).addEventListener(`change`, (evt) => {
      if (evt.target.tagName !== `INPUT`) {
        return;
      }
      filtersByStrings.checkboxes.forEach((checkbox) => {
        if (checkbox.item === evt.target.dataset.label) {
          checkbox.isChecked = evt.target.checked;
        }
      });
    });
  }
}
