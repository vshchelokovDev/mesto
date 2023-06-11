const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const closePopupButton = document.querySelector('.popup__close-button')
let profileName = document.querySelector('.profile__name');
let popupName = document.querySelector('.popup__name');
let profileOccupation = document.querySelector('.profile__occupation');
let popupOccupation = document.querySelector ('.popup__occupation');
let formElement = document.querySelector('.popup__form');

popupName.value = profileName.textContent;
popupOccupation.value = profileOccupation.textContent;

function editButtonClick() {
  popup.classList.toggle('popup_opened');
}

function closePopupButtonClick() {
  popup.classList.toggle('popup_opened');
}

editButton.addEventListener('click', editButtonClick);
closePopupButton.addEventListener('click', closePopupButtonClick);

function handleFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = popupName.value;
    profileOccupation.textContent = popupOccupation.value;
    popup.classList.toggle('popup_opened');
}

formElement.addEventListener('submit', handleFormSubmit); 