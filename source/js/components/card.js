import AbstractComponent from './abstract-component.js';
import {formatPrice, getImage} from '../utils/format.js';

export const createCardTemplate = ({item, title, type, popularity, price}) => {
  return (
    `<li>
      <img
        width="68"
        height="190"
        src="${getImage(item, type)}"
        alt="Фото гитары"
      >
      <p>
        <span class="catalog__rating-overlay">
          <span class="catalog__stars">
            <svg width="9.93" height="9.48">
              <use xlink:href="#icon-star"></use>
            </svg>
            <svg width="9.93" height="9.48">
              <use xlink:href="#icon-star"></use>
            </svg>
            <svg width="9.93" height="9.48">
              <use xlink:href="#icon-star"></use>
            </svg>
            <svg width="9.93" height="9.48">
              <use xlink:href="#icon-star"></use>
            </svg>
            <svg width="9.93" height="9.48">
              <use xlink:href="#icon-star"></use>
            </svg>
          </span>
          <span class="catalog__stars--full">
            <svg width="9.93" height="9.48">
              <use xlink:href="#icon-star-full"></use>
            </svg>
            <svg width="9.93" height="9.48">
              <use xlink:href="#icon-star-full"></use>
            </svg>
            <svg width="9.93" height="9.48">
              <use xlink:href="#icon-star-full"></use>
            </svg>
            <svg width="9.93" height="9.48">
              <use xlink:href="#icon-star-full"></use>
            </svg>
            <svg width="9.93" height="9.48">
              <use xlink:href="#icon-star-full"></use>
            </svg>
          </span>
        </span>
        <span>${popularity}</span>
      </p>
      <p>
        <span>${title}</span>
        <span>${formatPrice(price)} ₽</span>
      </p>
      <p>
        <a class="button" href="card-${item}.html">Подробнее</a>
        <button class="button button--buy" type="button">
          <svg width="10.36" height="10.5">
            <use xlink:href="#icon-buy"></use>
          </svg>
          Купить
        </button>
      </p>
    </li>`
  );
};

export default class Card extends AbstractComponent {
  constructor(card) {
    super();
    this._card = card;
  }

  getTemplate() {
    return createCardTemplate(this._card);
  }

  setBuyButtonClickHandler(handler) {
    this.getElement()
        .querySelector(`.button--buy`)
        .addEventListener(`click`, handler);
  }
}
