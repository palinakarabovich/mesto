import Card from '../components/Card.js';
import PopupWithSubmitButton from '../components/PopupWithSubmitButton.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import '../pages/index.css';

import {
  validationSettings,
  nameInput,
  jobInput,
  buttonEditProfile,
  buttonAddPhoto,
  selectors,
  buttonEditAvatar,
  popupSelectors} from '../constants/constants.js';


//Генерация карточки
function generateNewCard(card, id){
  const generatedCard = new Card({
    data: card, 
    handleCardClick,
    handleTrashClick, handleLikeClick},
    '#card', id);
  const cardTemplate = generatedCard.generateCard();
  return cardTemplate;
}

//Попап с картинкой
const popupWithImage = new PopupWithImage(popupSelectors.popupOpenPic);
popupWithImage.setEventListeners();

//Открытие попапа с картинкой
function handleCardClick(title, link) {
  popupWithImage.openPopup(title, link);
}

//Обработка кликов по лайкам
function handleLikeClick(cardId, isLiked, card){

  api.toggleLike(cardId, isLiked)
  .then ((data) => 
    {
      card.setLikes(data.likes.length);
    })
  .catch((err) => {
      console.log(err);
    })
}

//Попап удаление карточки
const popupDeleteSubmit = new PopupWithSubmitButton(popupSelectors.popupDeletePic);
popupDeleteSubmit.setEventListeners();

//Обработка клика по корзине
function handleTrashClick(id, card){
  popupDeleteSubmit.setSubmit(() => handleDeleteCardSubmit(id, card));
  popupDeleteSubmit.openPopup();
}

//Обработчик  Submit удаления карточки
function handleDeleteCardSubmit(id, card){
  popupDeleteSubmit.renderSavings(true);
  api.deleteCard(id)
  .then(() => {
    card.deleteCard();
    popupDeleteSubmit.closePopup();
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    popupDeleteSubmit.renderSavings(false);
  })
}

//Попап с формой добавления фото
const popupAddPhoto = new PopupWithForm(popupSelectors.popupAddPhoto, handleAddPhotoSubmit );
popupAddPhoto.setEventListeners();

//Обработчик Submit добавления новой фотографии
function handleAddPhotoSubmit(inputValues){
  popupAddPhoto.renderSavings(true);
  api.addNewCard(inputValues)
  .then ( values =>{
    cardsList.addItemPrepend(generateNewCard(values, values.owner._id));
    photoAddFormValidator.deactivateButton();
    popupAddPhoto.closePopup();
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    popupAddPhoto.renderSavings(false);
  })
}

//Попап изменение аватара
const popupEditAvatar = new PopupWithForm(popupSelectors.popupEditAvatar, handleEditAvatarSubmit );
popupEditAvatar.setEventListeners();

//Submit изменения аватара
function handleEditAvatarSubmit(inputValues){
    popupEditAvatar.renderSavings(true);
    api.changeAvatar(inputValues)
    .then(data => {
      userInfo.setUserInfo(data);
      popupEditAvatar.closePopup();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupEditAvatar.renderSavings(false);
    })
    profileEditAvatarFormValidator.deactivateButton();
  
}

//Попап с формой редактирования профиля
const popupEditProfile = new PopupWithForm(popupSelectors.popupEditProfile, handleEditProfileSubmit);
popupEditProfile.setEventListeners();

//Обработчик Submit изменения иформации о пользователе на странице
function handleEditProfileSubmit(inputValues){
  popupEditProfile.renderSavings(true);
  api.saveUserChanges(inputValues)
  .then(data => {
    userInfo.setUserInfo(data);
    popupEditProfile.closePopup();
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(()=> {
    popupEditProfile.renderSavings(false);
  })

}

//Заполнение полей формы редактирования информации пользователя значениями при открытии попапа
function handleUserInfoInput() {
  const userData = userInfo.getUserInfo();
  nameInput.value = userData.name;
  jobInput.value = userData.about;
}

//Информация о пользователе
const userInfo = new UserInfo(selectors.userNameSelector, selectors.userInfoSelector, selectors.avatarImageSelector);

//Валидаторы
const photoAddFormValidator = new FormValidator(validationSettings, document.querySelector(selectors.photoAddForm));
photoAddFormValidator.enableValidation();

const profileEditFormValidator = new FormValidator(validationSettings, document.querySelector(selectors.profileEditForm));
profileEditFormValidator.enableValidation();

const profileEditAvatarFormValidator = new FormValidator(validationSettings, document.querySelector(selectors.avatarEditForm));
profileEditAvatarFormValidator.enableValidation();

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

//Кнопка изменить аватар
buttonEditAvatar.addEventListener('click', () => {
  popupEditAvatar.openPopup();
  profileEditAvatarFormValidator.resetForm();
})

//Загрузка карточек на страницу
const cardsList = new Section ({
  renderer: (item, id) => {
      cardsList.addItemAppend(generateNewCard(item, id));
  }}, selectors.cardContainerSelector);

//Создание экзепляра класса API
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-44',
  headers: {
    authorization: '06384b00-acd1-47a1-8cb5-23fe9d72ccda',
    'Content-Type': 'application/json'
  }
});

//Получение карточек при загрузке
//Получение данных пользователя
Promise.all([
  api.getInitialCards(),
  api.getUserInfo()
])
.then (results => {
  userInfo.setUserInfo(results[1]);
  cardsList.renderItems(results[0],results[1]._id);
})
.catch((err) => {
  console.log(err);
});