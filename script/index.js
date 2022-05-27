import Card from './Card.js';
import FormValidator from './FormValidator.js';

//страница
const page = document.querySelector('.page');

//карточки 
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

//Настройки валидации
const data = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}


//основные кнопки
const buttonEditSubmit = page.querySelector('.profile__info-edit-button');
const buttonsListClosePopup = page.querySelectorAll('.popup__close-button');
const buttonAddSubmit = page.querySelector('.profile__add-photo-button');

// поп-апы
const popupList = page.querySelectorAll('.popup');
const imagePopup = page.querySelector('.popup_type_photo');
const editPopup = page.querySelector('.popup_type_edit');
const addPopup = page.querySelector('.popup_type_add-photo');

// инпуты
const nameInput = page.querySelector('.popup__input_type_name');
const jobInput = page.querySelector('.popup__input_type_description');
const cardTitleInput = addPopup.querySelector('.popup__input_type_title');
const cardLinkInput = addPopup.querySelector('.popup__input_type_link');

//контейнер с карточками
const cardContainer = page.querySelector('.elements');

//значения со страницы
const profileName = page.querySelector('.profile__info-name');
const profileCaption = page.querySelector('.profile__info-caption');

//Формы
const formList = page.querySelectorAll('.popup__form')
const formValidators = new Map();

// Загрузка массива карточек при запуске страницы  
function loadPage(cards) {
  cards.forEach(function (card) {
    addCard(cardContainer, generateNewCard(card).generateCard());
  })
}

// Генерация карточки
function generateNewCard(card){
  return new Card(card, '#card');
}

//Добавление карточки в контейнер
function addCard(container, cardElement) {
  container.prepend(cardElement);
}


//Открытие любого поп-ап окна
export function openPopup(popup) {
  popup.classList.add('popup_opened');
  page.addEventListener('keydown', closePopupEscape);
}

// Закрытие любого поп-ап окна
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  page.removeEventListener('keydown', closePopupEscape);
}

//Закрытие попапа по нжатию Ecs 
function closePopupEscape(evt) {
  if (evt.key === 'Escape') {
    const popupIsOpened = page.querySelector('.popup_opened');
    closePopup(popupIsOpened);
  }
}

//Закрытие попапа по клику все окна
function closePopupOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.currentTarget);
  }
}

//Загрузка поп-апа с формой редактирования
function renderEditPopup() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileCaption.textContent;
  openPopup(editPopup);
}

//Обработчик EditSubmit
function submitEditForm(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileCaption.textContent = jobInput.value;
  const formName = formValidators.get(evt.target.closest('.popup__form').name);
  formName.deactivateButton();
  closePopup(editPopup);
}

//Загрузка поп-апа с добавлением фото
function renderAddPopup() {
  openPopup(addPopup);
}

//Обработчик SubmitAdd-Card
function submitAddForm(evt) {
  const card = {
    name: cardTitleInput.value,
    link: cardLinkInput.value
  }
  evt.preventDefault();
  addCard(cardContainer, generateNewCard(card).generateCard());
  evt.target.reset();
  const formName = formValidators.get(evt.target.closest('.popup__form').name);
  formName.deactivateButton();
  closePopup(addPopup);
}

//Обработчки CloseButton
function hideClosesPopup(evt) {
  closePopup(evt.target.closest('.popup'));
}

//Event Listener для всех CloseButton
buttonsListClosePopup.forEach(function (button) {
  button.addEventListener('click', hideClosesPopup);
})

//Event Listener для оверлея
popupList.forEach(function (popup) {
  popup.addEventListener('mousedown', closePopupOverlay);
})

//Сохранение экземляров класса FormValidation
formList.forEach(form => {
  formValidators.set(form.name, new FormValidator(data, form))
});

//Запуск валидации
formValidators.forEach( (validator) => {
  validator.enableValidation();
})

buttonEditSubmit.addEventListener('click', renderEditPopup);
buttonAddSubmit.addEventListener('click', renderAddPopup);
editPopup.querySelector('.popup__form').addEventListener('submit', submitEditForm);
addPopup.querySelector('.popup__form').addEventListener('submit', submitAddForm);
loadPage(initialCards);




