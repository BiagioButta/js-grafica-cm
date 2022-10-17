"use strict";

let grigliahtml = document.querySelector('.griglia');
let playhtml = document.getElementById('play');
let difficoltahtml = document.getElementById('difficolta');
let personalizzahtml = document.getElementById('personalizza');
let ascissehtml = document.getElementById('ascisse');
let ordinatehtml = document.getElementById('ordinate');

console.log(typeof 'ascissehtml')

// applico la funzione creaCelle al click del tasto gioca
playhtml.addEventListener('click',function(){

    grigliahtml.innerHTML= '';
    let valoreDiff = parseInt(difficoltahtml.value);

    if(valoreDiff == 0){
        grigliahtml.innerHTML='';
    }else if(valoreDiff == 1){
        creaCelle(9,9)
    }else if(valoreDiff == 2){
        creaCelle(16,16)
    }else if(valoreDiff == 3){
        creaCelle(30,16)
    }
})

// applico la funzione creaCelle al tasto personalizza

personalizzahtml.addEventListener('click', function(){
    grigliahtml.innerHTML = '';
    ascissehtml.innerHTML= '',
    ordinatehtml.innerHTML = '';

    let colonne = parseInt(ascissehtml.value);
    let righe = parseInt(ordinate.value);

    creaCelle(colonne, righe);
})

// funzione che crea celle x * y
function creaCelle ( x, y ){
    
    const celleTot = x*y;
    
    for(let i = 1; i <= celleTot; i++){

        const cella = document.createElement('div');
        cella.className = 'coordinata';
        cella.classList.add('debug')
        cella.innerHTML = `${i}`;
        grigliahtml.append(cella);
        // pongo x uguale all asse delle ascisse
        // y sarà l'ordinata
        cella.style.width = `calc( 100%  / ${x}) `;
        
        // do il colore verde al click
        cella.addEventListener('click', function(){
            this.classList.add('bg-green')
        })
        
    }
}
