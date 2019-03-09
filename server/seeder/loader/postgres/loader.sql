
\copy artists FROM '/Users/jackylei/Desktop/hackreactor/sdc/track-description/server/generator/postgres/data/artists.csv' DELIMITER '|' CSV;
\copy songs FROM '/Users/jackylei/Desktop/hackreactor/sdc/track-description/server/generator/postgres/data/songs.csv' DELIMITER '|' CSV;


ALTER table songs
ADD CONSTRAINT foreign_artist
FOREIGN KEY (artist_id) REFERENCES artists (id);

CREATE INDEX songs_index 
ON songs(artist_id); 

ALTER SEQUENCE "artists_id_seq"  RESTART WITH 10000000;
ALTER SEQUENCE "songs_id_seq"  RESTART WITH 10000000;

