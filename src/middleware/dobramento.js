const dobrarValor = function (req, res ,next) {
    let preco = req.body.preco
    let precoDobrado = preco * 2
    req.body.preco = precoDobrado
    next()
}

module.exports = dobrarValor;
