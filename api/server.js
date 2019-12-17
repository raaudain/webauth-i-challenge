const
    express = require("express"),
    apiRouter = require("./api-router"),
    middleware = require("./middleware"),
    server = express();

middleware(server);

server.use("/api", apiRouter);

module.exports = server;