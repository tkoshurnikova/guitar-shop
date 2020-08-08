import AbstractComponent from './abstract-component.js';
import {formatPrice} from '../utils/format.js';

const createCartSumComponent = (cartSum) => {
  return (
    `<div class="promo__result">
      <p>Всего: ${formatPrice(cartSum)} ₽</p>
      <a class="button button--order" href="https://htmlacademy.ru/">Оформить заказ</a>
    </div>`
  );
};

export default class CartSumComponent extends AbstractComponent {
  constructor(cartSum) {
    super();
    this._cartSum = cartSum;
  }

  getTemplate() {
    return createCartSumComponent(this._cartSum);
  }
}
