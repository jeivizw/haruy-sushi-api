const express = require('express');
const router = express.Router();

let db = require('../data/database');

router.get('/', (req, res) => {
    throw new Error("O servidor errou");
});

router.get('/', (req, res) => {
    const categoriaId = req.query.categoriaId;
    if (categoriaId) {
        const produtosFiltrados = db.produtos.filter(p => p.categoriaId === categoriaId);
        return res.json(produtosFiltrados);
    }
    res.json(db.produtos);
});

router.post('/', (req, res) => {
    const novoProduto = {
        id: db  .produtos.length > 0 ? Math.max(...db.produtos.map(p => p.id)) + 1 : 1,
        categoriaId: req.body.categoriaId,
        nome: req.body.nome,
        preco: req.body.preco,
        imagem: req.body.imagem,
    };
    db.produtos.push(novoProduto);
    res.status(201).json(novoProduto);
});

router.put('/:id', (req, res) => {
    const produtoId = parseInt(req.params.id);
    const index = db.produtos.findIndex(p => p.id === produtoId);
    if (index !== -1) {
        db.produtos[index] = {
            id: produtoId[index], ...req.body
        };
        res.json(db.produtos[index]);
        } else {
            res.status(404).json({ mensagem: "Produto não encontrado" });
        }
});

router.delete('/:id', (req, res) => {
    const produtoId = parseInt(req.params.id);
    db.produtos = db.produtos.filter(p => p.id !== produtoId);
    res.json({ mensagem: "Produto removido com sucesso" });
});

module.exports = router;
