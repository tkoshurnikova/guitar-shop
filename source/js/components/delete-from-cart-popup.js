import AbstractComponent from './abstract-component.js';
import {formatPrice, getImage} from '../utils/format.js';

const createDeleteFromCartPopup = ({item, title, article, strings, price, type}) => {
  return (
    `<div class="popup">
      <button class="popup__close-button" type="button">
        <span class="visually-hidden">Закрыть окно</span>
        <svg width="11.66" height="11.66"><use xlink:href="#icon-cross"></use></svg>
      </button>
      <h2>Удалить этот товар?</h2>
      <div class="popup__content-info">
        <img src="${getImage(item, type)}" width="52" height="130" alt="Фото гитары">
        <div class="popup__item-info">
          <h3>Гитара ${title}</h3>
          <p>Артикул: ${article}</p>
          <p>Электрогитара, ${strings} струнная </p>
          <p class="popup__price">Цена: ${formatPrice(price)} ₽</p>
        </div>
        <p class="popup__buttons popup__buttons--vertical">
          <button class="button button--delete" type="button">Удалить товар</button>
          <button class="button button--shopping" type="button">Продолжить покупки</button>
        </p>
      </div>
    </div>`
  );
};

export default class DeleteFromCartPopup extends AbstractComponent {
  constructor(card) {
    super();
    this._card = card;
  }

  getTemplate() {
    return createDeleteFromCartPopup(this._card);
  }

  setDeleteButtonClickHandler(handler) {
    this.getElement().querySelector(`.button--delete`).addEventListener(`click`, handler);
  }
}
