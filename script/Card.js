import {openPopUp} from './index.js'

const imagePopUp = document.querySelector('.popup_type_photo');
const photo = imagePopUp.querySelector('.popup__photo');

export default class Card {
    constructor(data, templateSelector){
        this._name = data.name;
        this._link = data.link;
        this._temptateSelector = templateSelector;
    }

    _getTemplate(){
        const cardElement = document
        .querySelector(this._temptateSelector)
        .content
        .querySelector('.elements__card')
        .cloneNode(true);
  
      return cardElement;
    }

    generateCard(){
        this._card = this._getTemplate();
        this._setEventListeners();
        this._cardPic = this._card.querySelector('.elements__card-pic');
        this._cardPic.src = this._link;
        this._cardPic.alt = this._name;
        this._card.querySelector('.elements__card-caption-title').textContent = this._name;
        return this._card;
    }

    _setEventListeners(){
        //LikeButton
        this._card.querySelector('.elements__card-caption-like-button').addEventListener('click', this._toggleLike);

        //Увеличение картинки при нажатии
        this._cardPic.addEventListener('click', this._renderImagePopUp);

        //DeleteButton
        this._card.querySelector('.elements__card-delete-button').addEventListener('click', this._deleteCard);
    }

    _toggleLike(evt) {
        evt.target.classList.toggle('elements__card-caption-like-button_active');
      }

    _deleteCard(evt) {
        evt.target.closest('.elements__card').remove();
      }   
    
    _renderImagePopUp(evt) {
        photo.src = evt.target.src;
        photo.alt = evt.target.alt;
        imagePopUp.querySelector('.popup__photo-title').textContent = evt.target.alt;
        openPopUp(imagePopUp);
      }
}
