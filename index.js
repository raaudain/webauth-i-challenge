const
    server = require("./api/server"),
    port = process.env.PORT || 6000;

server.listen(port, () => console.log(`Server is running on port ${port}`))