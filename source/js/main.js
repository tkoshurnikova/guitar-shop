import {GUITARS} from './guitars.js';
import CardsModel from './models/cards.js';

import CardsController from './controllers/cards.js';
import FilterController from './controllers/filter.js';

import CatalogContentComponent from './components/catalog-content.js';

import {render, RenderPosition} from './utils/render.js';

const cardsModel = new CardsModel();
cardsModel.setCards(GUITARS);

const catalogSection = document.querySelector(`.catalog`);
const filterController = new FilterController(catalogSection, cardsModel);
filterController.render();

render(catalogSection, new CatalogContentComponent(), RenderPosition.BEFOREEND);

const catalogContentSection = document.querySelector(`.catalog__content`);
const cardsController = new CardsController(catalogContentSection, cardsModel);
cardsController.render();
