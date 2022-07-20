const express = require('express');
const app = express();
const tasks = require('./routes/tasks.js');

//middleware

app.use(express.json());

//routes
app.get('/page', (req, res)=> {
    res.send('Task manager app')
})


app.use('/api/v1/tasks', tasks);

const port = 8000;

app.listen(port, console.log(`server is listening on port ${port}...`))