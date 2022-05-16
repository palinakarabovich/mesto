//Запуск валидации
const setEventListeners = (settings, formElement) => {
    const inputSelector = settings.inputSelector;
    const submitButtonSelector = settings.submitButtonSelector;
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);
    
    toggleButtonState(settings, inputList, buttonElement);
  
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(settings, formElement, inputElement);
        toggleButtonState(settings, inputList, buttonElement);
      });
    });
  };
  
  //Состояние кнопки
  function  toggleButtonState(settings, inputList, buttonElement){
    const inactiveButtonClass = settings.inactiveButtonClass;
    if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(inactiveButtonClass);
    buttonElement.setAttribute('disabled', 'disabled');
  } else {
    buttonElement.classList.remove(inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
  } 
  }
  
  //Проверка инпутов
  function hasInvalidInput(inputList){
    return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
  }
  
  //Вывод сообщений
  const checkInputValidity = (settings, formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      showInputError(settings, formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(settings, formElement, inputElement);
    }
  };
  
  //Показ сообщения об ошибке
  const showInputError = (settings, formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    const inputErrorClass = settings.inputErrorClass;
    const errorClass = settings.errorClass;
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
  };
  
  //Скрытие сообщения об ошибке
  const hideInputError = (settings, formElement, inputElement) => {
    const inputErrorClass = settings.inputErrorClass;
    const errorClass = settings.errorClass;
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = '';
  };
  
  //добавление валидации ко всем попапам
  const enableValidation = (settings) => {
    const formSelector = settings.formSelector;
    const formList = Array.from(document.querySelectorAll(formSelector));
    formList.forEach((formElement) => {
      setEventListeners(settings, formElement);
    });
    
  };
  
  enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_inactive',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
  }); 