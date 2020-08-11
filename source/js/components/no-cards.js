import AbstractComponent from './abstract-component.js';

const createNoCardsComponent = () => {
  return (
    `<div class="no-cards">
      К сожалению,  у нас нет товаров по заданным параметрам
      <button class="button button--reset-filters" type="button">Сбросить фильтры</button>
    </div>`
  );
};

export default class NoCards extends AbstractComponent {
  getTemplate() {
    return createNoCardsComponent();
  }

  setToResetFiltersButtonClickHandler(handler) {
    this.getElement()
        .querySelector(`.button--reset-filters`)
        .addEventListener(`click`, handler);
  }
}
