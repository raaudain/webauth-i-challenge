const router = require("express").Router();
const Users = require("./users-model");
const restricted = require("../auth/middleware/restricted")

router.get("/users", restricted, (req, res) => {
    console.log(req.body)
    Users
        .getUsers()
        .then(users => res.status(200).json(users))
        .catch(err => res.status(500).send(err))
});

module.exports = router;