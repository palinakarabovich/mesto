//главная страница
let page = document.querySelector('.page'); 


//стандартные карточки 
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

//кнопки
let editButton = page.querySelector('.profile__info-edit-button');
let closeButton = page.querySelectorAll('.popup__close-button');
let addButton = page.querySelector('.profile__add-photo-button');


// Загрузка заданного массива карточек при запуске страницы  
function loadPage(cards){
    for (let i = 0; i<cards.length; i++){
        renderCard(cards[i]);
}
}

//Открытие любого поп-ап окна
function openPopUp(popup){
    popup.classList.add('popup_opened');
}

// Закрытие любого поп-ап окна
function closePopUp(evt){
    evt.target.closest('.popup').classList.remove('popup_opened');
}

// Загрузка любой карточки на страницу
function renderCard(element){
    let cardContainer = page.querySelector('.elements');
    const cardTemplate = page.querySelector('#card').content;
    const cardElement = cardTemplate.querySelector('.elements__card').cloneNode(true);
    cardElement.querySelector('.elements__card-caption-title').textContent = element.name;
    cardElement.querySelector('.elements__card-pic').src = element.link;
    cardElement.querySelector('.elements__card-pic').alt = element.name;

    //Обработчик событий LikeButton
    cardElement.querySelector('.elements__card-caption-like-button').addEventListener('click', function (evt) {
        evt.target.classList.toggle('elements__card-caption-like-button_active');
        });

    //Обработчик события "Увеличение картинки при нажатии"
    cardElement.querySelector('.elements__card-pic').addEventListener('click', renderImagePopUp);

    //Обработчик нажатия на корзинку
    cardElement.querySelector('.elements__card-delete-button').addEventListener('click', function deleteCard(evt){
        evt.target.closest('.elements__card').remove();
    })
    cardContainer.prepend(cardElement);
}

//Обработчик событий для всех элементов CloseButton
for (let i=0; i<closeButton.length; i++){
    closeButton[i].addEventListener('click', closePopUp)
}

//Загрузка поп-апа с увеличенной картинкой
function renderImagePopUp(evt){
    let imagePopUp = page.querySelector('.popup_type_photo');
    imagePopUp.querySelector('.popup__photo').src = evt.target.src;
    const imageCard = evt.target.closest('.elements__card');
    imagePopUp.querySelector('.popup__photo-title').textContent = imageCard.querySelector('.elements__card-caption-title').textContent;
    openPopUp(imagePopUp);
}

//Загрузка поп-апа с формой редактирования
function renderEditPopUp(){

    let editPopUp = page.querySelector('.popup_type_edit');

    //Значения инпутов
    let nameInput = page.querySelector('.popup__input_type_name');
    let jobInput = page.querySelector('.popup__input_type_description');

    //Значения со страницы
    let nameOnPage = page.querySelector('.profile__info-name');
    let jobOnPage = page.querySelector('.profile__info-caption');

    nameInput.value = nameOnPage.textContent;
    jobInput.value = jobOnPage.textContent;

    //Обработчик событий для кнопки Submit
    editPopUp.querySelector('.popup__form').addEventListener('submit', function(evt){
        evt.preventDefault();
        nameOnPage.textContent = nameInput.value;
        jobOnPage.textContent = jobInput.value;
        closePopUp(evt);
    });
    openPopUp(editPopUp);
}

//загрузка поп-апа с добавлением фото
 function renderAddPopUp(){
    let card ={
        name: '',
        link: '',
    }
     let addPopUp = page.querySelector('.popup_type_add-photo');

        addPopUp.querySelector('.popup__form').addEventListener('submit', function(evt){
            evt.preventDefault();
            card.name = addPopUp.querySelector('.popup__input_type_title').value;
            card.link = addPopUp.querySelector('.popup__input_type_link').value;
            renderCard(card);
            addPopUp.querySelector('.popup__input_type_title').value = '';
            addPopUp.querySelector('.popup__input_type_link').value = '';
            card = null;
            closePopUp(evt);
        });
    
    openPopUp(addPopUp);
 }

editButton.addEventListener('click',renderEditPopUp); 
addButton.addEventListener('click', renderAddPopUp);
loadPage(initialCards);


