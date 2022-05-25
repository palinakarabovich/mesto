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
const editButton = page.querySelector('.profile__info-edit-button');
const closeButtonList = page.querySelectorAll('.popup__close-button');
const addButton = page.querySelector('.profile__add-photo-button');

// поп-апы
const popupList = page.querySelectorAll('.popup');
const imagePopUp = page.querySelector('.popup_type_photo');
const editPopUp = page.querySelector('.popup_type_edit');
const addPopUp = page.querySelector('.popup_type_add-photo');

// инпуты
const nameInput = page.querySelector('.popup__input_type_name');
const jobInput = page.querySelector('.popup__input_type_description');
const cardTitleInput = addPopUp.querySelector('.popup__input_type_title');
const cardLinkInput = addPopUp.querySelector('.popup__input_type_link');

//контейнер с карточками
const cardContainer = page.querySelector('.elements');

//значения со страницы
const profileName = page.querySelector('.profile__info-name');
const profileCaption = page.querySelector('.profile__info-caption');

//Формы
const formList = page.querySelectorAll('.popup__form')

// Загрузка массива карточек при запуске страницы  
function loadPage(cards) {
  cards.forEach(function (card) {
    const cardNew = new Card(card, '#card');
    addCard(cardContainer, cardNew.generateCard());
  })
}

//Добавление карточки в контейнер
function addCard(container, cardElement) {
  container.prepend(cardElement);
}


//Открытие любого поп-ап окна
export function openPopUp(popup) {
  popup.classList.add('popup_opened');
  page.addEventListener('keydown', closePopUpEscape);
}

// Закрытие любого поп-ап окна
function closePopUp(popup) {
  popup.classList.remove('popup_opened');
  page.removeEventListener('keydown', closePopUpEscape);
}

//Закрытие попапа по нжатию Ecs 
function closePopUpEscape(evt) {
  if (evt.key === 'Escape') {
    const popupIsOpened = page.querySelector('.popup_opened');
    closePopUp(popupIsOpened);
  }
}

//Закрытие попапа по клику все окна
function closePopUpOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    closePopUp(evt.currentTarget);
  }
}

//Загрузка поп-апа с формой редактирования
function renderEditPopUp() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileCaption.textContent;
  openPopUp(editPopUp);
}

//Обработчик EditSubmit
function submitEditForm(evt) {
  evt.preventDefault();
  const submitButton = editPopUp.querySelector('.popup__save-button');
  profileName.textContent = nameInput.value;
  profileCaption.textContent = jobInput.value;
  submitButton.classList.add('popup__save-button_inactive');
  submitButton.setAttribute('disabled', 'disabled');
  closePopUp(editPopUp);
}

//Загрузка поп-апа с добавлением фото
function renderAddPopUp() {
  openPopUp(addPopUp);
}

//Обработчик SubmitAdd-Card
function submitAddForm(evt) {
  const submitButton = addPopUp.querySelector('.popup__save-button');
  const card = {
    name: cardTitleInput.value,
    link: cardLinkInput.value
  }
  evt.preventDefault();
  const cardNew = new Card(card, '#card');
  addCard(cardContainer, cardNew.generateCard());
  evt.target.reset();
  submitButton.classList.add('popup__save-button_inactive');
  submitButton.setAttribute('disabled', 'disabled');
  closePopUp(addPopUp);
}

//Обработчки CloseButton
function hideClosesPopup(evt) {
  closePopUp(evt.target.closest('.popup'));
}

//Event Listener для всех CloseButton
closeButtonList.forEach(function (button) {
  button.addEventListener('click', hideClosesPopup);
})

//Event Listener для оверлея
popupList.forEach(function (popup) {
  popup.addEventListener('mousedown', closePopUpOverlay);
})

//Запуск валидации
formList.forEach(form =>{
  const formNew= new FormValidator(data, form);
  formNew.enableValidation();
})

editButton.addEventListener('click', renderEditPopUp);
addButton.addEventListener('click', renderAddPopUp);
editPopUp.querySelector('.popup__form').addEventListener('submit', submitEditForm);
addPopUp.querySelector('.popup__form').addEventListener('submit', submitAddForm);
loadPage(initialCards);




