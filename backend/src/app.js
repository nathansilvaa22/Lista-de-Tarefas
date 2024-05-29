const express = require('express') 
const router = require('./router')
const cors = require('cors')



const app = express()

//nescessario para a API conseguir trabalhar com json
app.use(express.json())
app.use(cors())
app.use(router)



module.exports = app