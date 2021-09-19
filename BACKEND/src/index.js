const express = require('express')
const TaskRoutes = require('./routes/TaskRoutes')

const server = express()
server.use(express.json())

server.listen(5000, ()=> {
})

server.use('/task', TaskRoutes)