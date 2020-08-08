import {remove} from './render.js';

export const openPopup = (popup) => {
  const popupElement = popup.getElement();
  const closePopupButton = popupElement.querySelector(`.popup__close-button`);
  const overlay = document.querySelector(`.overlay`);
  const body = document.querySelector(`body`);

  const onOpenButtonClick = () => {
    overlay.classList.remove(`overlay--hidden`);
    body.classList.add(`no-scroll`);
    window.addEventListener(`keydown`, onEscPress);
  };

  const onCloseButtonClick = () => {
    overlay.classList.add(`overlay--hidden`);
    body.classList.remove(`no-scroll`);
    remove(popup);
    window.removeEventListener(`keydown`, onEscPress);
  };

  const onEscPress = (evt) => {
    if (evt.keyCode === 27 && !popupElement.classList.contains(`popup--closed`)) {
      onCloseButtonClick(evt);
    }
  };

  onOpenButtonClick();
  closePopupButton.addEventListener(`click`, () => {
    closePopup(popup);
  });
  overlay.addEventListener(`click`, () => {
    closePopup(popup);
  });
};

export const closePopup = (popup) => {
  const popupElement = popup.getElement();
  const overlay = document.querySelector(`.overlay`);
  const body = document.querySelector(`body`);

  const onCloseButtonClick = () => {
    overlay.classList.add(`overlay--hidden`);
    body.classList.remove(`no-scroll`);
    remove(popup);
    window.removeEventListener(`keydown`, onEscPress);
  };

  const onEscPress = (evt) => {
    if (evt.keyCode === 27 && !popupElement.classList.contains(`popup--closed`)) {
      onCloseButtonClick(evt);
    }
  };

  overlay.classList.add(`overlay--hidden`);
  body.classList.remove(`no-scroll`);
  remove(popup);
  window.removeEventListener(`keydown`, onEscPress);
};
