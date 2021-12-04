const mongoose = require('mongoose')

//const connectionString = paste connection string url from cloud to env file

const connectDB = (url) => {
    return mongoose
    .connect(url,{
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
}

module.exports = connectDB