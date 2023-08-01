import Card from "./Card.js";

const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const popupEdit = document.querySelector('.popup_type_profile');
const popupAdd = document.querySelector('.popup_type_card-add');
const popupFullscreen = document.querySelector('.popup_type_picture')
const fullscreenImageElement = popupFullscreen.querySelector('.popup__image')

const submitButtonAddPopup = document.querySelector('.popup__button_submit-add');
const submitButtonEditPopup = document.querySelector('.popup__button_submit-edit');
const closeButtonEditPopup = document.querySelector('.popup__close-button_edit')
const closeButtonAddPopup = document.querySelector('.popup__close-button_add')
const closeButtonFullscreenPopup = document.querySelector('.popup__close-button_picture');

const profileName = document.querySelector('.profile__name');
const popupName = document.querySelector('.popup__input_edit_profile-name');
const profileOccupation = document.querySelector('.profile__occupation');
const popupOccupation = document.querySelector ('.popup__input_edit_profile-occupation');
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
    disableButton(submitButtonEditPopup, SETTINGS);
    closePopup(popupEdit);
}

const renderCardElement = (item) => {
  const card = new Card(item);
  locationBlock.prepend(card.getView());
}

 initialCards.forEach((item) => {
  renderCardElement(item);
})

const handleAddFormSubmit = (e) => {
  e.preventDefault();
  const name = inputNewNameElement.value;
  const link = inputNewLinkElement.value;
  const cardElement = renderCardElement({ name, link });
  e.target.reset();
  disableButton(submitButtonAddPopup, SETTINGS);
  closePopup(popupAdd);
};

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