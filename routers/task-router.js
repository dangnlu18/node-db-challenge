const express = require('express');
const taskModel = require('../models/task-model')

const router = express.Router({
    mergeParams:true
})


router.get('/', async(req,res,next)=>{
    try{
        res.json( await taskModel.getTask())
    }
    catch(err){
      next(err)
    }
  })

// router.post('/', async(req,res,next)=>{
//     try{
//       const payload = {
//         notes: req.body.notes,
//         description: req.body.description,
//         project_id: req.body.project_id,
//         completed: req.body.completed
//     }
//     await taskModel.addTask(payload)
//     res.json({message: 'added successfully'})
//     }
//     catch(err){
//       next(err)
//     }
//   })



  router.post('/', async(req,res,next)=>{
    try{
      const task={
        notes: req.body.notes,
        description: req.body.description,
        project_id: req.body.project_id,
        completed: req.body.completed
      }
      const [id] = await taskModel.addTask(task)
      res.json(await taskModel.getTaskById(id))
    }
    catch(err){
      next(err)
    }
  })

  module.exports = router