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

const createFilterTemplate = (filtersByType, filtersByStrings) => {
  return (
    `<div>
      ${createCheckboxFieldset(filtersByType)}
      ${createCheckboxFieldset(filtersByStrings)}
    </div>`
  );
};

export default class CheckboxFieldsets extends AbstractComponent {
  constructor(filtersByType, filtersByStrings) {
    super();
    this._filtersByType = filtersByType;
    this._filtersByStrings = filtersByStrings;
    this._subscribeOnEvents();
  }

  getTemplate() {
    return createFilterTemplate(
        this._filtersByType,
        this._filtersByStrings
    );
  }

  setFilterChangeHandler(setFilter, getCards) {
    const element = this.getElement();

    element.addEventListener(`change`, debounce(() => {
      const checkedCheckboxesElements = Array.from(
          element.querySelectorAll(`input:checked`)
      );
      const checkboxNames = checkedCheckboxesElements.map((item) => item.dataset.label);

      setFilter(checkboxNames);
      getCards();
    }));
  }

  _subscribeOnEvents() {
    const element = this.getElement();
    const filtersByType = this._filtersByType;
    const filtersByStrings = this._filtersByStrings;

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
