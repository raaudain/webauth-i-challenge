const
    express = require("express"),
    apiRouter = require("./api-router"),
    middleware = require("./middleware"),
    sessionConfig = require("../auth/middleware/sessionConfig"),
    server = express();

middleware(server);
sessionConfig(server);

server.use("/api", apiRouter);

module.exports = server;