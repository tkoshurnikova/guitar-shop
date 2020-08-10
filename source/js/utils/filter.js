import {FILTERS_BY_TYPE, FILTERS_BY_STRINGS} from '../const.js';

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
    return checkboxNames.includes(card.type) &&
    getSamePrice(card, minPrice, maxPrice);
  });
};

export const getSameStringsType = (cards, checkboxNames, minPrice, maxPrice) => {
  return cards.filter((card) => {
    return checkboxNames.includes(card.strings) &&
    getSamePrice(card, minPrice, maxPrice);
  });
};

const getSameFilters = (cards, checkboxNames, minPrice, maxPrice) => {
  return cards.filter((card) => {
    return checkboxNames.includes(card.type) &&
    checkboxNames.includes(card.strings) &&
    getSamePrice(card, minPrice, maxPrice);
  });
};

const guitarTypeCheckboxes = FILTERS_BY_TYPE.checkboxes.map((checkbox) => checkbox.item);
const stringsNumberCheckboxes = FILTERS_BY_STRINGS.checkboxes.map((checkbox) => checkbox.item);

export const getCardsByFilter = (cards, checkboxNames, minPrice, maxPrice) => {
  const guitarTypeCheckedCheckboxes = checkboxNames.filter(
      (filter) => guitarTypeCheckboxes.includes(filter)
  );
  const stringsNumberCheckedCheckboxes = checkboxNames.filter(
      (filter) => stringsNumberCheckboxes.includes(filter)
  );

  if (checkboxNames.length) {

    if (guitarTypeCheckedCheckboxes.length &&
      !stringsNumberCheckedCheckboxes.length) {
      return getSameGuitarType(
          cards,
          guitarTypeCheckedCheckboxes,
          minPrice,
          maxPrice
      );
    } else if (!guitarTypeCheckedCheckboxes.length &&
      stringsNumberCheckedCheckboxes.length) {
      return getSameStringsType(
          cards,
          stringsNumberCheckedCheckboxes,
          minPrice,
          maxPrice
      );
    } else {
      return getSameFilters(cards, checkboxNames, minPrice, maxPrice);
    }
  } else {
    return cards.filter((card) => getSamePrice(card, minPrice, maxPrice));
  }
};
