(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var t=!1,n=function(){function n(e,t,o){var r=e.data,i=e.handleCardClick,a=e.handleTrashClick,u=e.handleLikeClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this._name=r.name,this._link=r.link,this._temptateSelector=t,this._handleCardClick=i,this._handleTrashClick=a,this._ownerId=r.owner._id,this._cardId=r._id,this._userId=o,this._likesSum=r.likes.length,this._likesArr=r.likes,this._handleLikeClick=u}var o,r;return o=n,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._temptateSelector).content.querySelector(".elements__card").cloneNode(!0)}},{key:"generateCard",value:function(){var e=this;return this._card=this._getTemplate(),this._cardPic=this._card.querySelector(".elements__card-pic"),this._likeSumElement=this._card.querySelector(".elements__card-caption-like-sum"),this._deleteButton=this._card.querySelector(".elements__card-delete-button"),this._likeButton=this._card.querySelector(".elements__card-caption-like-button"),this._setEventListeners(),this._cardPic.src=this._link,this._cardPic.alt=this._name,this._card.querySelector(".elements__card-caption-title").textContent=this._name,this._likeSumElement.textContent=this._likesSum,this._likesArr.some((function(t){return t._id===e._userId}))?(t=!0,this._toggleLike()):t=!1,this._userId!==this._ownerId&&this._deleteButton.remove(),this._card}},{key:"_toggleLike",value:function(){this._likeButton.classList.contains("elements__card-caption-like-button_active")?(t=!1,this._handleLikeClick(this._cardId,t,this)):(t=!0,this._handleLikeClick(this._cardId,t,this))}},{key:"setLikes",value:function(e){this._likesSum=e,this._likeSumElement.textContent=this._likesSum,this._likeButton.classList.toggle("elements__card-caption-like-button_active")}},{key:"deleteCard",value:function(){this._card.remove(),this._card=null}},{key:"_setEventListeners",value:function(){var e=this;this._likeButton.addEventListener("click",(function(){e._toggleLike()})),this._cardPic.addEventListener("click",(function(){e._handleCardClick(e._name,e._link)})),this._deleteButton.addEventListener("click",(function(){e._handleTrashClick(e._cardId,e)}))}}])&&e(o.prototype,r),Object.defineProperty(o,"prototype",{writable:!1}),n}();function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var r=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupElement=document.querySelector(t),this._popupCloseButton=this._popupElement.querySelector(".popup__close-button"),this._handleEscClose=this._handleEscClose.bind(this),this.__handleOverlayClick=this._handleOverlayClick.bind(this)}var t,n;return t=e,(n=[{key:"openPopup",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"closePopup",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.closePopup()}},{key:"_handleOverlayClick",value:function(e){e.target===e.currentTarget&&this.closePopup()}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.addEventListener("mousedown",(function(t){return e.__handleOverlayClick(t)})),this._popupCloseButton.addEventListener("click",(function(){return e.closePopup()}))}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(){return u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var o=c(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},u.apply(this,arguments)}function c(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=p(e)););return e}function s(e,t){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},s(e,t)}function l(e,t){if(t&&("object"===i(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}var f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)}(c,e);var t,n,o,r,i=(o=c,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=p(o);if(r){var n=p(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return l(this,e)});function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,e))._popupElement=document.querySelector(e),t._form=t._popupElement.querySelector(".popup__form"),t._buttonElement=t._form.querySelector(".popup__save-button"),t._buttonText=t._buttonElement.value,t}return t=c,(n=[{key:"renderSavings",value:function(e){this._buttonElement.value=e?"Saving...":this._buttonText}},{key:"setSubmit",value:function(e){this._handleSubmit=e}},{key:"setEventListeners",value:function(){var e=this;u(p(c.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit()}))}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(r);function h(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _=function(){function e(t,n){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),d(this,"_showInputError",(function(e,t){var n=o._form.querySelector(".".concat(e.id,"-error"));e.classList.add(o._inputErrorClass),n.textContent=t,n.classList.add(o._errorClass)})),d(this,"_hideInputError",(function(e){var t=o._form.querySelector(".".concat(e.id,"-error"));e.classList.remove(o._inputErrorClass),t.classList.remove(o._errorClass),t.textContent=""})),d(this,"enableValidation",(function(){o._setEventListeners()})),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._form=n,this._inputList=Array.from(n.querySelectorAll(this._inputSelector)),this._buttonElement=n.querySelector(this._submitButtonSelector)}var t,n;return t=e,(n=[{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this.deactivateButton():this.activateButton()}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"deactivateButton",value:function(){this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.setAttribute("disabled","disabled")}},{key:"activateButton",value:function(){this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.removeAttribute("disabled")}},{key:"resetForm",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)}))}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var v=function(){function e(t,n){var o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItemAppend",value:function(e){this._container.append(e)}},{key:"addItemPrepend",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(e,t){var n=this;e.forEach((function(e){n._renderer(e,t)}))}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function m(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var o=E(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},k.apply(this,arguments)}function E(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}function g(e,t){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},g(e,t)}function S(e,t){if(t&&("object"===b(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(a,e);var t,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(o);if(r){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return S(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupTitle=t._popupElement.querySelector(".popup__photo-title"),t._popupPhoto=t._popupElement.querySelector(".popup__photo"),t}return t=a,(n=[{key:"openPopup",value:function(e,t){k(w(a.prototype),"openPopup",this).call(this),this._popupTitle.textContent=e,this._popupPhoto.src=t,this._popupPhoto.alt=e}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(r);function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function O(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var o=L(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},j.apply(this,arguments)}function L(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=R(e)););return e}function T(e,t){return T=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},T(e,t)}function I(e,t){if(t&&("object"===P(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function R(e){return R=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},R(e)}var q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&T(e,t)}(a,e);var t,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=R(o);if(r){var n=R(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return I(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleSubmit=t,n._popupElement=document.querySelector(e),n._form=n._popupElement.querySelector(".popup__form"),n._inputList=Array.from(n._form.querySelectorAll(".popup__input")),n._buttonElement=n._form.querySelector(".popup__save-button"),n._buttonText=n._buttonElement.value,n}return t=a,(n=[{key:"renderSavings",value:function(e){this._buttonElement.value=e?"Saving...":this._buttonText}},{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;j(R(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit(e._getInputValues())}))}},{key:"closePopup",value:function(){j(R(a.prototype),"closePopup",this).call(this),this._form.reset()}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(r);function B(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var U=function(){function e(t,n,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameElement=document.querySelector(t),this._aboutElement=document.querySelector(n),this._avatarElement=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._userInfo={name:this._nameElement.textContent,about:this._aboutElement.textContent}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about,o=e.avatar;this._nameElement.textContent=t,this._aboutElement.textContent=n,this._avatarElement.src=o}}])&&B(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function x(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var A=function(){function e(t){var n=t.baseUrl,o=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=n,this._token=o.authorization,this._cardsUrl="".concat(this._baseUrl,"/cards"),this._userUrl="".concat(this._baseUrl,"/users/me")}var t,n;return t=e,n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch(this._cardsUrl,{method:"GET",headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"getUserInfo",value:function(){return fetch(this._userUrl,{method:"GET",headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"saveUserChanges",value:function(e){var t=e.name,n=e.about;return fetch(this._userUrl,{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:t,about:n})}).then(this._checkResponse)}},{key:"changeAvatar",value:function(e){var t=e.link;return fetch("".concat(this._userUrl,"/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:t})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._cardsUrl,"/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"addNewCard",value:function(e){var t=e.name,n=e.link;return fetch(this._cardsUrl,{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:t,link:n})}).then(this._checkResponse)}},{key:"toggleLike",value:function(e,t){return t?fetch("".concat(this._cardsUrl,"/").concat(e,"/likes"),{method:"PUT",headers:{authorization:this._token}}).then(this._checkResponse):fetch("".concat(this._cardsUrl,"/").concat(e,"/likes"),{method:"DELETE",headers:{authorization:this._token}}).then(this._checkResponse)}}],n&&x(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),V={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"},z=document.querySelector(".profile__info-edit-button"),D=document.querySelector(".profile__add-photo-button"),N=document.querySelector(".profile__avatar-edit-button"),F=document.querySelector(".popup__input_type_name"),J=document.querySelector(".popup__input_type_description");function G(e,t){return new n({data:e,handleCardClick:M,handleTrashClick:W,handleLikeClick:K},"#card",t).generateCard()}var H=new C(".popup_type_photo");function M(e,t){H.openPopup(e,t)}function K(e,t,n){re.toggleLike(e,t).then((function(e){n.setLikes(e.likes.length)})).catch((function(e){console.log(e)}))}H.setEventListeners();var Q=new f(".popup_type_delete-card");function W(e,t){Q.setSubmit((function(){return function(e,t){Q.renderSavings(!0),re.deleteCard(e).then((function(){t.deleteCard(),Q.closePopup()})).catch((function(e){console.log(e)})).finally((function(){Q.renderSavings(!1)}))}(e,t)})),Q.openPopup()}Q.setEventListeners();var X=new q(".popup_type_add-photo",(function(e){X.renderSavings(!0),re.addNewCard(e).then((function(e){oe.addItemPrepend(G(e,e.owner._id)),ee.deactivateButton(),X.closePopup()})).catch((function(e){console.log(e)})).finally((function(){X.renderSavings(!1)}))}));X.setEventListeners();var Y=new q(".popup_type_edit-avatar",(function(e){Y.renderSavings(!0),re.changeAvatar(e).then((function(e){$.setUserInfo(e),Y.closePopup()})).catch((function(e){console.log(e)})).finally((function(){Y.renderSavings(!1)})),ne.deactivateButton()}));Y.setEventListeners();var Z=new q(".popup_type_edit",(function(e){Z.renderSavings(!0),re.saveUserChanges(e).then((function(e){$.setUserInfo(e),Z.closePopup()})).catch((function(e){console.log(e)})).finally((function(){Z.renderSavings(!1)}))}));Z.setEventListeners();var $=new U(".profile__info-name",".profile__info-caption",".profile__avatar"),ee=new _(V,document.querySelector("#popup-add-photo-form"));ee.enableValidation();var te=new _(V,document.querySelector("#popup-edit-profile-form"));te.enableValidation();var ne=new _(V,document.querySelector("#popup-edit-avatar-form"));ne.enableValidation(),z.addEventListener("click",(function(){var e;Z.openPopup(),e=$.getUserInfo(),F.value=e.name,J.value=e.about,te.resetForm()})),D.addEventListener("click",(function(){X.openPopup(),ee.resetForm()})),N.addEventListener("click",(function(){Y.openPopup(),ne.resetForm()}));var oe=new v({renderer:function(e,t){oe.addItemAppend(G(e,t))}},".elements"),re=new A({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-44",headers:{authorization:"06384b00-acd1-47a1-8cb5-23fe9d72ccda","Content-Type":"application/json"}});Promise.all([re.getInitialCards(),re.getUserInfo()]).then((function(e){$.setUserInfo(e[1]),oe.renderItems(e[0],e[1]._id)})).catch((function(e){console.log(e)}))})();