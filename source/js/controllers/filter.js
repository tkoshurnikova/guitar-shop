import FilterComponent from '../components/filter.js';
import {render, replace, RenderPosition} from '../utils/render.js';
import {Filters} from '../const.js';

export default class FilterController {
  constructor(container, cardsModel) {
    this._container = container;
    this._cardsModel = cardsModel;

    this._filterComponent = null;
    this._onFilterChange = this._onFilterChange.bind(this);
  }

  render() {
    const container = this._container;
    const oldComponent = this._filterComponent;
    const cards = this._cardsModel.getCards();

    const strings = cards.map((card) => card.strings);
    Filters[1].checkboxes.forEach((checkbox) => {
      if (strings.indexOf(checkbox.item) === -1) {
        checkbox.isDisabled = true;
      } else {
        checkbox.isDisabled = false;
      }
    });

    this._filterComponent = new FilterComponent(Filters, cards);
    this._filterComponent.setFilterChangeHandler(this._onFilterChange);

    if (oldComponent) {
      replace(this._filterComponent, oldComponent);
    } else {
      render(container, this._filterComponent, RenderPosition.BEFOREEND);
    }
  }

  _onFilterChange() {
    this._cardsModel.setFilter();
    this.render();
  }
}
