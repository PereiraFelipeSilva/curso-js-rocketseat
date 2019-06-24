/* Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é: */

var anosEstudo = 5;

function experiencia(anos) {
   anos = anosEstudo;

   if(anos <= 1){
      console.log('inciante')
   } else if(anos <= 3){
      console.log('intermediário')
   } else if(anos <= 6){
      console.log('avançado')
   } else {
      console.log('JEDI MASTER')
   }
}

experiencia(anosEstudo);

  // De 0-1 ano: Iniciante
  // De 1-3 anos: Intermediário
  // De 3-6 anos: Avançado
  // De 7 acima: Jedi Master
  