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

  module.exports = router