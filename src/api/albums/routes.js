/* eslint-disable no-unused-vars */
const routes = (handler) => [
  {
    method: "POST",
    path: "/albums",
    handler: handler.postAlbumsHandler,
  },
  {
    method: "GET",
    path: "/albums/{albumsId}",
    handler: handler.getAlbumsByIdHandler,
  },
  {
    method: "PUT",
    path: "/albums/{albumsId}",
    handler: handler.putAlbumsByIdHandler,
  },
  {
    method: "DELETE",
    path: "/albums/{albumsId}",
    handler: handler.deleteAlbumsByIdHandler,
  },
];

module.exports = routes;
