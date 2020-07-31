import {formatPrice} from '../utils.js';

export const createCardTemplate = ({item, title, price}) => {
  return (
    `<li>
      <img width="68" height="190" src="img/guitars/guitar-${item}.png" alt="Фото гитары">
      <p>
        <span class="catalog__rating-overlay">
          <span class="catalog__stars">
            <svg width="9.93" height="9.48"><use xlink:href="#icon-star"></use></svg>
            <svg width="9.93" height="9.48"><use xlink:href="#icon-star"></use></svg>
            <svg width="9.93" height="9.48"><use xlink:href="#icon-star"></use></svg>
            <svg width="9.93" height="9.48"><use xlink:href="#icon-star"></use></svg>
            <svg width="9.93" height="9.48"><use xlink:href="#icon-star"></use></svg>
          </span>
          <span class="catalog__stars--full">
            <svg width="9.93" height="9.48"><use xlink:href="#icon-star-full"></use></svg>
            <svg width="9.93" height="9.48"><use xlink:href="#icon-star-full"></use></svg>
            <svg width="9.93" height="9.48"><use xlink:href="#icon-star-full"></use></svg>
            <svg width="9.93" height="9.48"><use xlink:href="#icon-star-full"></use></svg>
            <svg width="9.93" height="9.48"><use xlink:href="#icon-star-full"></use></svg>
          </span>
        </span>
        <span>15</span>
      </p>
      <p>
        <span>${title}</span>
        <span>${formatPrice(price)} ₽</span>
      </p>
      <p>
        <a class="button" href="https://htmlacademy.ru/">Подробнее</a>
        <button class="button button--buy" type="button">
          <svg width="10.36" height="10.5"><use xlink:href="#icon-buy"></use></svg>
          Купить
        </button>
      </p>
    </li>`
  );
};
