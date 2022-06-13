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
const validationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}

//разные селекторы для поиска элементов
const Selectors ={
  cardContainerSelector: '.elements',
  userNameSelector: '.profile__info-name',
  userInfoSelector: '.profile__info-caption',
  photoAddForm: '#popup-add-photo-form',
  profileEditForm: '#popup-edit-profile-form'
}

//основные кнопки
const buttonEditProfile = document.querySelector('.profile__info-edit-button');
const buttonAddPhoto = document.querySelector('.profile__add-photo-button');

// инпуты
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');

export {
  initialCards,
  validationSettings,
  nameInput,
  jobInput,
  buttonEditProfile,
  buttonAddPhoto,
  Selectors
 }