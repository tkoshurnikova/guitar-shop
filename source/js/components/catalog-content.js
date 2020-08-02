import AbstractComponent from './abstract-component.js';

const createCatalogContentTemplate = () => {
  return (
    `<div class="catalog__content">
    </div>`
  );
};

export default class CatalogContent extends AbstractComponent {
  getTemplate() {
    return createCatalogContentTemplate();
  }
}
