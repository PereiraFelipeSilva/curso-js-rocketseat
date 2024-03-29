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
   repositoriesList.innerHTML = '';
   for(repo of repositories){
      let li = document.createElement('li');
      li.innerHTML = repo.name;
      repositoriesList.appendChild(li);
   }
};

function showLoadingMessage(){
   repositoriesList.innerHTML = '';

   let loadingMessage = document.createElement('li');
   loadingMessage.innerHTML = 'carregando...';
   repositoriesList.appendChild(loadingMessage);
}

function searchRepositories(){
   repositoriesList.innerHTML = '';

   showLoadingMessage();
   
   let user = input.value;
   if(!user) return;

   axios.get(`https://api.github.com/users/${user}/repos`)
      .then(function(response){
         showRepositories(response.data);
         input.value = '';
         input.focus();
         let img = document.createElement('img');
         img.setAttribute('src', response.data[0].owner.avatar_url);
         img.style.width = '150px';
         img.style.height = '150px';
         repositoriesList.appendChild(img);
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