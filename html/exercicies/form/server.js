const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({ extended: true}))

app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    resp.send('<h1>Parabéns. Usuário incluido com sucesso!</h1>')
})

app.post('/usuarios/:id', (req, resp) => {
    console.log(req.body)
    resp.send('<h1>Usuário alterados com sucesso!</h1>')
})

app.listen(3003)