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

//основные кнопки
const editButton = page.querySelector('.profile__info-edit-button');
const closeButton = page.querySelectorAll('.popup__close-button');
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

// Загрузка массива карточек при запуске страницы  
function loadPage(cards){
  cards.forEach( function(card){
    addCard(cardContainer, renderCard(card));
  })
}

//Открытие любого поп-ап окна
function openPopUp(popup){
    popup.classList.add('popup_opened');
    page.addEventListener('keydown', closePopUpEscape);
}

// Закрытие любого поп-ап окна
function closePopUp(popup){
    popup.classList.remove('popup_opened');
    page.removeEventListener('keydown', closePopUpEscape);
}

//Закрытие попапа по нжатию Ecs 
function closePopUpEscape(evt){
  const popupIsOpened = page.querySelector('.popup_opened');
  if(evt.key === 'Escape'){
    closePopUp(popupIsOpened);
  }
}

//Закрытие попапа по клику все окна
function closePopUpOverlay(evt){
  const popupIsOpened = page.querySelector('.popup_opened');
  if (evt.target === evt.currentTarget){
    closePopUp(popupIsOpened);
  }
}

// Создание карточки
function renderCard(element){
    const cardTemplate = page.querySelector('#card').content; 
    const cardElement = cardTemplate.querySelector('.elements__card').cloneNode(true);
    cardElement.querySelector('.elements__card-caption-title').textContent = element.name;
    cardElement.querySelector('.elements__card-pic').src = element.link;
    cardElement.querySelector('.elements__card-pic').alt = element.name;

    //LikeButton
    cardElement.querySelector('.elements__card-caption-like-button').addEventListener('click', likeActive);

    //Увеличение картинки при нажатии
    cardElement.querySelector('.elements__card-pic').addEventListener('click', renderImagePopUp);

    //DeleteButton
    cardElement.querySelector('.elements__card-delete-button').addEventListener('click',deleteCard); 
    return cardElement;
}

//Обработчик LikeButton
function likeActive(evt) {
  evt.target.classList.toggle('elements__card-caption-like-button_active');
}

//Обработчик DeleteButton
function deleteCard(evt){
  evt.target.closest('.elements__card').remove();
}

//Добавление карточки в контейнер
function addCard(container, cardElement) { 
  container.prepend(cardElement);
}

//Загрузка поп-апа с увеличенной картинкой
function renderImagePopUp(evt){
    const imageCard = evt.target.closest('.elements__card');
    imagePopUp.querySelector('.popup__photo').src = evt.target.src;
    imagePopUp.querySelector('.popup__photo').alt = evt.target.alt;
    imagePopUp.querySelector('.popup__photo-title').textContent = imageCard.querySelector('.elements__card-caption-title').textContent;
    openPopUp(imagePopUp);
}

//Загрузка поп-апа с формой редактирования
function renderEditPopUp(){
    nameInput.value = page.querySelector('.profile__info-name').textContent;
    jobInput.value = page.querySelector('.profile__info-caption').textContent;
    openPopUp(editPopUp);
}

//Обработчик EditSubmit
function submitEditForm(evt){
  evt.preventDefault();
  page.querySelector('.profile__info-name').textContent = nameInput.value;
  page.querySelector('.profile__info-caption').textContent = jobInput.value;
  closePopUp(editPopUp);
}

//Загрузка поп-апа с добавлением фото
 function renderAddPopUp(){ 
    openPopUp(addPopUp);
 }

 //Обработчик SubmitAdd-Card
 function submitAddForm (evt){
    const card = {
      name: cardTitleInput.value,
      link: cardLinkInput.value
    }
    evt.preventDefault();
    addCard(cardContainer, renderCard(card));
    addPopUp.querySelector('.popup__form').reset();
    closePopUp(addPopUp);
 }

  //Обработчки CloseButton
  function closeButtonClick (evt){
    closePopUp(evt.target.closest('.popup'));
   }

 //Event Listener для всех CloseButton
 closeButton.forEach( function(button){
  button.addEventListener('click', closeButtonClick)
 })

 //Event Listener для оверлея
 popupList.forEach(function(popup){
   popup.addEventListener('mousedown', closePopUpOverlay);
 })

editButton.addEventListener('click',renderEditPopUp); 
addButton.addEventListener('click', renderAddPopUp);
editPopUp.querySelector('.popup__form').addEventListener('submit', submitEditForm);
addPopUp.querySelector('.popup__form').addEventListener('submit', submitAddForm);
loadPage(initialCards);



