const express = require('express');
const tasks = require('./routes/tasks');
const axios  = require('axios')
var app = express();

require('dotenv').config()

app.use(express.json());

//routes
app.get('/', (req, res)=> {
    res.send('check api link')
})


app.get('/vendors', async (req, res)=> {
    const apiKey = process.env.POSTHOG_API_KEY
    try {
        const value = await axios.get(`https://posthog.skara.live/api/projects/2/dashboards/`, {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
             
        })
    console.log("result", value.data);
    res.json(value.data.results)
   
    } catch(err) {
        console.error(err.message)
        throw new Error(err)
    }
    
})

app.get('/vendors/:id',  async(req, res) => {
    const apiKey1 = process.env.POSTHOG_API_KEY
        try {
            const value = await axios.get(`https://posthog.skara.live/api/projects/2/dashboards/`, {
            headers: {
                'Authorization': `Bearer ${apiKey1}`
            }
        })
            apiData = value.data.results.filter((e)=>{
                return e.id == req.params.id
        })  
        console.log("apiData", value);
        res.status(201).json(apiData)
    } catch (error) {
        res.status(400).send(error);
    }
})


const port = 8080;
app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`);
})
