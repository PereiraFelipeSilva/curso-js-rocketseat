/* Seguindo o resultado do exercício anterior adicione um input em tela e um botão como a seguir:

<input type="text" name="nome">
<button onClick="adicionar()">Adicionar</button>
Ao clicar no botão, a função adicionar() deve ser disparada adicionando um novo item a lista de
nomes baseado no nome preenchido no input e renderizando o novo item em tela juntos aos
demais itens anteriores. Além disso, o conteúdo do input deve ser apagado após o clique. */

let nomes = ["Diego", "Gabriel", "Lucas"];
let lista = document.querySelector('.lista');
let input = document.querySelector('#input');
let button = document.querySelector('#button');

function addNome(nome) {
   nome = input.value;
   nomes.push(nome);
}

button.addEventListener('click', ()=>{
   lista.innerHTML = '';
   addNome();
   for(nome of nomes){
      let li = document.createElement('li');
      li.innerHTML = nome;
      lista.appendChild(li);
   };
   input.value = '';
   input.focus();
   console.log(nomes);
});