/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
const { nanoid } = require("nanoid");
const { Pool } = require("pg");
const InvariantError = require("../../exceptions/InvariantError");
const NotFoundError = require("../../exceptions/NotFoundError");
const { mapDBToModelSongs } = require("../../utils/songs");

class SongsService {
  constructor() {
    this._pool = new Pool();
  }
}
