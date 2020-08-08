import FilterComponent from '../components/filter.js';
import {render, replace, RenderPosition} from '../utils/render.js';
import {Filters} from '../const.js';
import {getSameStringsType} from '../utils/filter.js';

export default class FilterController {
  constructor(container, cardsModel) {
    this._container = container;
    this._cardsModel = cardsModel;

    this._checkedCheckboxes = [];
    this._minPrice = null;
    this._maxPrice = null;

    this._filterComponent = null;
    this._onFilterChange = this._onFilterChange.bind(this);
  }

  render() {
    const container = this._container;
    const oldComponent = this._filterComponent;
    const cards = this._cardsModel.getCards();
    const minPrice = this._minPrice;
    const maxPrice = this._maxPrice;

    const guitarTypeCheckboxes = Filters[0].checkboxes.map((checkbox) => checkbox.item);
    const guitarTypeCheckedCheckboxes = this._checkedCheckboxes.filter((filter) => guitarTypeCheckboxes.includes(filter));

    Filters[1].checkboxes.forEach((checkbox) => {
      const arrayLength = getSameStringsType(this._cardsModel.getCardsByGuitarTypeFilter(), checkbox.item).length;
      checkbox.isDisabled = (arrayLength === 0 && guitarTypeCheckedCheckboxes.length) ? true : false;
    });

    this._filterComponent = new FilterComponent(Filters, cards, minPrice, maxPrice);
    this._filterComponent.setFilterChangeHandler(this._onFilterChange);

    if (oldComponent) {
      replace(this._filterComponent, oldComponent);
    } else {
      render(container, this._filterComponent, RenderPosition.AFTERBEGIN);
    }
  }

  _onFilterChange(checkboxNames, minPrice, maxPrice) {
    this._cardsModel.setFilter(checkboxNames, minPrice, maxPrice);
    this._checkedCheckboxes = checkboxNames;
    this._minPrice = minPrice;
    this._maxPrice = maxPrice;
    this.render();
  }
}
