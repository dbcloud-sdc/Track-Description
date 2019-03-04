DROP DATABASE IF EXISTS track_descriptions;

CREATE DATABASE track_descriptions;

\c track_descriptions;

CREATE TABLE artistInfo (
  id serial NOT NULL,
  artist_name varchar,
  avatar_picture varchar,
  no_of_followers integer,
  no_of_tracks integer,
  pro_status boolean,
  is_followed boolean
);

CREATE TABLE songInfo (
  id serial NOT NULL,
  song_name varchar,
  artist_name varchar,
  license varchar,
  description_text varchar,
  released_by varchar, 
  release_date date,
  p_line varchar,
  tags varchar
);

\copy artistInfo from '/Users/jackylei/Desktop/hackreactor/sdc/track-description/server/generator/artistInfo.csv' DELIMITER '|' CSV HEADER;
\copy songInfo from '/Users/jackylei/Desktop/hackreactor/sdc/track-description/server/generator/songInfo.csv' DELIMITER '|' CSV HEADER;