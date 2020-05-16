import DataSource from '../data/data-source.js';
import '../components/ClubList.js'
var main = () => {
    const searchElement = document.querySelector("#searchElement");
    const buttonSearchElement = document.querySelector("#searchButtonElement");
    const clubListElement = document.querySelector("#clubList");
  
  
    const onButtonSearchClicked = async () => {
        try{
            const result = await DataSource.searchClub(searchElement.value);
            renderResult(result);
        } catch (reasonRejected) {
            fallbackResult(reasonRejected)
        }
    };
  
  
    const renderResult = (results) => {
        const ClubList = document.createElement('club-list');
        ClubList.items = results;
        clubListElement.appendChild(ClubList);
    };
  
  
    var fallbackResult = (message) => {
        clubListElement.innerHTML = "";
        clubListElement.innerHTML += '<h2 class="placeholder">' + message + '</h2>'
    };
  
  
    buttonSearchElement.addEventListener("click", onButtonSearchClicked);
 };

 export default main;