const express = require("express")
const app = express()
const porta = 3333

function mostraOla(request, response) {
    response.send("Olá, mundo!")
}

function mostraPorta(){
    console.log("Servidor criado e rodando na porta ", porta)
}

// Define a rota diretamente na aplicação
app.get('/ola', mostraOla)

// Inicia o servidor
app.listen(porta, mostraPorta)
