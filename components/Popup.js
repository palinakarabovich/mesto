export default class Popup{
    constructor(popupSelector){
        this._popupElement = document.querySelector(popupSelector);
        this._popupCloseButton = this._popupElement.querySelector('.popup__close-button');
        this._handleEscClose = this._handleEscClose.bind(this);
        this.__handleOverlayClick = this._handleOverlayClick.bind(this);
    }

    openPopup(){
        this._popupElement.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    closePopup(){
        this._popupElement.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose(evt){
        if (evt.key === 'Escape') {
            this.closePopup();
          }
    }

    _handleOverlayClick(evt){
        if (evt.target === evt.currentTarget) {
            this.closePopup();
          }
    }

    setEventListeners(){
        this._popupElement.addEventListener('mousedown', (evt) => this.__handleOverlayClick(evt));
        this._popupCloseButton.addEventListener('click', () => this.closePopup());
    }
}