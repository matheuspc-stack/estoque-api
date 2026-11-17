require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;


app.get('/', function(req,res){
    res.send('Olá, mundo!, meu nome é ' + process.env.nome);
});

app.post('/produtos', (req,res) => {
    res.send('O produto foi criado!')
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