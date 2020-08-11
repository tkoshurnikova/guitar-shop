import AbstractSmartComponent from './abstract-smart-component.js';
import {PromoCodes} from '../const.js';

const createPromoForm = () => {
  return (
    `<form method="post">
      <h3>Промокод на скидку</h3>
      <p>Введите свой промокод, если он у вас есть.</p>
      <p class="promo__coupon">
        <input type="text" name="promo" id="promo">
        <label class="visually-hidden" for="promo">Промокод</label>
        <button class="button button--promo" type="submit">Применить купон</button>
        <p class="visually-hidden" id="not-valid-promocode">Промокод не действителен</p>
      </p>
    </form>`
  );
};

export default class PromoForm extends AbstractSmartComponent {
  constructor() {
    super();
    this._promocode = null;
    this._promocodeUsage = 0;
    this._subscribeOnEvents();
  }

  getTemplate() {
    return createPromoForm();
  }

  setSubmitHandler(handler) {
    this.getElement().addEventListener(`submit`, (evt) => {
      evt.preventDefault();
      if (!this._promocodeUsage) {
        handler(this._promocode);
      }

      if (this.isValidPromocode()) {
        this._promocodeUsage += 1;
        this.getElement()
            .querySelector(`#not-valid-promocode`)
            .classList.add(`visually-hidden`);
      } else {
        this.getElement()
            .querySelector(`#not-valid-promocode`)
            .classList.remove(`visually-hidden`);
      }
    });
  }

  isValidPromocode() {
    const promocodes = Object.values(PromoCodes);
    const index = promocodes.indexOf(this._promocode);
    return index >= 0;
  }

  _subscribeOnEvents() {
    this.getElement()
        .querySelector(`input`)
        .addEventListener(`change`, () => {
          this._promocode = this.getElement().querySelector(`input`).value;
        });
  }
}
