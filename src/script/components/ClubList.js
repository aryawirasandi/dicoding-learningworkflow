import '../components/ClubItem.js';
class ClubList extends HTMLElement {
    set items(items){
        this._items = items
        this.render();
    }
    
    render(){
        this._items.forEach(item => {
            const clubElement = document.createElement("club-item");
            clubElement.item = item;
            
            this.append(clubElement)
        })
    }
}

customElements.define("club-list", ClubList);