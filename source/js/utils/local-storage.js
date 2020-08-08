export const saveDataToLocalStorage = (data) => {
  let array = [];
  array = JSON.parse(localStorage.getItem(`session`)) || [];
  const item = data.item;
  const index = array.findIndex((element) => element.item === item);
  if (index === -1) {
    array.push(data);
  }
  localStorage.setItem(`session`, JSON.stringify(array));
};

export const deleteDataFromLocalStorage = (data) => {
  let array = JSON.parse(localStorage.getItem(`session`));
  const item = data.item;
  const index = array.findIndex((element) => element.item === item);
  array = [].concat(array.slice(0, index), array.slice(index + 1));
  localStorage.setItem(`session`, JSON.stringify(array));
};
