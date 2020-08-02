const DEBOUNCE_INTERVAL = 500;

export const debounce = (cb) => {
  let lastTimeout = null;

  return function (...args) {
    if (lastTimeout) {
      window.clearTimeout(lastTimeout);
    }
    lastTimeout = window.setTimeout(function () {
      cb(...args);
    }, DEBOUNCE_INTERVAL);
  };
};
