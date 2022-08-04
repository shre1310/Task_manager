const express = require('express')
const router = express.Router()

const {getAllTask, 
        getTask, 
        createTask, 
        updateTask,
         deleteTask,
         postHogApi
        } = require('../controllers/tasks')

router.route('/').get(getAllTask).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)


module.exports = router