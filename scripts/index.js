const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const popupEdit = document.getElementById('popup-edit');
const popupAdd = document.getElementById('popup-add');
const popupFullscreen = document.getElementById('popup-fullscreen')
const fullscreenImageElement = popupFullscreen.querySelector('.popup__image')

const closeButtonEditPopup = document.getElementById('popup-edit-close-button')
const closeButtonAddPopup = document.getElementById('popup-add-close-button')
const closeButtonFullscreenPopup = document.getElementById('popup-full-image-close-button');

const profileName = document.querySelector('.profile__name');
const popupName = document.querySelector('#name');
const profileOccupation = document.querySelector('.profile__occupation');
const popupOccupation = document.querySelector ('#occupation');
const formEditElement = document.querySelector('.popup__form');
const locationBlock = document.querySelector('.location');
const templateElement = document.querySelector('.location-template');
const formAddElement = document.getElementById('formAdd');
const inputNewNameElement = document.getElementById('newName');
const inputNewLinkElement = document.getElementById('newImageLink');


const initialCards = [
  { name: 'Архыз', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'},
  { name: 'Челябинская область', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'},
  { name: 'Иваново', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'},
  { name: 'Камчатка', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'},
  { name: 'Холмогорский район', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'},
  { name: 'Байкал', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'}
];

function editButtonClick() {
  popupEdit.classList.toggle('popup_opened');
  popupName.value = profileName.textContent;
  popupOccupation.value = profileOccupation.textContent;
}

function addButtonClick() {
  popupAdd.classList.toggle('popup_opened');
}

function closeEditPopupButtonClick() {
  popupEdit.classList.toggle('popup_opened');
}

function closeAddPopupButtonClick() {
  popupAdd.classList.toggle('popup_opened');
}

function closeFullscreenPopupButtonClick() {
  popupFullscreen.classList.toggle('popup_opened');
}

function handleEditFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = popupName.value;
    profileOccupation.textContent = popupOccupation.value;

    closeEditPopupButtonClick();
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
  initialCards.unshift(cardElement);
  locationBlock.prepend(cardElement);
  inputNewNameElement.value = '';
  inputNewLinkElement.value = '';
  closeAddPopupButtonClick();

}

formEditElement.addEventListener('submit', handleEditFormSubmit); 
editButton.addEventListener('click', editButtonClick);
addButton.addEventListener('click', addButtonClick);
closeButtonEditPopup.addEventListener('click', closeEditPopupButtonClick);
closeButtonAddPopup.addEventListener('click', closeAddPopupButtonClick);
closeButtonFullscreenPopup.addEventListener('click', closeFullscreenPopupButtonClick);
formAddElement.addEventListener('submit', handleAddFormSubmit);