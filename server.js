require('dotenv').config();
const loggerMiddleware = require('./src/middleware/logger')
const valorProdutoMiddleware = require('./src/middleware/valor')
const dobrarValorMiddleware = require('./src/middleware/dobramento')
const express = require('express');
const app = express();
const port = 3000;

//middleware to formatar o body para JSON
app.use(express.json());
//Para formatar os dados do formulario (x-www-form-urlencoded)
app.use(express.urlencoded({extended: true}));
app.use(valorProdutoMiddleware);
app.use(dobrarValorMiddleware);
app.use(loggerMiddleware);
app.get('/', function(req,res){
    res.send('Olá, mundo!, meu nome é ' + process.env.nome);
});

app.get('/', function(req,res){
    res.send('Bem vindo!')
});


app.post('/produtos', (req,res) => {
    let produto = req.body;

    res.send(`O produto foi criado! Nome: ${produto.nome}, Valor: ${produto.preco}`)
})

app.put('/produtos/:id', (req,res) => {
    let id = req.params.id;
    res.send( `produto ${id} foi alterado!`)
})

app.delete('/produtos/:id', (req,res) => {
    let id = req.params.id;
    res.send( `produto ${id} foi deletado!`)
})


app.listen(port, function(){
    console.log('Servidor rodando na porta' + port);
})