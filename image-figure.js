class ImageFigure extends HTMLElement{
    constructor(){
        super();
        console.log("Constructed");
    }

    connectedCallback(){
        console.log("Connected");
    }

    disconnectedCallback(){
        console.log("Disconnected");
    }

    adoptedCallback(){
        console.log("Adopted");
    }
    
    attributeChangedCallback(name, oldValue, newValue){
        console.log(`Attributes : ${name} changed`);
    }
}

customElements.define('image-figure', ImageFigure);