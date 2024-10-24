const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response){
    response.json({
        nome: 'Everton Barbosa',
        imagem:'https://github.com/Everton-Antonio-Barbosa',
        minibio:'Segurança da Informação'
    })
}

function mostraPorta(){
    console.log("Servidor criado e rodando na porta ", porta)
}

// Define a rota no roteador
router.get('/mulher', mostraMulher)

// Usa o roteador na aplicação com um caminho base (opcional)
app.use('/', router)

app.listen(porta, mostraPorta)

