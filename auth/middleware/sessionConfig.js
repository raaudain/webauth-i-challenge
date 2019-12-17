
const sessions = require("express-session");
const knexSessionStore = require("connect-session-knex")(sessions);

const knex = require("../../data/db-config");

const sessionConfig = {
    name: "uid",
    secret: "hush",
    saveUninitialized: true,
    resave: false,

    store: new knexSessionStore({
        knex,
        tablename: "sessions",
        clearInterval: 600000, // in milliseconds
        createtable: true,
        sidfieldname: "sid"
    }),

    cookie: {
        maxAge: 600000,
        secure: false,
        httpOnly: true
    }
}


module.exports = server => {
    server.use(sessions(sessionConfig));
};