import AbstractComponent from './abstract-component.js';

const createSortTemplate = () => {
  return (
    `<div class="catalog__sort-buttons">
      Сортировать:
      <button type="button">по цене</button>
      <button type="button">по популярности</button>
      <div class="sort-arrows">
        <button type="button"><span class="visually-hidden">по возрастанию</span></button>
        <button type="button"><span class="visually-hidden">по убыванию</span></button>
      </div>
    </div>`
  );
};


export default class Sort extends AbstractComponent {
  constructor() {
    super();
  }

  getTemplate() {
    return createSortTemplate();
  }
}
