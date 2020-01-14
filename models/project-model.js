const db = require('../db-config.js')

function find(){
    return db('projects')
}

function findById(id){
    return db('projects').where({ id })
}

function addProject(payload){
    return db('projects').insert(payload)
    
}

function getProjectTasks(id){
    return db('task').where('project_id', id)
}

function update(id, payload){
    return db('projects').where({ id }).update(payload)
}

function deleteProject(id){
    return db('projects').where({ id }).del()
}

module.exports ={
    find,
    findById,
    addProject,
    update,
    deleteProject,
    getProjectTasks
}