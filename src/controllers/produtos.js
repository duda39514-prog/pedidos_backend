const produtos =  require("../../dados/produtos.json")

const criar = (req, res) => {
    const dados = req.body
    dados.id = Number(produtos[produtos.length - 1].id + 1) //Autoincrement
    produtos.push(dados)
    res.status(201).json(dados)
}

const listar = (req, res) => { 
    res.json(produtos)
}

const alterar = (req, res) => { 
    const id = req.params.id
    const dados = req.body

    const produto = produtos.find((p) => p.id == id)

    const chaves = Object.keys(dados)
    chaves.forEach((chave) => {
        produto[chave] = dados[chave]
    })

    console.log(produtos) 


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