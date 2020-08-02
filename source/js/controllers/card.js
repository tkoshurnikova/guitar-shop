import CardComponent from '../components/card.js';
import {render, RenderPosition} from '../utils/render.js';
import {openPopup} from '../utils/popup.js';

export default class CardControlled {
  constructor(container) {
    this._container = container;
    this._cardComponent = null;
    this._card = null;
  }

  render(card) {
    this._card = card;
    this._cardComponent = new CardComponent(this._card);
    render(this._container, this._cardComponent, RenderPosition.BEFOREEND);
    this.setCardListeners();
  }

  setCardListeners() {
    this._cardComponent.setBuyButtonClickHandler((evt) => {
      evt.preventDefault();
      const popup = document.querySelector(`#add-to-cart`);
      openPopup(popup);
    });
  }
}
