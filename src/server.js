/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
require("dotenv").config();
const Hapi = require("@hapi/hapi");
const albums = require("./api/albums");
const AlbumsService = require("./service/inMemory/AlbumsService");
const AlbumsValidator = require("./validator/music/albums");

const init = async () => {
  const albumsService = new AlbumsService();
  const server = Hapi.server({
    port: process.env.PORT,
    host: process.env.HOST,
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });

  await server.register({
    plugin: albums,
    options: {
      service: albumsService,
      validator: AlbumsValidator,
    },
  });
  await server.start();
  console.log(`Server berjalan di ${server.info.uri}`);
};
init();
