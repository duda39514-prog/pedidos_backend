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
  const dados = {
  "produto": "Livro mágico 2",
  "quantidade": "67"
}

const chaves = Object.keys(dados)

const Pedidos = Pedidos.find((c) => c.id == id)

chaves.forEach((chave) => {
    Pedidos[chave] = dados[chave]
})

console.log(Pedidos)
    

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