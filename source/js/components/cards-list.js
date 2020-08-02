import AbstractComponent from './abstract-component.js';

const createCardsListTemplate = () => {
  return (
    `<ul class="catalog__list">
    </ul>`
  );
};

export default class CardsList extends AbstractComponent {
  getTemplate() {
    return createCardsListTemplate();
  }
}
