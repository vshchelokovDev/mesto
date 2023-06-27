const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const popupEdit = document.getElementById('popup-edit');
const popupAdd = document.getElementById('popup-add');

const closeButtonEditPopup = document.getElementById('popup-edit-close-button')
const closeButtonAddPopup = document.getElementById('popup-add-close-button')
let profileName = document.querySelector('.profile__name');
let popupName = document.querySelector('#name');
let profileOccupation = document.querySelector('.profile__occupation');
let popupOccupation = document.querySelector ('#occupation');
let formElement = document.querySelector('.popup__form');

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

function handleFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = popupName.value;
    profileOccupation.textContent = popupOccupation.value;
    closeEditPopupButtonClick();
}

formElement.addEventListener('submit', handleFormSubmit); 
editButton.addEventListener('click', editButtonClick);
addButton.addEventListener('click', addButtonClick)
closeButtonEditPopup.addEventListener('click', closeEditPopupButtonClick);
closeButtonAddPopup.addEventListener('click', closeAddPopupButtonClick);