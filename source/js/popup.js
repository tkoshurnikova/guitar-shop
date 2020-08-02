export const openPopup = (popup) => {
  const closePopup = popup.querySelector(`.popup__close-button`);
  const overlay = document.querySelector(`.overlay`);
  const body = document.querySelector(`body`);

  const onOpenButtonClick = (evt) => {
    evt.preventDefault();
    popup.classList.remove(`popup--closed`);
    overlay.classList.remove(`overlay--hidden`);
    body.classList.add(`no-scroll`);
    window.addEventListener(`keydown`, onEscPress);
  };

  const onCloseButtonClick = (evt) => {
    evt.preventDefault();
    popup.classList.add(`popup--closed`);
    overlay.classList.add(`overlay--hidden`);
    body.classList.remove(`no-scroll`);
    window.removeEventListener(`keydown`, onEscPress);
  };

  const onEscPress = (evt) => {
    if (evt.keyCode === 27 && !popup.classList.contains(`popup--closed`)) {
      onCloseButtonClick(evt);
    }
  };

  onOpenButtonClick();
  closePopup.addEventListener(`click`, onCloseButtonClick);
  overlay.addEventListener(`click`, onCloseButtonClick);
};
