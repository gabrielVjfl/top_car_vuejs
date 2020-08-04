const port = 7120

const express = require('express')

const app = express()

const bodyParser = require('body-parser')

const cors = require('cors')

const router = require('./routes/routes')

require('./database')

app.use(cors())

app.use(bodyParser.urlencoded({extended: true}))

app.use(bodyParser.json())

app.use('/api', router)

app.listen(port, () => {
    console.log('Rodando na porta', port)
})