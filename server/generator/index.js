const DataGenerator = require('./dataGenerator.js');
const path = require('path');

// Artist and song information
const artists = ['Ariana Grande', 'Taylor Swift', 'Selena Gomez', 'Vanessa Hudgens'];
const avatars = [
  'http://res.cloudinary.com/da5zmmaac/image/upload/c_scale,f_webp,fl_awebp,w_206/v1550962758/ShavedIceIcon',
  'https://res.cloudinary.com/da5zmmaac/image/upload/c_scale,f_webp,h_200,w_200/v1550962757/CaramelSleeping',
  'http://res.cloudinary.com/da5zmmaac/image/upload/c_scale,f_webp,w_200/v1550962758/paperflowers'
];
const songs = ["Let Me Love You", "Don't", "Work", "Just Friends", "Can't Stop Missing You"];
const songLicense = ['All Rights Reserved', 'Creative Commons License', ''];
const descriptions = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit', 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', 'Excepteur sint occaecat cupidatat non proident'];
const companies = ['Bogan LLC', 'Prosacco and Sons', 'Bergnaum LLC', 'Willms Inc'];
const dates = ['1994-09-17', '1994-10-16',  '1977-07-07'];
const p_lines = ['℗ Glover and Sons', '℗ Schmeler Inc', '℗ Zemlak - Rogahn LLC'];
const tagsList = ['Lorem ipsum dolor', 'Diam maecenas sed enim', 'Ut tristique et egestas quis'];

// Random generators
const generateArtistInfo = function() {
  let artist_name = artists[Math.floor(Math.random() * artists.length)]; 
  let avatar_picture = avatars[Math.floor(Math.random() * avatars.length)];
  let no_of_followers = Math.floor(Math.random() * 1000000);
  let no_of_tracks = Math.floor(Math.random() * 1000);
  let pro_status = Math.floor(Math.random() * 2); 
  let is_followed = Math.floor(Math.random() * 2); 

  return `${artist_name}|${avatar_picture}|${no_of_followers}|${no_of_tracks}|${pro_status}|${is_followed}`;
}

const generateSongInfo = function() {
  let song_name = songs[Math.floor(Math.random() * songs.length)];
  let artist_name = artists[Math.floor(Math.random() * artists.length)];
  let license = songLicense[Math.floor(Math.random() * songLicense.length)];
  let description_text = descriptions[Math.floor(Math.random() * descriptions.length)];
  let released_by = companies[Math.floor(Math.random() * companies.length)];                                                                                                                                               
  let release_date = dates[Math.floor(Math.random() * dates.length)];
  let p_line = p_lines[Math.floor(Math.random() * p_lines.length)];
  let tags = tagsList[Math.floor(Math.random() * tagsList.length)];

  return `${song_name}|${artist_name}|${license}|${description_text}|${released_by}|${release_date}|${p_line}|${tags}`;
}

const artistInfoGenerator = new DataGenerator(generateArtistInfo, path.join(__dirname, '/artistInfo.csv'), 10*1000*1000, 1000);
const songInfoGenerator = new DataGenerator(generateSongInfo, path.join(__dirname, '/songInfo.csv'), 10*1000*1000, 1000);

artistInfoGenerator.generate();
songInfoGenerator.generate();

