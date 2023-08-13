class Card {
  constructor ({ name, link }) {
    this._name = name;
    this._link = link;
  }

  _getTemplate() {
    const templateElement = document.querySelector('.location-template');
    const clone =  templateElement.content.cloneNode(true);
    const newTemplate = clone.querySelector('.location__item');

    return newTemplate;
  };

  _setData() {
    const imageElement = this._newCard.querySelector('.location__image');
    const name = this._newCard.querySelector('.location__name');

    name.textContent = this._name;
    imageElement.setAttribute('src', this._link);
    imageElement.setAttribute('alt', this._name);
  };

  _setListeners() {
    const deleteButton = this._newCard.querySelector(".location__trash");
    deleteButton.addEventListener('click', () => {
      this._newCard.remove();
    });

    const likeButton = this._newCard.querySelector('.location__like');
    likeButton.addEventListener('click', () => {
      likeButton.classList.toggle('location__like-active');
    });

    const imageElement = this._newCard.querySelector('.location__image');
    const popupFullscreen = document.querySelector('.popup_type_picture')
    const fullscreenPopupTitle = popupFullscreen.querySelector('.popup__title_h3');
    const fullscreenImageElement = popupFullscreen.querySelector('.popup__image');
    imageElement.addEventListener('click', () => {
      fullscreenImageElement.src = this._link;
      fullscreenImageElement.alt = this._name;
      fullscreenPopupTitle.textContent = this._name;
  
      popupFullscreen.classList.toggle('popup_opened');
      document.addEventListener('keydown', closePopupEsc);
      popupFullscreen.addEventListener('click', closePopupOverlay);
    });

  }

  getView() {
    this._newCard = this._getTemplate();
    this._setData();
    this._setListeners();

    return this._newCard;
  };

}

export default Card;