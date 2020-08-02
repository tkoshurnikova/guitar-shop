import AbstractComponent from './abstract-component.js';

const createPaginationTemplate = () => {
  return (
    `<ul class="pagination">
      <li class="pagination__item pagination__item--active">
        <a>1</a>
      </li>
      <li class="pagination__item">
        <a href="#">2</a>
      </li>
      <li class="pagination__item">...</li>
      <li class="pagination__item">
        <a href="#">7</a>
      </li>
      <li class="pagination__item">
        <a href="#">Далее</a>
      </li>
    </ul>`
  );
};

export default class Pagination extends AbstractComponent {
  getTemplate() {
    return createPaginationTemplate();
  }
}
