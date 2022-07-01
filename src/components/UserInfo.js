export default class UserInfo {
    constructor(nameSelector, infoSelector, avatarSelector){
        this._nameElement = document.querySelector(nameSelector);
        this._aboutElement = document.querySelector(infoSelector);
        this._avatarElement = document.querySelector(avatarSelector);
    }

    getUserInfo(){
        return this._userInfo = {
            name: this._nameElement.textContent,
            about: this._aboutElement.textContent
        }
    }

    setUserInfo({name, about, avatar}){
        this._nameElement.textContent = name;
        this._aboutElement.textContent = about;
        this._avatarElement.src = avatar;
    }

}