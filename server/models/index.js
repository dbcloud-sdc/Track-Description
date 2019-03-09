const db = require('../dbConnect.js');

const models = {
  fetchSongInfo: (song_id, callback) => {
    // let queryString = 
    //   `SELECT * FROM songs INNER JOIN artists
    //        ON songs.artist_id = artists.id
    //     WHERE songs.id = ${song_id} 
    //   `;
    db.query(`SELECT * FROM songs INNER JOIN artists ON songs.artist_id = artists.id WHERE songs.id = ${song_id}`, callback)
  } 
};

module.exports = models;