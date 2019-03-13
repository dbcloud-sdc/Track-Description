const models = require ('../models/index.js');

const controllers = {
  read: (req, res) => {
    models.fetchSongInfo(req.params.songID, (err, data) => {
      if (err) {
        res.status(201).send(err);
      } else {
        const results = data.rows[0];
        let trackInfo = {
          song: {
            id: Number(req.params.songID),
            song_name: results.song_name,
            artist_id: results.artist_id,
            license: results.license,
            description_text: results.description_text,
            released_by: results.released_by,
            release_date: results.release_date,
            p_line: results.p_line,
            tags: results.tags
          },
          artist: {
            id: results.id,
            artist_name: results.artist_name,
            avatar_picture: results.avatar_picture,
            no_of_followers: results.no_of_followers,
            no_of_tracks: results.no_of_tracks,
            pro_status: results.pro_status,
            is_followed: results.is_followed
          }
        };
        res.status(200).send(trackInfo);
      }
    })
  }
}

module.exports = controllers; 