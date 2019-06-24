/* Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript"
e retorna um booleano true/false caso exista ou não. */

let skills = ["Javascript", "ReactJS", "React Native"];

function temHabilidade(skills, skill) {
   if(skills.indexOf(skill) === -1){
      console.log(false);
   } else {
      console.log(true)
   }
}

temHabilidade(skills, 'Javascript'); // true ou false