/* A partir do seguinte vetor: */

let nomes = ["Diego", "Gabriel", "Lucas"];

/* Preencha uma lista (<ul>) no HTML com os itens da seguinte forma:
● Diego
● Gabriel
● Lucas */

const lista = document.querySelector('.lista');

for(i in nomes){
   let liElement = document.createElement('li');
   liElement.innerHTML = nomes[i];
   lista.appendChild(liElement);
};