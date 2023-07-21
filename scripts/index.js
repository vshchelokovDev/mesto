const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const popupEdit = document.querySelector('.popup_type_profile');
const popupAdd = document.querySelector('.popup_type_card-add');
const popupFullscreen = document.querySelector('.popup_type_picture')
const fullscreenImageElement = popupFullscreen.querySelector('.popup__image')

const closeButtonEditPopup = document.querySelector('.popup__close-button_edit')
const closeButtonAddPopup = document.querySelector('.popup__close-button_add')
const closeButtonFullscreenPopup = document.querySelector('.popup__close-button_picture');

const profileName = document.querySelector('.profile__name');
const popupName = document.querySelector('#name');
const profileOccupation = document.querySelector('.profile__occupation');
const popupOccupation = document.querySelector ('#occupation');
const formEditElement = document.querySelector('.popup__form_edit');
const locationBlock = document.querySelector('.location');
const templateElement = document.querySelector('.location-template');
const formAddElement = document.querySelector('.popup__form_add');
const inputNewNameElement = document.querySelector('.popup__input_new-name');
const inputNewLinkElement = document.querySelector('.popup__input_new-link');

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
  popup.addEventListener('click', closePopupOverlay);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
  popup.removeEventListener('click', closePopupOverlay);
}

function closePopupEsc (evt) {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}

function closePopupOverlay(evt) {
  if (evt.currentTarget === evt.target) {
    closePopup(evt.currentTarget);
  }
}

function handleEditFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = popupName.value;
    profileOccupation.textContent = popupOccupation.value;

    closePopup(popupEdit);
}

const createCard = ({ name, link }) => {
  const clone = templateElement.content.cloneNode(true);
  const cardElement = clone.querySelector('.location__item');
  const imageElement = cardElement.querySelector('.location__image');
  imageElement.setAttribute('src', link);
  imageElement.setAttribute('alt', name);
  cardElement.querySelector('.location__name').textContent = name;

  const deleteButton = cardElement.querySelector(".location__trash");
  deleteButton.addEventListener('click', () => {
    cardElement.remove();
  });

  const likeButton = cardElement.querySelector('.location__like');
  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('location__like-active');
  });
  
  const fullscreenPopupTitle = popupFullscreen.querySelector('.popup__title_h3');
  imageElement.addEventListener('click', () => {
    fullscreenImageElement.src = link;
    fullscreenImageElement.alt = name;
    fullscreenPopupTitle.textContent = name;

    popupFullscreen.classList.toggle('popup_opened');
    document.addEventListener('keydown', closePopupEsc);
    popupFullscreen.addEventListener('click', closePopupOverlay);
  });

  return cardElement;
}

 initialCards.forEach((item) => {
  const cardElement = createCard(item);
  locationBlock.append(cardElement);
})

const handleAddFormSubmit = (e) => {
  e.preventDefault();
  let name = inputNewNameElement.value;
  let link = inputNewLinkElement.value;
  const cardElement = createCard({ name, link });
  locationBlock.prepend(cardElement);
  e.target.reset();
  closePopup(popupAdd);

}

editButton.addEventListener('click', () => {
  openPopup(popupEdit)
  popupName.value = profileName.textContent;
  popupOccupation.value = profileOccupation.textContent;
});

addButton.addEventListener('click', () => {
  openPopup(popupAdd);
});

closeButtonEditPopup.addEventListener('click', () => {
  closePopup(popupEdit);
});
closeButtonAddPopup.addEventListener('click', () => {
  closePopup(popupAdd);
});
closeButtonFullscreenPopup.addEventListener('click', () => {
  closePopup(popupFullscreen)
});

formAddElement.addEventListener('submit', handleAddFormSubmit);
formEditElement.addEventListener('submit', handleEditFormSubmit); 