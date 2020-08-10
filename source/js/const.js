export const CARDS_PER_PAGE = 9;

export const FILTERS_BY_TYPE = {
  'title': `Тип гитар`,
  'type': `guitar-type`,
  'checkboxes': [
    {
      'type': `acoustic`,
      'label': `Акустические гитары`,
      'item': `акустическая гитара`,
      'isChecked': false,
      'isDisabled': false
    },
    {
      'type': `electro`,
      'label': `Электрогитары`,
      'item': `электрогитара`,
      'isChecked': false,
      'isDisabled': false
    },
    {
      'type': `ukulele`,
      'label': `Укулеле`,
      'item': `укулеле`,
      'isChecked': false,
      'isDisabled': false
    }
  ]
};

export const FILTERS_BY_STRINGS = {
  'title': `Количество струн`,
  'type': `strings-number`,
  'checkboxes': [
    {
      'type': `4-strings`,
      'label': `4`,
      'item': `4`,
      'isChecked': false,
      'isDisabled': false
    },
    {
      'type': `6-strings`,
      'label': `6`,
      'item': `6`,
      'isChecked': false,
      'isDisabled': false
    },
    {
      'type': `7-strings`,
      'label': `7`,
      'item': `7`,
      'isChecked': false,
      'isDisabled': false
    },
    {
      'type': `12-strings`,
      'label': `12`,
      'item': `12`,
      'isChecked': false,
      'isDisabled': false
    }
  ]
};

export const IMAGES = {
  'акустическая гитара': `img/guitars/guitar-5.png`,
  'электрогитара': `img/guitars/guitar-1.png`,
  'укулеле': `img/guitars/guitar-3.png`
};

export const SortType = {
  DEFAULT: `default`,
  PRICE: `price`,
  POPULARITY: `popularity`,
  ASCENDING: `ascending`,
  DESCENDING: `descending`
};

export const PromoCodes = {
  GITARAHIT: `GITARAHIT`,
  SUPERGITARA: `SUPERGITARA`,
  GITARA2020: `GITARA2020`
};
