let page = document.querySelector('.page'); 
let formElement = page.querySelector('.popup__form'); 
let nameInput = formElement.querySelector('.popup__input-name');
let jobInput = formElement.querySelector('.popup__input-description');
let nameOnPage = page.querySelector('.profile__info-name');
let jobOnPage = page.querySelector('.profile__info-caption');
let editButton = page.querySelector('.profile__info-edit-button');
let closeButton = page.querySelector('.popup__close-button');
let popup = page.querySelector('.popup');

editButton.addEventListener('click',popupOpen);
formElement.addEventListener('submit', formSubmitHandler); 
closeButton.addEventListener('click', popupClose);

function popupClose(){
    popup.classList.remove('popup_opened');
}

function popupOpen(){
    popup.classList.add('popup_opened');
    nameInput.value = nameOnPage.textContent;
    jobInput.value = jobOnPage.textContent;
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    let newName = nameInput.value;
    let newJob = jobInput.value;
    nameOnPage.textContent = newName;
    jobOnPage.textContent = newJob;
    popupClose();
}


