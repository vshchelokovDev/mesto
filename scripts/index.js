const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const closePopupButton = document.querySelector('.popup__close-button')
let profileName = document.querySelector('.profile__name');
let popupName = document.querySelector('#name');
let profileOccupation = document.querySelector('.profile__occupation');
let popupOccupation = document.querySelector ('#occupation');
let formElement = document.querySelector('.popup__form');

function editButtonClick() {
  popup.classList.toggle('popup_opened');
  popupName.value = profileName.textContent;
  popupOccupation.value = profileOccupation.textContent;
}

function closePopupButtonClick() {
  popup.classList.toggle('popup_opened');
}

function handleFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = popupName.value;
    profileOccupation.textContent = popupOccupation.value;
    closePopupButtonClick();
}

formElement.addEventListener('submit', handleFormSubmit); 
editButton.addEventListener('click', editButtonClick);
closePopupButton.addEventListener('click', closePopupButtonClick);