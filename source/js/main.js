import {createCardTemplate} from './components/card.js';
import {GUITARS} from './mocks.js';

const CARDS_PER_PAGE = 9;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const catalogList = document.querySelector(`.catalog__list`);
GUITARS.slice(0, CARDS_PER_PAGE).forEach((card) => render(catalogList, createCardTemplate(card), `beforeend`));
