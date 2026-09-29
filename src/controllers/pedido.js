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
const alterar = (req, res) => { }
const excluir = (req, res) => { }

module.exports ={
    criar, listar, alterar, excluir
}