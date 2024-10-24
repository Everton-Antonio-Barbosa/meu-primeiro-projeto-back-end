const express = require('express')
const router = express.Router()
const app = express()

const PORTA = 3333

function mostraHora(request, response) {
    const data = new Date()
    const hora = data.toLocaleTimeString('pt-BR')
    response.send(hora)
}

function mostraPorta() {
    console.log(`Servidor criado e rodando na porta ${PORTA}`)  // Corrigido uso de template string
}

// Use app.get diretamente, ou defina router corretamente
app.get('/hora', mostraHora)
app.listen(PORTA, mostraPorta)
