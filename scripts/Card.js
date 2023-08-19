import { openPopup } from "./index.js";
class Card {
  constructor ({ name, link }, templateElement) {
    this._name = name;
    this._link = link;
    this._templateElement = templateElement;
    this._elementCard = document.querySelector(this._templateElement).content.querySelector('.location__item').cloneNode(true);
  }

  _setData() {
    const imageElement = this._elementCard.querySelector('.location__image');
    const name = this._elementCard.querySelector('.location__name');

    name.textContent = this._name;
    imageElement.setAttribute('src', this._link);
    imageElement.setAttribute('alt', this._name);
  };

  _handleOpenPopupImage() {
    const popupFullscreen = document.querySelector('.popup_type_picture')
    const fullscreenPopupTitle = popupFullscreen.querySelector('.popup__title_h3');
    const fullscreenImageElement = popupFullscreen.querySelector('.popup__image');
    fullscreenImageElement.src = this._link
    fullscreenPopupTitle.textContent = this._alt
    fullscreenPopupTitle.textContent = this._name
    fullscreenImageElement.alt = this._alt
    openPopup(popupFullscreen)
  }

  _setListeners() {
    const deleteButton = this._elementCard.querySelector(".location__trash");
    deleteButton.addEventListener('click', () => {
      this._elementCard.remove();
    });

    const likeButton = this._elementCard.querySelector('.location__like');
    likeButton.addEventListener('click', () => {
      likeButton.classList.toggle('location__like-active');
    });

    const imageElement = this._elementCard.querySelector('.location__image');
    imageElement.addEventListener('click', () => {
      this._handleOpenPopupImage()
    });

  }

  getView() {
    this._setData();
    this._setListeners();

    return this._elementCard;
  };

}

export default Card;