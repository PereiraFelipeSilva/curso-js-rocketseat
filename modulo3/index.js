/* Criar uma função que permite adicionar e remover tarefas dinamicamente */

const button = document.querySelector('.app button');
let lista = document.querySelector('.lista');
let input = document.querySelector('#input');
let tarefas = JSON.parse(localStorage.getItem('Lista de tarefas')) || [];

function addTarefa(tarefa){
   tarefa = input.value;
   tarefas.push(tarefa);
   input.value = '';
   exibeTarefas();
   saveToStorage();
};

function excluirTarefa(position){
   tarefas.splice(position, 1);
   exibeTarefas();
   saveToStorage();
};

function exibeTarefas(){
   lista.innerHTML = '';
   for(tarefa of tarefas){
      let li = document.createElement('li');
      li.innerHTML = tarefa;
      
      let linkElement = document.createElement('a');
      let position = tarefas.indexOf(tarefa);
      linkElement.style.marginLeft = '1%';
      linkElement.innerHTML = 'Excluir Tarefa';
      linkElement.setAttribute('href', '#');
      linkElement.setAttribute('onclick', `excluirTarefa(${position})`);
      li.appendChild(linkElement);
      lista.appendChild(li);
   };
   input.focus();
   console.log(tarefas)
};

function saveToStorage(){
   localStorage.setItem('Lista de tarefas', JSON.stringify(tarefas));
};

button.onclick = addTarefa;

window.onload = exibeTarefas;