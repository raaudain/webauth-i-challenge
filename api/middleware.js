const
    express = require("express"),
    helmet = require("helmet"),
    cors = require("cors");


module.exports = server => {
    server
        .use(helmet())
        .use(express.json())
        .use(cors())
};