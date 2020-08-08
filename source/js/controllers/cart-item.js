import CartItemComponent from '../components/cart-item.js';
import DeleteFromCartPopup from '../components/delete-from-cart-popup.js';
import {render, RenderPosition} from '../utils/render.js';
import {openPopup, closePopup} from '../utils/popup.js';

export default class CartItemController {
  constructor(container, removeFromCart, changeItemQuantity) {
    this._container = container;
    this._removeFromCart = removeFromCart;
    this._changeItemQuantity = changeItemQuantity;

    this._cariItemComponent = null;
    this._card = null;
  }

  render(card) {
    this._card = card;
    this._cartItemComponent = new CartItemComponent(this._card);
    render(this._container, this._cartItemComponent, RenderPosition.BEFOREEND);
    this.setCartItemListeners();
  }

  setCartItemListeners() {
    this._cartItemComponent.setQuantityChangeHandler(this._changeItemQuantity);

    this._cartItemComponent.setDeleteButtonClickHandler(() => {
      const bodyElement = document.querySelector(`body`);

      this._deleteFromCartPopup = new DeleteFromCartPopup(this._card);
      const popup = this._deleteFromCartPopup;
      render(bodyElement, popup, RenderPosition.BEFOREEND);
      const cancelButton = popup.getElement().querySelector(`.button--shopping`);
      this.setPopupListeners(this._card);
      openPopup(popup);
      cancelButton.addEventListener(`click`, () => {
        closePopup(popup);
      });
    });
  }

  setPopupListeners(card) {
    this._deleteFromCartPopup.setDeleteButtonClickHandler(() => {
      this._removeFromCart(card);
      closePopup(this._deleteFromCartPopup);
    });
  }
}
