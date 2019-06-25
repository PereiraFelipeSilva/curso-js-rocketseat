/* Utilizando o resultado do primeiro desafio, toda vez que o usuário passar o mouse por cima de
algum quadrado troque sua cor para uma cor aleatória gerada pela função abaixo: */

const buttonElement = document.querySelector('#button');
const container = document.querySelector('.container');


buttonElement.addEventListener('click', () => {
   let divElement = document.createElement('div');
   divElement.style.height = '100px';
   divElement.style.width = '100px';
   divElement.style.marginBottom = '1%';
   divElement.style.backgroundColor = '#f00';

   container.appendChild(divElement);
   
   divElement.onmouseover = ()=>{
      divElement.style.backgroundColor = getRandomColor();
   };
   divElement.onmouseleave = ()=>{
      divElement.style.backgroundColor = getRandomColor();
   };
});

function getRandomColor() {
   let letters = "0123456789ABCDEF";
   let color = "#";
   for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
   }
   return color;
};


