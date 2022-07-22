// const { param } = require("../routes/tasks")
const task = require('../models/task')
const getAllTask = (req, res) => {
    res.send('all items to uploaded')
}
const createTask = async (req, res) => {
    const Task = await task.create(req.body)
    res.json(201).json({ task })
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