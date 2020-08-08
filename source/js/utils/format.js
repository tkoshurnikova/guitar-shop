import {IMAGES} from '../const.js';

export const formatPrice = (price) => {
  return price.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, `$1 `);
};

export const createArray = (maxValue) => {
  const array = [];
  for (let i = 1; i <= maxValue; i++) {
    array.push(i);
  }
  return array;
};

export const getImage = (item, type) => {
  return (item < 8) ? `img/guitars/guitar-${item}.png` : IMAGES[type];
};
