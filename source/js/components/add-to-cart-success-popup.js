import AbstractComponent from './abstract-component.js';

const createAddToCartSuccessPopup = () => {
  return (
    `<div class="popup" id="add-to-cart-success">
      <button class="popup__close-button" type="button">
        <span class="visually-hidden">Закрыть окно</span>
        <svg width="11.66" height="11.66"><use xlink:href="#icon-cross"></use></svg>
      </button>
      <h2>Товар успешно добавлен в корзину</h2>
      <p class="popup__buttons">
        <a class="button button--to-cart" href="cart.html">Перейти в корзину</a>
        <button
          class="button button--shopping"
          type="button"
        >
          Продолжить покупки
        </button>
      </p>
    </div>`
  );
};

export default class AddToCartSuccessPopup extends AbstractComponent {
  getTemplate() {
    return createAddToCartSuccessPopup();
  }
}
