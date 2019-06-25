/* Crie um botão que ao ser clicado cria um novo elemento em tela com a forma de um quadrado
vermelho com 100px de altura e largura. Sempre que o botão for clicado um novo quadrado deve
aparecer na tela */

const buttonElement = document.querySelector('#button');
const container = document.querySelector('.container');


buttonElement.addEventListener('click', () => {
   let divElement = document.createElement('div');
   divElement.style.height = '100px';
   divElement.style.width = '100px';
   divElement.style.marginBottom = '1%';
   divElement.style.backgroundColor = '#f00';

   container.appendChild(divElement);
});



