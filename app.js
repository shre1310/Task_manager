const express = require('express');
const app = express();
const tasks = require('./routes/tasks.js');
const connectDB = require('./db/connect')
require('dotenv').config()         //just to invoke the config

//middleware

app.use(express.json());

//routes
app.get('/page', (req, res)=> {
    res.send('Task manager app')
})


app.use('/api/v1/tasks', tasks);

const port = 8000;

const start = async()=>{
    try{
        connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening on port ${port}...`))
    
    } catch(error){
        console.log(error)
    }
}

start()
