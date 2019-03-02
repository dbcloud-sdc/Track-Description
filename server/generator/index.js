const DataGenerator = require('./dataGenerator.js');
const faker = require('faker');
const path = require('path');

const avatars = [
  'http://res.cloudinary.com/da5zmmaac/image/upload/c_scale,f_webp,fl_awebp,w_206/v1550962758/ShavedIceIcon',
  'https://res.cloudinary.com/da5zmmaac/image/upload/c_scale,f_webp,h_200,w_200/v1550962757/CaramelSleeping',
  'http://res.cloudinary.com/da5zmmaac/image/upload/c_scale,f_webp,w_200/v1550962758/paperflowers'
];
const songLicense = ['All Rights Reserved', 'Creative Commons License', ''];

const generateArtistInfo = function() {
  let artist_name = faker.name.findName(); 
  let avatar_picture = avatars[Math.floor(Math.random() * avatars.length)];
  let no_of_followers = faker.random.number(1000000);
  let no_of_tracks = faker.random.number(1000);
  let pro_status = faker.random.number(1); 
  let is_followed = faker.random.number(1);

  return `${artist_name}|${avatar_picture}|${no_of_followers}|${no_of_tracks}|${pro_status}|${is_followed}`;
}

const generateSongInfo = function() {
  let song_name = faker.lorem.words(Math.floor(Math.random() * 5));
  let artist_name = faker.name.findName(); 
  let license = songLicense[Math.floor(Math.random() * songLicense.length)];
  let description_text = faker.lorem.paragraph(); 
  let released_by = faker.company.companyName();                                                                                                                                                                   
  let release_date = faker.date.past();
  let p_line = `℗ ${faker.company.companyName()}${faker.company.companySuffix()}`;
  let tags = faker.lorem.words(4);

  return `${song_name}|${artist_name}|${license}|${description_text}|${released_by}|${release_date}|${p_line}|${tags}`;
}

const artistInfoGenerator = new DataGenerator(generateArtistInfo, path.join(__dirname, '/artistInfo.csv'), 10*1000*1000, 10*1000);
const songInfoGenerator = new DataGenerator(generateSongInfo, path.join(__dirname, '/songInfo.csv'), 10*1000*1000, 10*1000);

artistInfoGenerator.generate();
songInfoGenerator.generate();

