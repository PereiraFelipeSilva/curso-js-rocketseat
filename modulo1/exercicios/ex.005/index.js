/* Dado o seguinte vetor de objetos: */

var usuarios = [
   {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
   },
   {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
   },
   {
      nome: "Felipe",
      habilidades: ["Javascript", "HTML5", "CSS3"]
   }
];

/* Escreva uma função que produza o seguinte resultado: 

O Diego possui as habilidades: Javascript, ReactJS, Redux.
O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir.
O Felipe possui as habilidades: Javascript, HTML5, CSS3.
*/

function exibeHabilidades(){
   for(let i of usuarios){
      console.log(`O ${i.nome} possui as habilidades: ${i.habilidades.join(', ')}`);
   };
};

exibeHabilidades();
