const path = require('path');
const jsonServer = require('json-server');
const server = jsonServer.create();
const middleware = jsonServer.defaults();
const init = require('./services');
const walk = require('./utils/walk');
const cors = require('./utils/cors');

let ang;

const createJsonServer = (results) =>  {
  ang = init(results);

  server.use(cors);

  server.use(jsonServer.bodyParser);
  server.use(middleware);

  server.use(ang.routes);
  server.use(ang.middleware);
  server.use(ang.db);
}

module.exports = (app) => {
  app.use('/api', (req, res, next) => {
    if (!server) {
      next();
    }

    server(req, res, next);
  });

  walk(path.join(__dirname, './services'), function (err, results) {
    if (err) {
      return;
    }

    createJsonServer(results);
  });
}
