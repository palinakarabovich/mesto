export default class Section{
    constructor({renderer}, containerSelector){
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    addItemAppend(element){
        this._container.append(element);
    }

    addItemPrepend(element){
        this._container.prepend(element);
    }

    renderItems(arr, id){
        arr.forEach( (item) => {
            this._renderer(item, id);
        })
    }

}