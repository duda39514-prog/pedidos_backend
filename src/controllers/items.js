const items = require("../../dados/items.json")

function subtotais() {
    items.forEach(p => {
        p.subtotal = p.quantidade * p.preco
    })
}

const criar = (req, res) => {
    const dados = req.body
    dados.id = Number(items[items.length - 1].id + 1)
    items.push(dados)
    res.status(201).json(dados)
}

const listar = (req, res) => {
    subtotais()
    res.json(items)
}

const alterar = (req, res) => {
    const id = req.params.id
    const dados = req.body

    const items = items.find((p) => p.id == id)

    const chaves = Object.keys(dados)
    chaves.forEach((chave) => {
        items[chave] = dados[chave]
    })

    console.log(items)


}

const excluir = (req, res) => {
    const id = req.params.id
    let status = 0
    items.forEach((item, indice) => {
        if (item.id == id) {
            items.splice(indice, 1);
            status = 1
        }
    })
    
   if (status == 1) {
        res.send("pedido excluido com sucesso")
    } else { 
        res.status(404).send("Pedido não encontrado")
    }
}

module.exports = {
    criar, listar, alterar, excluir
}