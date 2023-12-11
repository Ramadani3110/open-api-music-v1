/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
require("dotenv").config();
const Hapi = require("@hapi/hapi");

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT,
    host: process.env.HOST,
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });
  await server.start();
  console.log(`Server berjalan di ${server.info.uri}`);
};
init();
