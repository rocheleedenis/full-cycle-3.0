const express = require('express')
const app = express()
const port = 3000

app.get('/', (request, response) => {
    response.send('<h1>Full Cycle Rocks!</h1>')
})

// TODO - exibir a lista de nomes cadastrados no banco de dados

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})