const express = require('express');
const resourceModel = require('../models/resource-model')

const router = express.Router({
    mergeParams:true
})

router.get('/', async(req,res,next)=>{
    try{
        res.json( await resourceModel.getResource())
    }
    catch(err){
      next(err)
    }
  })

router.post('/', async(req,res,next)=>{
    try{
    payload = {
        name: req.body.name,
        description: req.body.description
    }
    await resourceModel.addResource(payload)
    res.json({message: 'added resource successfully'})


    }
    catch(err){
      next(err)
    }
})


module.exports = router