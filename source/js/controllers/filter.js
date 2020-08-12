import FilterComponent from '../components/filter.js';
import CheckboxFieldsets from '../components/checkbox-fieldsets.js';
import {render, replace, remove, RenderPosition} from '../utils/render.js';
import {FILTERS_BY_TYPE, FILTERS_BY_STRINGS} from '../const.js';
import {getSameStringsType} from '../utils/filter.js';

export default class FilterController {
  constructor(container, cardsModel) {
    this._container = container;
    this._cardsModel = cardsModel;

    this._filterComponent = null;
    this._checkboxFieldsetsComponent = null;
    this._onPriceChange = this._onPriceChange.bind(this);
    this._onCheckboxChange = this._onCheckboxChange.bind(this);
    this._onFilterChange = this._onFilterChange.bind(this);

    this._checkedCheckboxes = [];
    this._minPrice = null;
    this._maxPrice = null;
  }

  render() {
    const container = this._container;
    const cards = this._cardsModel.getCards();

    this._filterComponent = new FilterComponent(cards);
    this._filterComponent.setFilterChangeHandler(this._onPriceChange, this._onFilterChange);

    render(container, this._filterComponent, RenderPosition.AFTERBEGIN);
    this._renderCheckboxFieldsets();
  }

  remove() {
    this._checkedCheckboxes = [];
    this._minPrice = null;
    this._maxPrice = null;

    remove(this._filterComponent);
    remove(this._checkboxFieldsetsComponent);

    this._filterComponent = null;
    this._checkboxFieldsetsComponent = null;

    FILTERS_BY_TYPE.checkboxes.forEach((checkbox) => {
      checkbox.isChecked = false;
    });

    FILTERS_BY_STRINGS.checkboxes.forEach((checkbox) => {
      checkbox.isChecked = false;
    });
  }

  _renderCheckboxFieldsets() {
    const container = this._filterComponent.getElement();
    const oldComponent = this._checkboxFieldsetsComponent;

    const guitarTypeCheckboxes = FILTERS_BY_TYPE.checkboxes.map((checkbox) => checkbox.item);
    const guitarTypeCheckedCheckboxes = this._checkedCheckboxes.filter(
        (filter) => guitarTypeCheckboxes.includes(filter)
    );

    FILTERS_BY_STRINGS.checkboxes.forEach((checkbox) => {
      const arrayLength = getSameStringsType(
          this._cardsModel.getCardsByGuitarTypeFilter(),
          checkbox.item
      ).length;
      checkbox.isDisabled = (arrayLength === 0 && guitarTypeCheckedCheckboxes.length);
    });

    this._checkboxFieldsetsComponent = new CheckboxFieldsets(FILTERS_BY_TYPE, FILTERS_BY_STRINGS);
    this._checkboxFieldsetsComponent.setFilterChangeHandler(this._onCheckboxChange, this._onFilterChange);

    if (oldComponent) {
      replace(this._checkboxFieldsetsComponent, oldComponent);
    } else {
      render(container, this._checkboxFieldsetsComponent, RenderPosition.BEFOREEND);
    }
  }

  _onPriceChange(minPrice, maxPrice) {
    this._minPrice = minPrice;
    this._maxPrice = maxPrice;
  }

  _onCheckboxChange(checkboxNames) {
    this._checkedCheckboxes = checkboxNames;
  }

  _onFilterChange() {
    this._cardsModel.setFilter(
        this._checkedCheckboxes,
        this._minPrice,
        this._maxPrice
    );
    this._renderCheckboxFieldsets();
  }
}
