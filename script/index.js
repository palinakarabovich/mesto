let page = document.querySelector('.page'); 
let formElement = page.querySelector('.popup__form'); 
let nameInput = formElement.querySelector('.popup__input_type_name');
let jobInput = formElement.querySelector('.popup__input_type_description');
let nameOnPage = page.querySelector('.profile__info-name');
let jobOnPage = page.querySelector('.profile__info-caption');
let editButton = page.querySelector('.profile__info-edit-button');
let closeButton = page.querySelector('.popup__close-button');
let popup = page.querySelector('.popup');

function closePopUp(){
    popup.classList.remove('popup_opened');
}

function openPopUp(){
    popup.classList.add('popup_opened');
    nameInput.value = nameOnPage.textContent;
    jobInput.value = jobOnPage.textContent;
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    nameOnPage.textContent = nameInput.value;
    jobOnPage.textContent = jobInput.value;
    closePopUp();
}

editButton.addEventListener('click',openPopUp);
formElement.addEventListener('submit', formSubmitHandler); 
closeButton.addEventListener('click', closePopUp);


