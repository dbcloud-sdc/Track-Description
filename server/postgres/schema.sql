DROP DATABASE IF EXISTS track_descriptions;

CREATE DATABASE track_descriptions;

\c track_descriptions;

CREATE TABLE artists (
  id SERIAL PRIMARY KEY,
  artist_name VARCHAR,
  avatar_picture VARCHAR,
  no_of_followers INTEGER,
  no_of_tracks INTEGER,
  pro_status BOOLEAN,
  is_followed BOOLEAN
);

CREATE TABLE songs (
  id SERIAL PRIMARY KEY,
  song_name VARCHAR,
  artist_id INTEGER,
  license VARCHAR,
  description_text VARCHAR,
  released_by VARCHAR, 
  release_date DATE,
  p_line VARCHAR,
  tags VARCHAR
);

