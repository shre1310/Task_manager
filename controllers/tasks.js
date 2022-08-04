// const { param } = require("../routes/tasks")
const task = require('../models/task')
const getAllTask = (req, res) => {
    res.send('all items to uploaded')
}
const createTask = async (req, res) => {
    try {
    const Task = await task.create(req.body)
    res.status(201).json({ task })
} catch (error) {
  res.status(500).json({msg:err})
}
}
const getTask = (req, res) => {
    res.json({id: req.params.id})
}
 const updateTask = (req, res) => {
        res.send('update a task')     
 }
 const deleteTask = (req, res) => {
    res.send('delete a task')
 }

//  const postHogApi = (req, res) => {

//     const data = fetch('https://posthog.skara.live/api/projects/2/dashboards/11')
//     const result = data.json()
//     res.send(result)

 
// }


module.exports ={
    getAllTask,
    createTask,
    getTask,
    updateTask,
    deleteTask
   
}