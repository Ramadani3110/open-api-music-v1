/* eslint-disable object-curly-newline */
const mapDBToModelSongs = ({ id, title, year, genre, duration, albumId }) => ({
  id,
  title,
  year,
  genre,
  duration,
  albumId,
});

module.exports = { mapDBToModelSongs };
