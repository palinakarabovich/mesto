import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import '../pages/index.css';

import {
  initialCards,
  validationSettings,
  nameInput,
  jobInput,
  buttonEditProfile,
  buttonAddPhoto,
  selectors} from '../constants/constants.js';


//Загрузка карточек на страницу
const cardsList = new Section ({
  items: initialCards,
  renderer: (item) => {
      cardsList.addItem(generateNewCard(item));
  }}, selectors.cardContainerSelector);

  cardsList.renderItems();

//Генерация карточки
function generateNewCard(card){
  const generatedCard = new Card({
    data: card, 
    handleCardClick},
    '#card');
  const cardTemplate = generatedCard.generateCard();
  return cardTemplate;
}

//Попап с картинкой
const popupWithImage = new PopupWithImage('.popup_type_photo');
popupWithImage.setEventListeners();

//Открытие попапа с картинкой
function handleCardClick(title, link) {
  popupWithImage.openPopup(title, link);
}

//Попап с формой добавления фото
const popupAddPhoto = new PopupWithForm('.popup_type_add-photo', handleAddPhotoSubmit );
popupAddPhoto.setEventListeners();

//Обработчик Submit добавления новой фотографии
function handleAddPhotoSubmit(inputValues){
  const card = {
    name: inputValues.get('input-title'),
    link: inputValues.get('input-link'),
  }
  cardsList.addItem(generateNewCard(card));
  photoAddFormValidator.deactivateButton();
  popupAddPhoto.closePopup();
}

//Попап с формой редактирования профиля
const popupEditProfile = new PopupWithForm('.popup_type_edit', handleEditProfileSubmit);
popupEditProfile.setEventListeners();

//Обработчик Submit изменения иформации о пользователе на странице
function handleEditProfileSubmit(inputValues){
  userInfo.setUserInfo(inputValues.get('input-name'), inputValues.get('input-description'));
  profileEditFormValidator.deactivateButton();
  popupEditProfile.closePopup();
}

//Заполнение полей формы редактирования информации пользователя значениями при открытии попапа
function handleUserInfoInput() {
  const userData = userInfo.getUserInfo();
  nameInput.value = userData.name;
  jobInput.value = userData.info;
}

//Информация о пользователе
const userInfo = new UserInfo(selectors.userNameSelector, selectors.userInfoSelector);

//Валидаторы
const photoAddFormValidator = new FormValidator(validationSettings, document.querySelector(selectors.photoAddForm));
photoAddFormValidator.enableValidation();

const profileEditFormValidator = new FormValidator(validationSettings, document.querySelector(selectors.profileEditForm));
profileEditFormValidator.enableValidation();

//Кнопка изменить профиль
buttonEditProfile.addEventListener('click',() => {
  popupEditProfile.openPopup();
  handleUserInfoInput();
  profileEditFormValidator.resetForm();
});

//Кнопка добавить новое фото
buttonAddPhoto.addEventListener('click', () => {
  popupAddPhoto.openPopup();
  photoAddFormValidator.resetForm();
});





