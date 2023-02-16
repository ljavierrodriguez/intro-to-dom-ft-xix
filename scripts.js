/* 

Metodos de Acceso a los Elementos (nodos)

getElementById('id') // retorna el elemento segun su ID
getElementsByClassName('class') // retorna una coleccion de elementos segun la clase que contiene
getElementsByTagName('tag') // retorna una coleccion de elementos segun la etiqueta o tag dado
getElementsByName('name') // retorna una coleccion de elementos segun el valor del atributo name

querySelector('selector_css') // retorna el primer elemento con el selector css dado
querySelectorAll('selector_css') // retorna todos los elementos con el selector css dado

Metodos de Creacion de Elementos (nodos)

createElement('tag') // crear un nuevo elemento segun la etiqueta dada
createTextNode('texto') // crear un nuevo texto segun el valor dado
 
*/


//let all_p = document.querySelectorAll('p')
let all_p = document.getElementsByTagName('p')
console.log(all_p);

for(let p of all_p){
    p.innerHTML = p.textContent + " Parrafo";
    //console.log(p.textContent);
}


let register = document.getElementById('register');
let genero = register.querySelectorAll('[name=genero]');
console.log(genero);


let div = document.createElement('div');
let texto = "Div con texto creado desde el DOM";
let nodeTexto = document.createTextNode(texto)
//div.innerText = "Div creado con el DOM";
div.appendChild(nodeTexto);

div.classList.add('text-primary', 'fs-4')
console.log(div);

register.appendChild(div);


//let cards = document.getElementsByClassName('card');
let cards = document.querySelectorAll('#home .card')
console.log(cards);
for(let index in cards){
    console.log(index);
    if(typeof(index) === 'number')
        cards[index].classList.add('my-2')
}

let about = document.querySelector('#about');

let cards_about = about.querySelectorAll('.card');
console.log(cards_about);
let card_bodies = cards_about[2].querySelector('.card-body');
console.log(card_bodies);