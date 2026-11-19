import dotenv from 'dotenv';
dotenv.config();


import {loggerMiddleware} from './src/middleware/index.js';
import express, { json, urlencoded } from 'express';

const app = express();
const port = 3000;

//middleware to formatar o body para JSON
app.use(json());
//Para formatar os dados do formulario (x-www-form-urlencoded)
app.use(urlencoded({extended: true}));
app.use(loggerMiddleware);

app.get('/', function(req,res){
    res.send('Olá, mundo!, meu nome é ' + process.env.nome);
});

app.get('/', function(req,res){
    res.status(200).json({

    "status" : "ok",
    "codigo" : 200,
    "mensagem" : `Bem vindo!`
    })
});


app.post('/produtos', (req,res) => {
    let produto = req.body;

   // res.send(`O produto foi criado! Nome: ${produto.nome}, Valor: ${produto.preco}`)
   res.status(201).json({
    "status" : "criado",
    "codigo" : 201,
    "mensagem" : `O produto foi criado! Nome: ${produto.nome}, Valor: ${produto.preco}`
  })
})
app.put('/produtos/:id', (req,res) => {
    let id = req.params.id;
    let produto = req.body;

    res.status(200).json({
    "status" : "alterado",
    "codigo" : 200,
    "mensagem" : `O produto ${id} foi alterado! Nome: ${produto.nome}, Valor: ${produto.preco}`
    })
})

app.delete('/produtos/:id', (req,res) => {
    let id = req.params.id;
    
    res.status(200).json({
    "status" : "deletado",
    "codigo" : 200,
    "mensagem" : `O produto ${id} foi deletado!`
    })
})


app.listen(port, function(){
    console.log('Servidor rodando na porta' + port);
})