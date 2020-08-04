const samePriceCheck = (item) => {
  const form = document.querySelector(`.form`);
  let card = ``;
  if (form) {
    const inputMinPrice = form.querySelector(`#min-price`).value;
    const inputMaxPrice = form.querySelector(`#max-price`).value;

    if (inputMinPrice && inputMaxPrice) {
      if (Number(item.price) <= inputMaxPrice && Number(item.price) >= inputMinPrice) {
        card = item;
      }
    } else {
      card = item;
    }
  } else {
    card = item;
  }
  return card;
};

const sameFeatureCheck = (item) => {
  const form = document.querySelector(`.form`);
  if (form) {
    const checkedTypeFeatures = Array.from(form.querySelector(`.guitar-type`).querySelectorAll(`input:checked`));
    const checkedStringsFeatures = Array.from(form.querySelector(`.strings-number`).querySelectorAll(`input:checked`));
    const checkedFeatures = checkedTypeFeatures.concat(checkedStringsFeatures);

    if (checkedTypeFeatures.length || checkedStringsFeatures.length) {
      const checkedLabels = checkedFeatures.map((element) => element.dataset.label);
      if (checkedTypeFeatures.length && checkedStringsFeatures.length) {
        return checkedLabels.includes(item.type) && checkedLabels.includes(item.strings);
      } else if (checkedTypeFeatures.length) {
        return checkedLabels.includes(item.type);
      } else {
        return checkedLabels.includes(item.strings);
      }
    } else {
      return item;
    }
  } else {
    return item;
  }
};

export const getCardsByFilter = (cards) => {
  return cards.filter((card) => sameFeatureCheck(card) && samePriceCheck(card));
};
