const express = require('express');
const cors = require('cors');
const logger = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');
const app = express();
app.use(cors());
app.use(express.json());
app.use(logger);
app.get('/', (req, res) => {
    res.json({mensagem: 'Bem-Vindo a API do Haruy Sushi!'});
});
const rotasCategorias = require('./routes/categorias');
const rotasProdutos = require('./routes/produtos');
app.use('/api/categorias', rotasCategorias);
app.use('/api/produtos', rotasProdutos);
app.use((req, res, next) => {
    res.status(404).json({mensagem: "Rota não encontrada na API do Haruy Sushi!"});
});
app.use(errorHandler);
const PORTA = 3000;
app.listen(PORTA, () => {
    console.log(`Servidor rodando em http://localhost:${PORTA}`);
});