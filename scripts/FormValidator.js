class FormValidator {

  constructor(setting, formElement) {
    this._setting = setting;
    this._formElement = formElement;
    this._buttonElement = this._formElement.querySelector(this._setting.submitButtonSelector);
    this._inputList = Array.from(this._formElement.querySelectorAll(this._setting.inputSelector));
  };

  disableButton() {
    this._buttonElement.setAttribute('disabled', true);
    this._buttonElement.classList.add(this._setting.inactiveButtonClass);
  };

  enableButton() {
    this._buttonElement.removeAttribute('disabled');
    this._buttonElement.classList.remove(this._setting.inactiveButtonClass);
  };

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._setting.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._setting.errorClass);
  };

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._setting.inputErrorClass);
    errorElement.classList.remove(this._setting.errorClass);
    errorElement.textContent = '';
  };

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this.disableButton();
    } else {
      this.enableButton();
    }
  };

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid
    })
  };

  _setEventListeners() {
    this._formElement.addEventListener('sumbit', (evt) => {
      evt.preventDefault();
    })
    this._toggleButtonState();
  
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    })
  };

  enableValidation() {
    this._setEventListeners();
  }
};

export {FormValidator}