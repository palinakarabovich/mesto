const imagePopup = document.querySelector('.popup_type_photo');
const cardPhotoPopup = imagePopup.querySelector('.popup__photo');
const cardTitlePopup = imagePopup.querySelector('.popup__photo-title');

export default class Card {
    constructor({data,handleCardClick}, templateSelector) {
        this._name = data.name;
        this._link = data.link;
        this._temptateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
    }

    _getTemplate(){
        return document
          .querySelector(this._temptateSelector)
          .content
          .querySelector('.elements__card')
          .cloneNode(true);
    } 

    generateCard() {
        this._card = this._getTemplate();
        this._cardPic = this._card.querySelector('.elements__card-pic');
        this._deleteButton = this._card.querySelector('.elements__card-delete-button');
        this._likeButton = this._card.querySelector('.elements__card-caption-like-button');
        this._setEventListeners();
        this._cardPic.src = this._link;
        this._cardPic.alt = this._name;
        this._card.querySelector('.elements__card-caption-title').textContent = this._name;
        return this._card;
    }

    _toggleLike() {
        this._likeButton.classList.toggle('elements__card-caption-like-button_active');
    }

    _deleteCard() {
        this._card.remove();
    }

    _renderimagePopup() {
        cardPhotoPopup.src = this._link;
        cardPhotoPopup.alt = this._name;
        cardTitlePopup.textContent = this._name;
    }

    _setEventListeners() {
        //LikeButton
        this._likeButton.addEventListener('click', () => { this._toggleLike()});

        //Увеличение картинки при нажатии
        this._cardPic.addEventListener('click', () => {this._handleCardClick(this._name, this._link)});

        //DeleteButton
        this._deleteButton.addEventListener('click', () => { this._deleteCard()});
    }
}
