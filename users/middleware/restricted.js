const Users = require("../users-model");
const bcrypt = require("bcryptjs");

function restricted(req, res, next){
    const {username, password} = req.headers;

    if(username && password){
        Users
            .findBy({username})
            .first()
            .then(user => {
                console.log("Restricted working?")
                if(user && bcrypt.compareSync(password, user.password)){
                    next();
                }
                else{
                    res.status(401).json({message: "You shall not pass!"})
                }
            })
            .catch(err => {
                console.log(err)
                res.status(500).json("Cannot contact server.")
            })
    }
    else{
        res.status(400).json({message: "No credentials provided"})
    }
}

module.exports = restricted;