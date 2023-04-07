import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleSubmit) {
        super(popupSelector);
        this._handleSubmit = handleSubmit;
        this._popupElement = document.querySelector(popupSelector);
        this._form = this._popupElement.querySelector('.popup__form');
        this._inputList = Array.from(this._form.querySelectorAll('.popup__input'));
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
    
    _getInputValues() {
        this._formValues = {};
        this._inputList.forEach((input) => {
          this._formValues[input.name] = input.value;
        });
    
        return this._formValues;
      }

    setEventListeners(){
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleSubmit(this._getInputValues());
        });
    }

    closePopup(){
        super.closePopup();
        this._form.reset();
    }



}