const settings = ({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
});

const disabledButton = (button, setting) => {
  button.classList.add(setting.inactiveButtonClass);
  button.setAttribute('disabled', true);
};

const enabledButton = (button, setting) => {
  button.classList.remove(setting.inactiveButtonClass);
  button.removeAttribute('disabled', false);
};

const showInputError = (formElement, inputElement, errorMessage, setting) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(setting.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(setting.errorClass);
};

const hideInputError = (formElement, inputElement, setting) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(setting.inputErrorClass);
  errorElement.classList.remove(setting.errorClass);
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, setting) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, setting);
  } else {
    hideInputError(formElement, inputElement, setting);
  }
};

const toggleButtonState = (inputList, buttonElement, setting) => {
  if (hasInvalidInput(inputList)) {
    disabledButton(buttonElement, setting);
  } else {
    enabledButton(buttonElement, setting);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const setEventListeners = (formElement, setting) => {
  const inputList = Array.from(formElement.querySelectorAll(setting.inputSelector));
  const buttonElement = formElement.querySelector(setting.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, setting);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, setting);
      toggleButtonState(inputList, buttonElement, setting);
    });
  });
};

const enableValidation = (setting) => {
  const formList = Array.from(document.querySelectorAll(setting.formSelector));

  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, setting);
  });
};

enableValidation(settings)