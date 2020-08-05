import {Filters} from '../const.js';

const getSamePrice = (card, minPrice, maxPrice) => {
  if (minPrice && maxPrice) {
    return Number(card.price) <= maxPrice && Number(card.price) >= minPrice;
  } else if (minPrice) {
    return Number(card.price) >= minPrice;
  } else if (maxPrice) {
    return Number(card.price) <= maxPrice;
  } else {
    return card;
  }
};

export const getSameGuitarType = (cards, checkboxNames, minPrice, maxPrice) => {
  return cards.filter((card) => {
    return checkboxNames.includes(card.type) && getSamePrice(card, minPrice, maxPrice);
  });
};

export const getSameStringsType = (cards, checkboxNames, minPrice, maxPrice) => {
  return cards.filter((card) => {
    return checkboxNames.includes(card.strings) && getSamePrice(card, minPrice, maxPrice);
  });
};

const getSameFilters = (cards, checkboxNames, minPrice, maxPrice) => {
  return cards.filter((card) => {
    return checkboxNames.includes(card.type) && checkboxNames.includes(card.strings) && getSamePrice(card, minPrice, maxPrice);
  });
};

const guitarTypeCheckboxes = Filters[0].checkboxes.map((checkbox) => checkbox.item);
const stringsNumberCheckboxes = Filters[1].checkboxes.map((checkbox) => checkbox.item);

export const getCardsByFilter = (cards, checkboxNames, minPrice, maxPrice) => {
  const guitarTypeCheckedCheckboxes = checkboxNames.filter((filter) => guitarTypeCheckboxes.includes(filter));
  const stirngsNumberCheckedCheckboxes = checkboxNames.filter((filter) => stringsNumberCheckboxes.includes(filter));

  if (checkboxNames.length) {
    if (guitarTypeCheckedCheckboxes.length && !stirngsNumberCheckedCheckboxes.length) {
      return getSameGuitarType(cards, guitarTypeCheckedCheckboxes, minPrice, maxPrice);
    } else if (!guitarTypeCheckedCheckboxes.length && stirngsNumberCheckedCheckboxes.length) {
      return getSameStringsType(cards, stirngsNumberCheckedCheckboxes, minPrice, maxPrice);
    } else {
      return getSameFilters(cards, checkboxNames, minPrice, maxPrice);
    }
  } else {
    return cards;
  }
};
