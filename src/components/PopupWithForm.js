import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleSubmit) {
        super(popupSelector);
        this._handleSubmit = handleSubmit;
        this._popupElement = document.querySelector(popupSelector);
        this._form = this._popupElement.querySelector('.popup__form');
        this._inputList = Array.from(this._form.querySelectorAll('.popup__input'));
        this._buttonElement = this._form.querySelector('.popup__save-button');
    }

    _getInputValues(){
        const inputValues = new Map();
        this._inputList.forEach ( input =>{
            inputValues.set(input.name, input.value);
        })
        return inputValues;
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