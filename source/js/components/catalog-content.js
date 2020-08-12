import AbstractComponent from './abstract-component.js';

const createCatalogContentTemplate = () => {
  return (
    `<div class="catalog__content">
      <h2 class="visually-hidden">Товары</h2>
    </div>`
  );
};

export default class CatalogContent extends AbstractComponent {
  getTemplate() {
    return createCatalogContentTemplate();
  }
}
