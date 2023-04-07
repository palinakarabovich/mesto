//Validation
const validationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}

//Selectors
const selectors ={
  cardContainerSelector: '.elements',
  userNameSelector: '.profile__info-name',
  userInfoSelector: '.profile__info-caption',
  photoAddForm: '#popup-add-photo-form',
  profileEditForm: '#popup-edit-profile-form',
  avatarEditForm:'#popup-edit-avatar-form',
  avatarImageSelector: '.profile__avatar'
}

const popupSelectors ={
  popupAddPhoto: '.popup_type_add-photo',
  popupEditProfile: '.popup_type_edit',
  popupOpenPic: '.popup_type_photo',
  popupDeletePic: '.popup_type_delete-card',
  popupEditAvatar: '.popup_type_edit-avatar'
}

//Buttons
const buttonEditProfile = document.querySelector('.profile__info-edit-button');
const buttonAddPhoto = document.querySelector('.profile__add-photo-button');
const buttonEditAvatar = document.querySelector('.profile__avatar-edit-button');

//Inputs
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');

export {
  validationSettings,
  nameInput,
  jobInput,
  buttonEditProfile,
  buttonAddPhoto,
  selectors,
  buttonEditAvatar,
  popupSelectors
 }