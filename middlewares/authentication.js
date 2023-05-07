const fs = require('fs')

function authentication(req, res, next) {
    fs.appendFileSync('log.txt', " O usuário entrou na URL: " + req.url)
    next()
}

module.exports = authentication