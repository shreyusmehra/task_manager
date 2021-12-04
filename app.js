const express = require('express') // express package for server
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect') // connection to the database
require('dotenv').config() // enviroment variable package
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

// middleware
app.use(express.static('./public')) //  to use static front end files
app.use(express.json())

// routes
app.use('/api/v1/tasks', tasks)
app.use(notFound)
app.use(errorHandlerMiddleware) // error handling in internal error

const port = process.env.PORT // port number on which website will run

const start = async() => {
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening on ${port}...`))
    } 
    catch (error) {
        console.log(error)
    }
}

start() // call to start function