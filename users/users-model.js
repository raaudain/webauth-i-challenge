const db = require("../data/db-config");



function getUsers(){
    return db("users")
        .select("id", "username")
}

function addUser(user){
    return db("users")
        .insert(user, "id")
        .then(ids => {
            const [id] = ids
            .where({id})
        })
}

function findBy(user){
    return db("users")
        .select("id", "username", "password")
        .where(user);
}



module.exports = {getUsers, addUser, findBy}