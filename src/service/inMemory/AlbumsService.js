/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable operator-linebreak */
/* eslint-disable no-unused-expressions */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
const { nanoid } = require("nanoid");
const InvariantError = require("../../exceptions/InvariantError");
const NotFoundError = require("../../exceptions/NotFoundError");

class AlbumsService {
  constructor() {
    this._albums = [];
  }

  addAlbums({ name, year }) {
    const id = `album-${nanoid(15)}`;
    const newAlbums = {
      id,
      name,
      year,
    };
    this._albums.push(newAlbums);
    const isSuccess =
      this._albums.filter((album) => album.id === id).length > 0;

    if (!isSuccess) {
      throw new InvariantError("Album Gagal Ditambahkan");
    }

    return id;
  }

  getAlbums() {
    return this._albums;
  }

  getAlbumsById(id) {
    const albums = this._albums.filter((album) => album.id === id)[0];
    if (!albums) {
      throw new NotFoundError("Album tidak ditemukan");
    }
    return albums;
  }

  editAlbumsById(id, { name, year }) {
    const index = this._albums.findIndex((album) => album.id === id);
    if (index === -1) {
      throw new NotFoundError("Gagal memperbaharui Id tidak ditemukan");
    }

    this._albums[index] = {
      ...this._albums[index],
      name,
      year,
    };
  }

  deleteAlbumsById(id) {
    const index = this._albums.findIndex((album) => album.id === id);
    if (index === -1) {
      throw new NotFoundError("Gagal menghapus Id tidak ditemukan");
    }
    this._albums.splice(index, 1);
  }
}
module.exports = AlbumsService;
