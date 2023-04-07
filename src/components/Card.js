let isLiked = false;

export default class Card {
    constructor({data,handleCardClick, handleTrashClick, handleLikeClick}, templateSelector, id) {
        this._name = data.name;
        this._link = data.link;
        this._temptateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this._handleTrashClick = handleTrashClick;
        this._ownerId = data.owner._id;
        this._cardId = data._id;
        this._userId = id;
        this._likesSum = data.likes.length;
        this._likesArr = data.likes;
        this._handleLikeClick = handleLikeClick;
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
        this._likeSumElement = this._card.querySelector('.elements__card-caption-like-sum');
        this._deleteButton = this._card.querySelector('.elements__card-delete-button');
        this._likeButton = this._card.querySelector('.elements__card-caption-like-button');
        this._setEventListeners();
        this._cardPic.src = this._link;
        this._cardPic.alt = this._name;
        this._card.querySelector('.elements__card-caption-title').textContent = this._name;
        this._likeSumElement.textContent = this._likesSum;
        let myLike = this._likesArr.some((array) => {
            return array._id === this._userId;
        });
        if(myLike){
            isLiked = true;
            this._toggleLike();
        }
        else{
            isLiked = false;
        }
        if (this._userId !== this._ownerId) {
            this._deleteButton.remove();
        }
      
        return this._card;
    }

    _toggleLike() {
        if(!this._likeButton.classList.contains('elements__card-caption-like-button_active')){
            isLiked = true;
            this._handleLikeClick(this._cardId, isLiked, this);
        }
        else {
            isLiked = false;
            this._handleLikeClick(this._cardId, isLiked, this);
        }
    }

    setLikes(likesSum){
        this._likesSum = likesSum;
        this._likeSumElement.textContent = this._likesSum;
        this._likeButton.classList.toggle('elements__card-caption-like-button_active');
    }

    deleteCard() {
        this._card.remove();
        this._card = null;
    }

    _setEventListeners() {
        //LikeButton
        this._likeButton.addEventListener('click', () => { this._toggleLike()});

        this._cardPic.addEventListener('click', () => {this._handleCardClick(this._name, this._link)});

        //DeleteButton
        this._deleteButton.addEventListener('click', () => { 
            this._handleTrashClick(this._cardId, this)});
    }
}
