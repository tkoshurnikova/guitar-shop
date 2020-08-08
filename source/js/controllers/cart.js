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
    this._cartItemContollers = [];
    this._cards = JSON.parse(localStorage.getItem(`session`));
    this._removeFromCart = this._removeFromCart.bind(this);
    this._changeItemQuantity = this._changeItemQuantity.bind(this);
    this._promoForm = null;
    this._cartSumComponent = null;
    this._cartSum = 0;
    this._checkPromocode = this._checkPromocode.bind(this);
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
    const cartList = document.querySelector(`.cart ul`);
    const renderCartItemControllers = () => {
      const cartItemControllers = [];
      cards.forEach((card) => {
        const cartItemController = new CartItemController(cartList, this._removeFromCart, this._changeItemQuantity);
        cartItemController.render(card);
        cartItemControllers.push(cartItemController);
      });
      return cartItemControllers;
    };

    this._cartItemContollers = renderCartItemControllers();
  }

  _renderPromoForm() {
    const container = this._cartComponent.getElement().querySelector(`.promo`);
    this._promoForm = new PromoForm();
    render(container, this._promoForm, RenderPosition.AFTERBEGIN);
    this._promoForm.setSubmitHandler(this._checkPromocode);
  }

  _getCartSum() {
    const itemSumBlocks = Array.from(this._cartComponent.getElement().querySelectorAll(`.cart__price--full`));
    const itemSums = itemSumBlocks.map((itemSumBlock) => Number(itemSumBlock.dataset.sum));
    const cartSum = itemSums.reduce((sum, value) => {
      return sum + value;
    }, 0);
    this._cartSum = cartSum;
  }

  _renderCartSum() {
    const container = this._cartComponent.getElement().querySelector(`.promo`);
    this._cartSumComponent = new CartSumComponent(this._cartSum);
    render(container, this._cartSumComponent, RenderPosition.BEFOREEND);
  }

  _setCartItemCount() {
    const cartItems = document.querySelector(`.page-header__cart-items sup`);
    let cartItemsCounter = Number(cartItems.textContent);
    cartItemsCounter = JSON.parse(localStorage.getItem(`session`)).length;

    if (cartItemsCounter > 0) {
      cartItems.parentElement.classList.remove(`visually-hidden`);
    } else {
      cartItems.parentElement.classList.add(`visually-hidden`);
    }

    cartItems.innerHTML = cartItemsCounter;
  }

  _removeCartItems() {
    const cartList = document.querySelector(`.cart ul`);
    cartList.innerHTML = ``;
    this._cartItemContollers = [];
  }

  _checkPromocode(code) {
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
        this._cartSum = this._cartSum;
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
