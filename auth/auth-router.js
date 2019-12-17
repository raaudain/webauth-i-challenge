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
    // console.log(req)
    Users
        .findBy({username})
        .first()
        .then(user => {
            if(user && bcrypt.compareSync(password, user.password)){
                // saves session for the client and sends back a cookie
                req.session.user = user;

                res.status(200).json({message: `Logged in.`})
            }
            else{
                    (res.status(401).json({message: "You shall not pass!"}))
            }
        })
});


router.get("/logout", (req, res) => {
    if(req.session.user){
        req.session.destroy();
        res.status(200).json({message: "You're now logged out."});
    }
    else{
        res.status(200).json({message: "Please log in to log out."})
    }
})

module.exports = router;
