const express = require('express');
const taskRouter = require('./task-router')


const projects = require('../models/project-model');

const router = express.Router({
  mergeParams: true
});

// router.use('/:id/tasks', taskRouter)


router.get('/', async(req,res,next)=>{
    try{
        const project = await projects.find()
        project.map(project => project.completed ===1 ? project.completed = true: project.completed = false)
        res.json(project)
    }
    catch(err){
        next(err)
    }
})

router.get('/:id', async(req, res,next)=>{
  try{
    const project = await projects.findById(req.params.id)
    project.map(project => project.completed ===1 ? project.completed = true: project.completed = false)
    res.json(project)
}
catch(err){
    next(err)
  }
})


router.get('/:id/tasks', async(req, res,next)=>{
  try{
    const project = await projects.getProjectTasks(req.params.id)
    project.map(project => project.completed ===1 ? project.completed = true: project.completed = false)
    res.json(project)
}
catch(err){
    next(err)
  }
})

router.post('/', async(req,res,next)=>{
  try{
      const payload = {
          name: req.body.name,
          description: req.body.description,
          completed: req.body.completed
      }
      const [id] = await projects.addProject(payload)
      res.json(await projects.findById(id))
 
    }
    catch(err){
      next(err)
    }
})

router.put('/:id', async(req,res,next)=>{
  try{
      const payload = {
          name: req.body.name,
          description: req.body.description,
          completed: req.body.completed
      }
      await projects.update(req.params.id, payload)
      res.json(await projects.findById(req.params.id))
 
    }
    catch(err){
      next(err)
    }
})

router.delete('/:id', async(req,res,next)=>{
  try{
    await projects.deleteProject(req.params.id)
    res.json({message: "succesfully deleted"})
    }
    catch(err){
      next(err)
    }
})



router.post('/:id/tasks', async(req,res,next)=>{
        try{
          const payload = req.body
          await projects.add(payload)
          res.json({message:"successfully added"})
        }
        catch(err){
          next(err)
        }
      })


module.exports = router