const db = require('../db-config.js')

function getTask(){
    return db('project_tasks as pt')
        .join('projects as p', 'p.id', 'pt.project_id')
        .select('pt.project_id', 'p.name', 'p.description')
        .join('task as t', 't.id', 'pt.task_id')
        .select('t.description')

}

function addTask(payload){
    return db('task').insert(payload)
}

function getTaskById(id){
    return db('task').where({id}).first()
}

module.exports ={
    getTask,
    addTask,
    getTaskById,

}



// const db = require('../db-config.js')

// function find(){
//     return db('projects')
// }

// function findById(id){
//     return db('projects').where({ id }).first()
// }

// function addProject(payload){
//     return db('projects').insert(payload)
    
// }

// function update(id, payload){
//     return db('projects').where({ id }).update(payload)
// }

// function deleteProject(id){
//     return db('projects').where({ id }).del()
// }

// module.exports ={
//     find,
//     findById,
//     addProject,
//     update,
//     deleteProject
// }