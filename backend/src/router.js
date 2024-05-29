const express = require('express')

const router = express.Router()

const taskControler = require('./controllers/tasksController')
const taskMiddlewars = require('./middlewars/taskMiddlewars')



 router.get('/tasks',taskControler.getAll)
 router.post('/tasks',taskMiddlewars.validateTitle,taskControler.createTask)
 router.delete('/tasks/:id',taskControler.deleteTask )
 // taskis middlewars serve para validação de titulo e status
 router.put('/tasks/:id',
 taskMiddlewars.validateTitle,
 taskMiddlewars.valideStatus,
 taskControler.updateTask )


module.exports = router