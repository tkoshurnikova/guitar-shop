import AbstractComponent from './abstract-component.js';

const createCart = () => {
  return (
    `<section class="cart">
      <h2 class="visually-hidden">Список товаров</h2>
      <ul>
      </ul>
      <section class="promo">
      </section>
    </section>`
  );
};

export default class Cart extends AbstractComponent {
  getTemplate() {
    return createCart();
  }
}
