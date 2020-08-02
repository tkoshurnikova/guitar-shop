import FilterComponent from '../components/filter.js';
import {render, RenderPosition} from '../utils/render.js';
import {FilterType, Filters} from '../const.js';

export default class FilterController {
  constructor(container, cardsModel) {
    this._container = container;
    this._cardsModel = cardsModel;

    this._activeFilterType = FilterType.ALL;
    this._filterComponent = null;

    this._onFilterChange = this._onFilterChange.bind(this);
  }

  render() {
    const container = this._container;
    this._filterComponent = new FilterComponent(Filters);
    this._filterComponent.setFilterChangetHandler(this._onFilterChange);
    render(container, this._filterComponent, RenderPosition.BEFOREEND);
  }

  _onFilterChange(filterType) {
    this._cardsModel.setFilter(filterType);
    this._activeFilterType = filterType;
  }
}
