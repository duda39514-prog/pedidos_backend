const Pedidos =  require("../../dados/pedidos.json")

const criar = (req, res) => {
    const dados = req.body
    dados.id = Number(Pedidos[Pedidos.length - 1].id + 1) //Autoincrement
    Pedidos.push(dados)
    res.status(201).json(dados)
}
const listar = (req, res) => { 

    res.json(Pedidos)
}

const alterar = (req, res) => { 
    const id = req.query.id;
   const dados = req.body;

   Pedidos.forEach((Pedidos) =>{
    if(Pedidos.id == id){
        Pedidos.cliente_id = dados.cliente_id;
        Pedidos.produto = dados.produto;
        Pedidos.preco = dados.preco;
        Pedidos.quantidade = dados.quantidade;
    }
   })
   res.send("Pedido atualizado com sucesso!");

}

const excluir = (req, res) => {
const id = req.params.id
     let status = 0
      produtos.forEach((produto, indice) => {
        if(produto.id == id){
            produtos.splice(indice, 1);
            res.json("Excluido com sucesso")
        }
         if (status == 1) {
        res.send("pedido excluido com sucesso")
    } else { 
        res.status(404).send("Pedido não encontrado")
    }
    
 })
 }

module.exports ={
    criar, listar, alterar, excluir
}