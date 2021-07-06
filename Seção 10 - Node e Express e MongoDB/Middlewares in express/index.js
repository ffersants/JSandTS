const express = require('express')

const app = express()

const controller = require('./MainController')

app.get('/', middleware, controller.responseRootRout)

function middleware(req, res, next) {
    console.log(req)
    console.log('NO MIDDLEWARE')
    next()
}

const port = 40

app.listen(port, () => { 
    console.log(`Servidor rodando na porta ${port}.`)
})