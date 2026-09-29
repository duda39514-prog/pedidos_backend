const Pedidos =  require("../../dados/pedidos.json")

function subtotais(){
    Pedidos.forEach(p=>{
        p.subtotal = p.quantidade * p.preco
    })
}

const criar = (req, res) => {
    const dados = req.body
    dados.id = Number(Pedidos[Pedidos.length - 1].id + 1) //Autoincrement
    Pedidos.push(dados)
    res.status(201).json(dados)
}
const listar = (req, res) => { 
    subtotais()
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
   });

   res.send("Pedido atualizado com sucesso!");

}
const excluir = (req, res) => {
     const id = req.params.id
      Pedidos.forEach((pedido, indice) => {
        if(pedido.id == id){
            Pedidos.splice(indice, 1);
            res.json("Excluido com sucesso")
        }
    
 })
 }

module.exports ={
    criar, listar, alterar, excluir
}