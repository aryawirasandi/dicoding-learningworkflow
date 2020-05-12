// document.addEventListener("DOMContentLoaded", main);

const {coffeeStock, isCoffeReady } = require('./state.js');

const makeCoffe = (type, miligrams) => {
    if(coffeeStock[type] >= miligrams) {
        console.log("Kopi berhasil dibuat");
    }else{
        console.log("Biji kopi habis");
    }
}

makeCoffe('robusta', 20);