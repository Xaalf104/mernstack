const express = require('express')
const router = express.Router()
const {getGoals, setGoals, updateGoal, deleteGoals} = require('../controllers/goalcontroller')

router.route('/').get(getGoals).post(setGoals)
router.route('/:id').delete(deleteGoals).put(updateGoal)


module.exports = router

