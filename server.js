require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;


app.get('/', function(req,res){
    res.send('Olá, mundo!, meu nome é ' + process.env.nome);
});

app.listen(port, function(){
    console.log('Servidor rodando na porta' + port);
})
