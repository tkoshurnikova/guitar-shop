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
