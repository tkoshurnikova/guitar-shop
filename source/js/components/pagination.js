import AbstractComponent from './abstract-component.js';
import {createArray} from '../utils/format.js';

const createPageElement = (page, activePage) => {
  return (
    `<li class="pagination__item ${page === activePage ? `pagination__item--active` : ``}">
      ${page === `...` ? page : `<a>${page}</a>`}
    </li>`
  );
};

const createPaginationTemplate = (cards, pagesNumber, activePage) => {
  let pages = createArray(pagesNumber);
  pages.push(4, 5, 6, 7); // чтобы было как в макете
  if (pages.length > 3) {
    pages = [].concat(pages.slice(0, 2), `...`, pages[pages.length - 1]);
  }
  const pagesTemplate = pages.map((pageNumber) => createPageElement(pageNumber, activePage)).join(`\n`);

  return (
    `<ul class="pagination">
      ${pagesTemplate}
      <li class="pagination__item pagination__next">
        <a href="#">Далее</a>
      </li>
    </ul>`
  );
};

export default class Pagination extends AbstractComponent {
  constructor(cards, pagesNumber, activePage) {
    super();
    this._cards = cards;
    this._pagesNumber = pagesNumber;
    this._activePage = activePage;
  }

  getTemplate() {
    return createPaginationTemplate(this._cards, this._pagesNumber, this._activePage);
  }
}
