const express = require('express');
const taskModel = require('../models/task-model')

const router = express.Router({
    mergeParams:true
})


router.get('/', async(req,res,next)=>{
    try{
      const { id } = req.params
      const task = await taskModel.getTask(id) 
      task.map(task => task.completed===1 ? task.completed = true: task.completed = false)
      res.json(task)
    }
    catch(err){
      next(err)
    }
  })

  module.exports = router