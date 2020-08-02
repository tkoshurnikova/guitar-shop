import {FilterType} from '../const.js';

const sameFeatureCheck = (item) => {
  const checkedTypeFeatures = Array.from(document.querySelector(`.form`).querySelector(`.guitar-type`).querySelectorAll(`input:checked`));
  const checkedStringsFeatures = Array.from(document.querySelector(`.form`).querySelector(`.strings-number`).querySelectorAll(`input:checked`));
  const checkedFeatures = checkedTypeFeatures.concat(checkedStringsFeatures);

  if (checkedTypeFeatures.length || checkedStringsFeatures.length) {
    const checkedLabels = checkedFeatures.map((element) => element.dataset.label);
    if (checkedTypeFeatures.length && checkedStringsFeatures.length) {
      return checkedLabels.includes(item.type) || checkedLabels.includes(item.strings);
    } else if (checkedTypeFeatures.length) {
      return checkedLabels.includes(item.type);
    } else {
      return checkedLabels.includes(item.strings);
    }
  } else {
    return item;
  }
};


export const getCardsByFilter = (cards, filter) => {
  switch (filter) {
    case FilterType.TYPE:
      return cards.filter((card) => sameFeatureCheck(card));
    case FilterType.STRINGS:
      return cards.filter((card) => sameFeatureCheck(card));
    case FilterType.ALL:
      return cards;
  }

  return cards;
};
