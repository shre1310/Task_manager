// const { param } = require("../routes/tasks")

const getAllTask = (req, res) => {
    res.send('all items to uploaded')
}
const createTask = (req, res) => {
    res.json(req.body)
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


module.exports ={
    getAllTask,
    createTask,
    getTask,
    updateTask,
    deleteTask
}