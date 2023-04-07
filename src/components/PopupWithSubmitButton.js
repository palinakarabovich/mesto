import Popup from './Popup.js';

export default class PopupWithSubmitButton extends Popup{
    constructor(popupSelector) {
        super(popupSelector);
        this._popupElement = document.querySelector(popupSelector);
        this._form = this._popupElement.querySelector('.popup__form');
        this._buttonElement = this._form.querySelector('.popup__save-button');
        this._buttonText = this._buttonElement.value;
      }  

      renderSavings(status){
        if(status){
            this._buttonElement.value = 'Saving...'
        }
        else{
            this._buttonElement.value = this._buttonText;
        }
    }
    
      setSubmit(submitAction) {
        this._handleSubmit = submitAction;
      }

      setEventListeners(){
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleSubmit();
        });
    }
}