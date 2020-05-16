class AppBar extends HTMLElement {
    connectedCallback(){
        this.headerName = this.getAttribute("headerName");
        this.render();
    }
    render(){
        this.innerHTML = `
        <div id="appBar" class="app-bar">
            <h2>${this.headerName}</h2>
        </div>
        `
    }
}

customElements.define('app-bar', AppBar);