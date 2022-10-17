"use strict";

let rowhtml = document.querySelector('.row');
let playhtml = document.getElementById('play');



function creaCelle ( x, y){

    const celleTot = x*y;

    for(let i = 1; i <= celleTot; i++){
        const cella = document.createElement('div');
        cella.className = 'coordinata';
        cella.classList.add('debug')
        cella.innerHTML = `${i}`;
        rowhtml.append(cella);

    }
}
creaCelle(10,10)
console.log(creaCelle)