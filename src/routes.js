const express = require("express")
const router = express.Router()

const Cliente = require("./controllers/cliente")
const Pedido = require("./controllers/pedido")
const Produtos = require("./controllers/produtos")
const Items = require("./controllers/items")

const rotaInicial = (req, res) => {
    res.json("Pedidos MVC respondendo")
}

router.get('/',rotaInicial)
router.get('/clientes',Cliente.listar)
router.get('/pedidos',Pedido.listar)
router.post('/clientes',Cliente.criar)
router.post('/pedidos',Pedido.criar)
router.delete('/clientes/:id',Cliente.excluir)
router.delete('/pedidos/:id',Pedido.excluir)
router.patch('/clientes',Cliente.alterar)
router.patch('/pedidos',Pedido.alterar)
router.get('/produtos', Produtos.listar)

router.post('/produtos', Produtos.criar)
router.patch('/produtos', Produtos.alterar)
router.delete('/produtos/:id', Produtos.excluir)

router.get('/items', Items.listar)
router.post('/items', Items.criar)
router.patch('/items', Items.alterar)
router.delete('/items/:id', Items.excluir)

module.exports = router