"use strict";

let rowhtml = document.querySelector('.row');
let playhtml = document.getElementById('play');

playhtml.addEventListener('click',function(){
    rowhtml.innerHTML= '';
    creaCelle(10,10)
})


// funzione che crea celle x * y
function creaCelle ( x, y ){
    
    const celleTot = x*y;
    
    for(let i = 1; i <= celleTot; i++){
        const cella = document.createElement('div');
        cella.className = 'coordinata';
        cella.classList.add('debug')
        cella.innerHTML = `${i}`;
        rowhtml.append(cella);
        cella.style.width = `calc(100% / ${x})`;
        
        cella.addEventListener('click', function(){
            this.classList.add('bg-green')
        })
        
    }
}
