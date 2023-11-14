const jsonServer = require("json-server"); // front-end: import === backend: require
const server = jsonServer.create();
const router = jsonServer.router("db.json"); // source
const middlewares = jsonServer.defaults();
const port = process.env.port || 5000;

server.use(middlewares);
server.use(router);
server.listen(port);
