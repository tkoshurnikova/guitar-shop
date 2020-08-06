import AbstractComponent from './abstract-component.js';
import {SortType} from '../const.js';

const createSortTemplate = (featureSortType, directionSortType) => {
  return (
    `<div class="catalog__sort-buttons">
      Сортировать:
      <button
        class="${featureSortType === SortType.PRICE ? `catalog__sort-buttons--active` : ``}"
        data-sort-type="${SortType.PRICE}"
        type="button"
      >
        по цене
      </button>
      <button
        class="${featureSortType === SortType.POPULARITY ? `catalog__sort-buttons--active` : ``}"
        data-sort-type="${SortType.POPULARITY}"
        type="button"
      >
        по популярности
      </button>
      <div class="sort-arrows">
        <button
          class="${directionSortType === SortType.ASCENDING ? `sort-arrows__active-element` : ``}"
          data-sort-type="${SortType.ASCENDING}"
          type="button"
        >
          <span class="visually-hidden">по возрастанию</span>
        </button>
        <button
          class="${directionSortType === SortType.DESCENDING ? `sort-arrows__active-element` : ``}"
          data-sort-type="${SortType.DESCENDING}"
          type="button"
        >
          <span class="visually-hidden">по убыванию</span>
        </button>
      </div>
    </div>`
  );
};


export default class Sort extends AbstractComponent {
  constructor(currentSortFeatureType, currentSortDirectionType) {
    super();
    this._currentSortFeatureType = currentSortFeatureType;
    this._currentSortDirectionType = currentSortDirectionType;
  }

  getTemplate() {
    return createSortTemplate(this._currentSortFeatureType, this._currentSortDirectionType);
  }

  setSortFeatureTypeChangeHandler(handler) {
    this.getElement().addEventListener(`click`, (evt) => {

      if (evt.target.tagName !== `BUTTON`) {
        return;
      }

      const sortType = evt.target.dataset.sortType;
      const parentElement = evt.target.parentElement;

      if (this._currentSortFeatureType === sortType || !parentElement.classList.contains(`catalog__sort-buttons`)) {
        return;
      }

      handler(sortType);
    });
  }

  setSortDirectionTypeChangeHandler(handler) {
    this.getElement().addEventListener(`click`, (evt) => {

      if (evt.target.tagName !== `BUTTON`) {
        return;
      }

      const sortType = evt.target.dataset.sortType;
      const parentElement = evt.target.parentElement;

      if (this._currentSorDirectionType === sortType || !parentElement.classList.contains(`sort-arrows`)) {
        return;
      }

      handler(sortType);
    });
  }
}
