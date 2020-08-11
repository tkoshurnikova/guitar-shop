import AbstractSmartComponent from './abstract-smart-component.js';
import {formatPrice, getImage} from '../utils/format.js';

export const createCartItemTemplate = (card, quantity) => {
  const {item, article, title, type, strings, price} = card;

  return (
    `<li>
      <button class="cart__close-button" type="button">
        <span class="visually-hidden">Удалить из корзины</span>
        <svg width="11.66" height="11.66"><use xlink:href="#icon-cross"></use></svg>
      </button>
      <img src="${getImage(item, type)}" width="52" height="130" alt="Фото гитары">
      <div class="cart__item-info">
        <h3>Электрогитара ${title}</h3>
        <p>Артикул: ${article}</p>
        <p>Электрогитара, ${strings} струнная </p>
      </div>
      <p class="cart__price">${formatPrice(price)} ₽</p>
      <div class="cart__quantity">
        <button type="button" id="decrease-quantity" data-name="quantity">-</button>
        <input type="number" name="quantity" id="quantity" value="${quantity}">
        <label class="visually-hidden" for="quantity">Количество</label>
        <button type="button" id="increase-quantity" data-name="quantity">+</button>
      </div>
      <p
        class="cart__price cart__price--full"
        data-sum="${price * quantity}"
      >
        ${formatPrice(price * quantity)} ₽
      </p>
    </li>`
  );
};

export default class CartItem extends AbstractSmartComponent {
  constructor(card) {
    super();
    this._card = card;
    this._quantity = 1;
    this._deleteButtonClickHandler = null;
    this._quantityChangeHandler = null;
  }

  getTemplate() {
    return createCartItemTemplate(this._card, this._quantity);
  }

  rerender() {
    super.rerender();
  }

  setDeleteButtonClickHandler(handler) {
    this.getElement()
        .querySelector(`.cart__close-button`)
        .addEventListener(`click`, handler);
    this._deleteButtonClickHandler = handler;
  }

  setQuantityChangeHandler(handler) {
    const element = this.getElement();
    const quantityElement = element.querySelector(`#quantity`);

    element.querySelector(`.cart__quantity`).addEventListener(`click`, (evt) => {

      let counter = Number(quantityElement.value);

      if (evt.target.dataset.name !== `quantity`) {
        return;
      }

      if (evt.target.id === `decrease-quantity`) {
        counter -= 1;
      }

      if (evt.target.id === `increase-quantity`) {
        counter += 1;
      }

      if (!counter) {
        this._deleteButtonClickHandler();
      }

      counter = counter < 1 ? 1 : counter;
      this._quantity = counter;
      this.rerender();
    });

    quantityElement.addEventListener(`change`, () => {
      let count = Number(quantityElement.value);

      if (!count) {
        this._deleteButtonClickHandler();
      }

      count = count < 1 ? 1 : count;
      count = Math.ceil(count);
      this._quantity = count;
      this.rerender();
    });

    handler();
    this._quantityChangeHandler = handler;
  }

  recoveryListeners() {
    this.setDeleteButtonClickHandler(this._deleteButtonClickHandler);
    this.setQuantityChangeHandler(this._quantityChangeHandler);
  }
}
