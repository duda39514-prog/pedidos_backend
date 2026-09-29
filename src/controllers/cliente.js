const clientes =  require("../../dados/clientes.json")

const criar = (req, res) => { 
    const dados = req.body
    dados.id = Number(clientes[clientes.length - 1].id + 1) //Autoincrement
    clientes.push(dados)
    res.status(201).json(dados)
}
const listar = (req, res) => { 
     res.json(clientes)
}
const alterar = (req, res) => { 
    const id = req.query.id;
   const dados = req.body;

   clientes.forEach((clientes) =>{
    if(clientes.id == id){
        clientes.nome = dados.nome;
        clientes.cpf = dados.cpf;
    }
   });
   res.send("Cliente atualizado com sucesso!");
}

const excluir = (req, res) => {
  const id = req.params.id
      clientes.forEach((cliente, indice) => {
        if(cliente.id == id){
            clientes.splice(indice, 1);
            res.json("Excluido com sucesso")
        }
    
 })}

module.exports ={
    criar, listar, alterar, excluir
}

