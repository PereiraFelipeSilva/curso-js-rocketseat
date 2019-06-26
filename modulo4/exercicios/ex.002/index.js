/* Crie uma tela com um <input> que deve receber o nome de um usuário no Github. Após digitar o
nome do usuário e clicar no botão buscar a aplicação deve buscar pela API do Github (conforme
URL abaixo) os dados de repositórios do usuário e mostrá-los em tela:
URL de exemplo: https://api.github.com/users/diego3g/repos
Basta alterar "diego3g" pelo nome do usuário.

<input type="text" name="user">
<button onclick="">Adicionar</button>

Depois de preencher o input e adicionar, a seguinte lista deve aparecer abaixo:

<ul>
 <li>repo1</li>
 <li>repo2</li>
 <li>repo3</li>
 <li>repo4</li>
 <li>repo5</li>
</ul> */

const input = document.querySelector('#input');
const button = document.querySelector('#button');
let repositoriesList = document.querySelector('.repositoriesList');

function showRepositories(repositories){
   for(repo of repositories){
      let li = document.createElement('li');
      li.innerHTML = repo.name;
      repositoriesList.appendChild(li);
   }
}

function searchRepositories(){
   repositoriesList.innerHTML = '';
   let user = input.value;

   if(!user) return;

   axios.get(`https://api.github.com/users/${user}/repos`)
      .then(function(response){
         showRepositories(response.data);
         input.value = '';
         input.focus();
      })
      .catch(function(){
         let errorMessage = document.createElement('li');
         errorMessage.innerHTML = '<strong>Usuário não encontrado!</strong> Por favor, tente novamente';
         errorMessage.style.color = '#f00';
         repositoriesList.appendChild(errorMessage);
         input.value = '';
         input.focus();
      })
};

button.onclick = searchRepositories;