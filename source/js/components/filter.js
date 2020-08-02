import AbstractComponent from './abstract-component.js';
import {debounce} from '../utils/debounce.js';

const createCheckboxMarkup = (type, item) => {
  return (
    `<input
    class="visually-hidden"
    type="checkbox"
    name="${type}"
    id="${item.type}"
    aria-label="${item.label}"
    ${item.isChecked ? `checked` : ``}
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
  const checkboxMarkup = filter.checkboxes.map((item) => createCheckboxMarkup(filter.type, item)).join(`\n`);

  return (
    `<fieldset class="form__checkbox-fieldset ${filter.type}">
      <legend>${filter.title}</legend>
      ${checkboxMarkup}
    </fieldset>`
  );
};

const createFilterTemplate = (filters) => {
  const checkboxFieldsets = filters.map((filter) => createCheckboxFieldset(filter)).join(`\n`);

  return (
    `<form class="form" method="post">
      <h3>Фильтр</h3>
      <fieldset class="form__price-fieldset">
        <legend>Цена, <span>₽</span></legend>
        <p>
          <input type="number" name="price" id="min-price" placeholder="1 000">
          <label class="visually-hidden" for="min-price">Цена от</label>
          <input type="number" name="price" id="max-price" placeholder="30 000">
          <label class="visually-hidden" for="max-price">Цена до</label>
        </p>
      </fieldset>
      ${checkboxFieldsets}
    </form>`
  );
};

export default class Filter extends AbstractComponent {
  constructor(filters) {
    super();
    this._filters = filters;
  }

  getTemplate() {
    return createFilterTemplate(this._filters);
  }

  setFilterChangetHandler(handler) {
    this.getElement().addEventListener(`change`, debounce((evt) => {
      const filterName = evt.target.name;
      handler(filterName);
    }));
  }
}
