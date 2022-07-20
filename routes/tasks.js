const express = require('express')
const router = express.Router()

const {getAllTask} = require('../controllers/tasks')

router.route('/').get(getAllTask)


module.exports = router