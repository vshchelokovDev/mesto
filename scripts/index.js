const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const popupEdit = document.querySelector('.popup_type_profile');
const popupAdd = document.querySelector('.popup_type_card-add');
const popupFullscreen = document.querySelector('.popup_type_picture')
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

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
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
  // initialCards.unshift(cardElement);
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