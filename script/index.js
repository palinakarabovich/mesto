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
}

// Закрытие любого поп-ап окна
function closePopUp(popup){
    popup.classList.remove('popup_opened');
}

// Создание карточки
function renderCard(element){
    const cardTemplate = page.querySelector('#card').content; 
    const cardElement = cardTemplate.querySelector('.elements__card').cloneNode(true);
    cardElement.querySelector('.elements__card-caption-title').textContent = element.name;
    cardElement.querySelector('.elements__card-pic').src = element.link;
    cardElement.querySelector('.elements__card-pic').alt = element.name;

    //Обработчик LikeButton
    cardElement.querySelector('.elements__card-caption-like-button').addEventListener('click', function (evt) {
        evt.target.classList.toggle('elements__card-caption-like-button_active');
        });

    //Обработчик события "Увеличение картинки при нажатии"
    cardElement.querySelector('.elements__card-pic').addEventListener('click', renderImagePopUp);

    //Обработчик DeleteButton
    cardElement.querySelector('.elements__card-delete-button').addEventListener('click', function deleteCard(evt){
        evt.target.closest('.elements__card').remove();
    }); 
    return cardElement;
}

//Добавление карточки в контейнер
function addCard(container, cardElement) { 
  container.prepend(cardElement);
}

//Загрузка поп-апа с увеличенной картинкой
function renderImagePopUp(evt){
    imagePopUp.querySelector('.popup__photo').src = evt.target.src;
    imagePopUp.querySelector('.popup__photo').alt = evt.target.alt;
    const imageCard = evt.target.closest('.elements__card');
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

//загрузка поп-апа с добавлением фото
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

 //Обработчик CloseButton
 closeButton.forEach( function(button){
  button.addEventListener('click', function(evt){
    const popup = evt.target.closest('.popup');
    closePopUp(popup);
  })
 })

editButton.addEventListener('click',renderEditPopUp); 
addButton.addEventListener('click', renderAddPopUp);
editPopUp.querySelector('.popup__form').addEventListener('submit', submitEditForm);
addPopUp.querySelector('.popup__form').addEventListener('submit', submitAddForm);
loadPage(initialCards);


