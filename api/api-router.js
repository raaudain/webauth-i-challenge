const
    router = require("express").Router(),
    authRouter = require("../auth/auth-router.js"),
    useRouter = require("../users/users-router");

router
    .use("/", authRouter)
    .use("/", useRouter)
    .get("/", (req, res) => res.json({api: "Look's like it works!!!"}))

module.exports = router;