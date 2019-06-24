var endereco = {
   rua: "Rua dos pinheiros",
   numero: 1293,
   bairro: "Centro",
   cidade: "São Paulo",
   uf: "SP"
  };

function returnUserData(){
   console.log(`O usuário mora em ${endereco.cidade} / ${endereco.uf}, no bairro ${endereco.bairro}, na rua ${endereco.rua} com número ${endereco.numero}`);
}

returnUserData()