const express = require('express')
const server = express()
server.use(express.json())

server.listen(5000, ()=> {
})

const TaskRoutes = require('./routes/TaskRoutes')
server.use('/task', TaskRoutes)