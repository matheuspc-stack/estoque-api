const logger = function(req, res, next) {
    console.log(`Requisição foi feita: body: ${req.body.nome}, params: ${req.params.id}`);
    next()
}

module.exports = logger;