import FilterComponent from '../components/filter.js';
import {render, RenderPosition} from '../utils/render.js';
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
    const cards = this._cardsModel.getCardsAll();

    this._filterComponent = new FilterComponent(Filters, cards);
    this._filterComponent.setFilterChangeHandler(this._onFilterChange);
    render(container, this._filterComponent, RenderPosition.BEFOREEND);
  }

  _onFilterChange() {
    this._cardsModel.setFilter();
  }
}
