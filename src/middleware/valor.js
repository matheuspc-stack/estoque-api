const valorProduto = function (req,res,next) {
    let preco = req.body.preco
    if (preco < 100) {
        res.send('O valor do produto é menor que 100, não é permitido!')
    } else {
        next()
    }
}

module.exports = valorProduto;