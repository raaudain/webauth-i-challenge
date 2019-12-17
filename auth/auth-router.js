const
    bcrypt = require("bcryptjs"),
    router = require("express").Router(),
    Users = require("../users/users-model.js");

router
    .post("/register", (req, res) => {
        const 
            user = req.body,
            hash = bcrypt.hashSync(user.password, 8);

        user.password = hash;

        Users
            .addUser(user)
            .then(info => res.status(201).json(info))
            .catch(err => res.status(500).json(err))
    })
    router.post("/login", (req, res) => {
        const {username, password} = req.body;
        //console.log(req.body)
        Users
            .findBy({username})
            .first()
            .then(user => {
                console.log(password, user.password)
                if(user && bcrypt.compareSync(password, user.password)){
                    res.status(200).json({message: `Logged in.`})
                }
                else{
                    (res.status(401).json({message: "You shall not pass!"}))
                }
            })
    })

module.exports = router;
