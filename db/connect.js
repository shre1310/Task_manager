const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://Shreya:Shreya97@nodxexpressprojects.zadzqcq.mongodb.net/TASK_MANAGER?retryWrites=true&w=majority'

const connectDB =(url) => {
    return mongoose.connect(URI)
    .connect(connectionString,
        {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        })
}

module.exports =connectDB
//needs to be edited date:21
