import {remove} from './render.js';

export const openPopup = (popup) => {
  const popupElement = popup.getElement();
  const closePopupButton = popupElement.querySelector(`.popup__close-button`);
  const overlayElement = document.querySelector(`.overlay`);
  const bodyElement = document.querySelector(`body`);

  const onOpenButtonClick = () => {
    overlayElement.classList.remove(`overlay--hidden`);
    bodyElement.classList.add(`no-scroll`);
    window.addEventListener(`keydown`, onEscPress);
  };

  const onCloseButtonClick = () => {
    overlayElement.classList.add(`overlay--hidden`);
    bodyElement.classList.remove(`no-scroll`);
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
  overlayElement.addEventListener(`click`, () => {
    closePopup(popup);
  });
};

export const closePopup = (popup) => {
  const popupElement = popup.getElement();
  const overlayElement = document.querySelector(`.overlay`);
  const bodyElement = document.querySelector(`body`);

  const onCloseButtonClick = () => {
    overlayElement.classList.add(`overlay--hidden`);
    bodyElement.classList.remove(`no-scroll`);
    remove(popup);
    window.removeEventListener(`keydown`, onEscPress);
  };

  const onEscPress = (evt) => {
    if (evt.keyCode === 27 && !popupElement.classList.contains(`popup--closed`)) {
      onCloseButtonClick(evt);
    }
  };

  overlayElement.classList.add(`overlay--hidden`);
  bodyElement.classList.remove(`no-scroll`);
  remove(popup);
  window.removeEventListener(`keydown`, onEscPress);
};
