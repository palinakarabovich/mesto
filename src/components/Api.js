export default class Api {
    constructor({baseUrl, headers}) {
      this._baseUrl = baseUrl;
      this._token = headers['authorization'];
      this._cardsUrl = `${this._baseUrl}/cards`;
      this._userUrl = `${this._baseUrl}/users/me`;
    }

    _checkResponse(res) {
      if(res.ok){
        return res.json();
    }
        return Promise.reject(`Error: ${res.status}`);
    }
  
    getInitialCards() {
     return fetch (this._cardsUrl, {
        method: 'GET',
        headers: {
            authorization: this._token,
        }
     })
     .then(this._checkResponse);
    }
  

  getUserInfo(){
    return fetch(this._userUrl, {
        method: 'GET',
        headers: {
            authorization: this._token
        }
    })
    .then(this._checkResponse);
  }
  
  saveUserChanges({name, about}){
    return fetch(this._userUrl, {
        method: 'PATCH',
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            about: about
        })
      })
      .then(this._checkResponse);    
  }

  changeAvatar({link}) {
    return fetch(`${this._userUrl}/avatar`, {
        method: 'PATCH',
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          avatar: link
        })
      })
      .then(this._checkResponse);
  }

  deleteCard(cardId) {
    return fetch(`${this._cardsUrl}/${cardId}`, {
        method: 'DELETE',
        headers: {
          authorization: this._token,
        }
      })
      .then(this._checkResponse);
  }

  addNewCard({name, link}){
    return fetch(this._cardsUrl,{
        method: 'POST',
        headers:{
            authorization: this._token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            link: link
        })
    })
    .then(this._checkResponse);
  }

  toggleLike(card, isLiked){
    if(isLiked){
      return fetch(`${this._cardsUrl}/${card}/likes`,{
        method: 'PUT',
        headers:{
          authorization: this._token,
        }
      })
      .then(this._checkResponse);
    }
    else {
      return fetch(`${this._cardsUrl}/${card}/likes`,{
        method: 'DELETE',
        headers:{
          authorization: this._token,
        }
      })
      .then(this._checkResponse);
    }
  }
}