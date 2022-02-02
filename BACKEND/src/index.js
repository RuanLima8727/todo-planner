const express = require('express')
const cors = require('cors');
const TaskRoutes = require('./routes/TaskRoutes')

const server = express()
server.use(cors())
server.use(express.json())

server.listen(5000, ()=> {
    console.log('API ONLINE')
})

server.use('/task', TaskRoutes)