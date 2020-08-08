import CardComponent from '../components/card.js';
import AddToCartPopup from '../components/add-to-cart-popup.js';
import AddToCartSuccessPopup from '../components/add-to-cart-success-popup.js';
import {render, RenderPosition} from '../utils/render.js';
import {openPopup, closePopup} from '../utils/popup.js';

export default class CardControlled {
  constructor(container, addToCart) {
    this._container = container;
    this._addToCart = addToCart;

    this._cardComponent = null;
    this._addToCartPopup = null;
    this._addToCartSuccessPopup = null;
    this._card = null;
  }

  render(card) {
    this._card = card;
    this._cardComponent = new CardComponent(this._card);
    render(this._container, this._cardComponent, RenderPosition.BEFOREEND);
    this.setCardListeners();
  }

  setCardListeners() {
    this._cardComponent.setBuyButtonClickHandler(() => {
      const bodyElement = document.querySelector(`body`);
      this._addToCartPopup = new AddToCartPopup(this._card);
      const popup = this._addToCartPopup;
      render(bodyElement, popup, RenderPosition.BEFOREEND);
      const addToCartButton = popup.getElement().querySelector(`.button--to-cart`);
      this.setPopupListeners(this._card);
      openPopup(popup);
      addToCartButton.addEventListener(`click`, () => {
        closePopup(popup);
        const overlay = document.querySelector(`.overlay`);
        overlay.classList.remove(`overlay--hidden`);
        bodyElement.classList.add(`no-scroll`);
      });
    });
  }

  setPopupListeners(card) {
    this._addToCartPopup.setToCartButtonClickHandler(() => {
      this._addToCart(card);
      const bodyElement = document.querySelector(`body`);
      this._addToCartSuccessPopup = new AddToCartSuccessPopup();
      const popup = this._addToCartSuccessPopup;
      render(bodyElement, popup, RenderPosition.BEFOREEND);
      const continueShoppingButton = popup.getElement().querySelector(`.button--shopping`);
      openPopup(popup);
      continueShoppingButton.addEventListener(`click`, () => {
        closePopup(popup);
      });
    });
  }
}
