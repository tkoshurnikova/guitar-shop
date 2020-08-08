import AbstractComponent from './abstract-component.js';
import {formatPrice, getImage} from '../utils/format.js';

const createAddToCartPopup = ({item, title, article, strings, price, type}) => {
  return (
    `<div class="popup" id="add-to-cart">
      <button class="popup__close-button" type="button">
        <span class="visually-hidden">Закрыть окно</span>
        <svg width="11.66" height="11.66"><use xlink:href="#icon-cross"></use></svg>
      </button>
      <h2>Добавить товар в корзину</h2>
      <div class="popup__content-info">
        <img src="${getImage(item, type)}" width="52" height="130" alt="Фото гитары">
        <div class="popup__item-info">
          <h3>Гитара ${title}</h3>
          <p>Артикул: ${article}</p>
          <p>Электрогитара, ${strings} струнная </p>
          <p class="popup__price">Цена: ${formatPrice(price)} ₽</p>
        </div>
        <button class="button button--to-cart" type="button">Добавить в корзину</button>
      </div>
    </div>
    `
  );
};

export default class AddToCartPopup extends AbstractComponent {
  constructor(card) {
    super();
    this._card = card;
  }

  getTemplate() {
    return createAddToCartPopup(this._card);
  }

  setToCartButtonClickHandler(handler) {
    this.getElement().querySelector(`.button--to-cart`).addEventListener(`click`, handler);
  }
}
