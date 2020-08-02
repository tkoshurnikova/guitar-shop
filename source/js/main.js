import {GUITARS} from './guitars.js';
import CardsModel from './models/cards.js';

import CardsController from './controllers/cards.js';
import FilterController from './controllers/filter.js';

import CatalogContentComponent from './components/catalog-content.js';
import SortComponent from './components/sort.js';
import PaginationComponent from './components/pagination.js';

import {render, RenderPosition} from './utils/render.js';

const cardsModel = new CardsModel();
cardsModel.setCards(GUITARS);

const catalogSection = document.querySelector(`.catalog`);
const filterController = new FilterController(catalogSection, cardsModel);
filterController.render();

render(catalogSection, new CatalogContentComponent(), RenderPosition.BEFOREEND);

const catalogContentSection = document.querySelector(`.catalog__content`);
render(catalogContentSection, new SortComponent(), RenderPosition.BEFOREEND);

const cardsController = new CardsController(catalogContentSection, cardsModel);
cardsController.render();

render(catalogContentSection, new PaginationComponent(), RenderPosition.BEFOREEND);
