/* eslint-disable no-unused-vars */
const AlmbumsHandler = require("./handler");
const routes = require("./routes");

module.exports = {
  name: "albums",
  version: "1.0.0",
  register: async (server, { service, validator }) => {
    const almbumsHandler = new AlmbumsHandler(service, validator);
    server.route(routes(almbumsHandler));
  },
};
