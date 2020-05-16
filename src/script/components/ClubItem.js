class ClubItem extends HTMLElement {
    set item(item){
        this._item = item
        this.render();
    }
    
    render(){
        this.innerHTML = `
            <div class="club">
                <img class="fan-art-club" src="${this._item.fanArt}" alt="Fan Art">
                <div class="club-info">
                    <h2>${this._item.name}</h2>
                    <p>${this._item.description}</p>
                </div>
            </div>
        `
    }
}

customElements.define('club-item', ClubItem);