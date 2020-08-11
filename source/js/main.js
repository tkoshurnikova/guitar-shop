import {GUITARS} from './guitars.js';
import CardsModel from './models/cards.js';

import CardsController from './controllers/cards.js';
import CartController from './controllers/cart.js';

import CatalogContentComponent from './components/catalog-content.js';

import {render, RenderPosition} from './utils/render.js';

const cardsModel = new CardsModel();
cardsModel.setCards(GUITARS);

const catalogSectionElement = document.querySelector(`.catalog`);
const cartSectionElement = document.querySelector(`.page-main--cart`);

if (catalogSectionElement) {
  render(catalogSectionElement, new CatalogContentComponent(), RenderPosition.BEFOREEND);
  const catalogContentSection = document.querySelector(`.catalog__content`);
  const cardsController = new CardsController(catalogContentSection, cardsModel);
  cardsController.render();
}

if (cartSectionElement) {
  const cartController = new CartController(cartSectionElement);
  cartController.render();
}
