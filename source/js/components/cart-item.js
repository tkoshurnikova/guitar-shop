import AbstractComponent from './abstract-component.js';
import {formatPrice, getImage} from '../utils/format.js';

export const createCartItemTemplate = (card) => {
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
        <input type="number" name="quantity" id="quantity" value="1">
        <label class="visually-hidden" for="quantity">Количество</label>
        <button type="button" id="increase-quantity" data-name="quantity">+</button>
      </div>
      <p
        class="cart__price cart__price--full"
        data-sum="${price}"
      >
        ${formatPrice(price)} ₽
      </p>
    </li>`
  );
};

export default class CartItem extends AbstractComponent {
  constructor(card) {
    super();
    this._card = card;
  }

  getTemplate() {
    return createCartItemTemplate(this._card);
  }

  setDeleteButtonClickHandler(handler) {
    this.getElement()
        .querySelector(`.cart__close-button`)
        .addEventListener(`click`, handler);
  }

  setQuantityChangeHandler(handler) {
    const element = this.getElement();
    const quantityElement = element.querySelector(`#quantity`);
    const totalSumElement = element.querySelector(`.cart__price--full`);

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
      counter = counter > 99 ? 99 : counter;

      totalSumElement.innerHTML = formatPrice(this._card.price * counter) + ` ₽`;
      quantityElement.value = counter;
      totalSumElement.dataset.sum = this._card.price * counter;
      handler();
    });

    quantityElement.addEventListener(`change`, () => {
      let count = Number(quantityElement.value);

      if (!count) {
        this._deleteButtonClickHandler();
      }

      count = count < 1 ? 1 : count;
      count = count > 99 ? 99 : count;
      count = Math.ceil(count);

      totalSumElement.innerHTML = formatPrice(this._card.price * count) + ` ₽`;
      quantityElement.value = count;
      totalSumElement.dataset.sum = this._card.price * count;
      handler();
    });
  }
}
