const db = require('../db-config.js')

function getResource(){
    return db('resources')
}

function addResource(payload){
    return db('resources').insert(payload)
}


module.exports ={
    getResource,
    addResource,

}