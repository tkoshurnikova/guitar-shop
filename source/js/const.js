export const CARDS_PER_PAGE = 9;

export const Filters = [
  {
    'title': `Тип гитар`,
    'type': `guitar-type`,
    'checkboxes': [
      {
        'type': `acoustic`,
        'label': `Акустические гитары`,
        'item': `акустическая гитара`,
        'isChecked': false
      },
      {
        'type': `electro`,
        'label': `Электрогитары`,
        'item': `электрогитара`,
        'isChecked': false
      },
      {
        'type': `ukulele`,
        'label': `Укулеле`,
        'item': `укулеле`,
        'isChecked': false
      }
    ]
  },
  {
    'title': `Количество струн`,
    'type': `strings-number`,
    'checkboxes': [
      {
        'type': `4-strings`,
        'label': `4`,
        'item': `4`,
        'isChecked': false
      },
      {
        'type': `6-strings`,
        'label': `6`,
        'item': `6`,
        'isChecked': false
      },
      {
        'type': `7-strings`,
        'label': `7`,
        'item': `7`,
        'isChecked': false
      },
      {
        'type': `12-strings`,
        'label': `12`,
        'item': `12`,
        'isChecked': false
      }
    ]
  }
];

export const IMAGES = {
  'акустическая гитара': `img/guitars/guitar-5.png`,
  'электрогитара': `img/guitars/guitar-1.png`,
  'укулеле': `img/guitars/guitar-3.png`
};
