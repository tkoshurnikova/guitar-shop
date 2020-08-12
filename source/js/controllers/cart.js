import CartComponent from '../components/cart.js';
import PromoForm from '../components/promo.js';
import CartSumComponent from '../components/cart-sum.js';
import CartItemController from './cart-item.js';
import {render, remove, RenderPosition} from '../utils/render.js';
import {deleteDataFromLocalStorage} from '../utils/local-storage.js';
import {PromoCodes} from '../const.js';

export default class CartController {
  constructor(container) {
    this._container = container;
    this._cartComponent = new CartComponent();
    this._cartItemControllers = [];
    this._cards = JSON.parse(localStorage.getItem(`session`));
    this._removeFromCart = this._removeFromCart.bind(this);
    this._changeItemQuantity = this._changeItemQuantity.bind(this);
    this._promoForm = null;
    this._cartSumComponent = null;
    this._cartSum = 0;
    this._checkPromoCode = this._checkPromoCode.bind(this);
  }

  render() {
    const container = this._container;
    render(container, this._cartComponent, RenderPosition.BEFOREEND);
    this._renderCartItems(this._cards);
    this._setCartItemCount();
    this._renderPromoForm();
    this._getCartSum();
    this._renderCartSum();
  }

  _renderCartItems(cards) {
    if (!localStorage.getItem(`session`)) {
      return;
    }

    const cartListElement = document.querySelector(`.cart ul`);
    const renderCartItemControllers = () => {
      const cartItemControllers = [];
      cards.forEach((card) => {
        const cartItemController = new CartItemController(
            cartListElement,
            this._removeFromCart,
            this._changeItemQuantity
        );
        cartItemController.render(card);
        cartItemControllers.push(cartItemController);
      });
      return cartItemControllers;
    };

    this._cartItemControllers = renderCartItemControllers();
  }

  _renderPromoForm() {
    const containerElement = this._cartComponent.getElement().querySelector(`.promo`);
    this._promoForm = new PromoForm();
    render(containerElement, this._promoForm, RenderPosition.AFTERBEGIN);
    this._promoForm.setSubmitHandler(this._checkPromoCode);
  }

  _getCartSum() {
    const itemSumBlocksElements = Array.from(
        this._cartComponent.getElement().querySelectorAll(`.cart__price--full`)
    );
    const itemSums = itemSumBlocksElements.map((itemSumBlock) =>
      Number(itemSumBlock.dataset.sum)
    );
    this._cartSum = itemSums.reduce((sum, value) => {
      return sum + value;
    }, 0);
  }

  _renderCartSum() {
    const containerElement = this._cartComponent.getElement().querySelector(`.promo`);
    this._cartSumComponent = new CartSumComponent(this._cartSum);
    render(containerElement, this._cartSumComponent, RenderPosition.BEFOREEND);
  }

  _setCartItemCount() {
    if (!localStorage.getItem(`session`)) {
      return;
    }

    const cartItemsElement = document.querySelector(`.page-header__cart-items sup`);
    let cartItemsCounter = JSON.parse(localStorage.getItem(`session`)).length;

    if (cartItemsCounter > 0) {
      cartItemsElement.parentElement.classList.remove(`visually-hidden`);
    } else {
      cartItemsElement.parentElement.classList.add(`visually-hidden`);
    }

    cartItemsElement.innerHTML = cartItemsCounter;
  }

  _removeCartItems() {
    const cartListElement = document.querySelector(`.cart ul`);
    cartListElement.innerHTML = ``;
    this._cartItemControllers = [];
  }

  _checkPromoCode(code) {
    switch (code) {

      case PromoCodes.GITARAHIT:
        this._cartSum = this._cartSum * 0.9;
        break;

      case PromoCodes.SUPERGITARA:
        this._cartSum = this._cartSum - 700;
        break;

      case PromoCodes.GITARA2020:
        const discount = ((this._cartSum * 0.3) > 3500) ? 3500 : this._cartSum * 0.3;
        this._cartSum = this._cartSum - discount;
        break;

      default:
        return;
    }

    remove(this._cartSumComponent);
    this._renderCartSum();
  }

  _update() {
    this._removeCartItems();
    const cards = JSON.parse(localStorage.getItem(`session`));
    this._renderCartItems(cards);
  }

  _removeFromCart(card) {
    deleteDataFromLocalStorage(card);
    this._setCartItemCount();
    this._update();
    remove(this._cartSumComponent);
    this._getCartSum();
    this._renderCartSum();
  }

  _changeItemQuantity() {
    if (this._cartSumComponent) {
      remove(this._cartSumComponent);
      this._getCartSum();
      this._renderCartSum();
    }
  }
}
