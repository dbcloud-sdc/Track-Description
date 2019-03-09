#!/bin/bash 
echo -e "\n# -------------------------------------"

mongo track_descriptions --eval "db.dropDatabase()"

mongoimport -d track_descriptions -c artists --type tsv --columnsHaveTypes --fields "id.int32(),artist_name.string(),avatar_picture.string(),no_of_followers.int32(),no_of_tracks.int32(),pro_status.boolean(),is_followed.boolean()" --file /Users/jackylei/Desktop/hackreactor/sdc/track-description/server/seeder/generator/mongo/data/artists.tsv

mongoimport -d track_descriptions -c songs --type tsv --columnsHaveTypes --fields "id.int32(),song_name.string(),artist_id.int32(),license.string(),description_text.string(),released_by.string(),release_date.date(2006 01 02),p_line.string(),tags.string()" --file /Users/jackylei/Desktop/hackreactor/sdc/track-description/server/seeder/generator/mongo/data/songs.tsv

mongo track_descriptions --eval "db.artists.createIndex({id: 1}, {unique: true})"

mongo track_descriptions --eval "db.songs.createIndex({id: 1})"
mongo track_descriptions --eval "db.songs.createIndex({artist_id: 1}, {unique: true})"