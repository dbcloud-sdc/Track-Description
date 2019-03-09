const DataGenerator = require('./dataGenerator.js');
const faker = require('faker');
const moment = require('moment');
const path = require('path');

const records = 10 * 1000 * 1000;

const generateArtist = function() {
  let artist_name = `${faker.name.findName()}`; 
  let avatar_picture = `${faker.image.image()}`;
  let no_of_followers = Math.floor(Math.random() * 1000000);
  let no_of_tracks = Math.floor(Math.random() * 1000);
  let pro_status = Math.floor(Math.random() * 2); 
  let is_followed = Math.floor(Math.random() * 2); 

  return `${artist_name}|${avatar_picture}|${no_of_followers}|${no_of_tracks}|${pro_status}|${is_followed}`;
}

const generateSong = function() {
  let song_name = `${faker.lorem.words(Math.floor(Math.random() * 2) + 2)}`;
  let artist_id = Math.floor(Math.random() * records);
  let license = `${faker.lorem.words(Math.floor(Math.random() * 2) + 2)}`;
  let description_text = `${faker.lorem.sentences(Math.floor(Math.random() * 2) + 1)}`;
  let released_by = `${faker.company.companyName()} ${faker.company.companySuffix()}`;                                                                                                                                              
  let release_date = `${moment().subtract(Math.floor(Math.random() * 10000), 'days').format('YYYY MM DD')}`;
  let p_line = `℗ ${faker.company.companyName()} ${faker.company.companySuffix()}`;
  let tags = `${faker.lorem.words(Math.floor(Math.random() * 4) + 2)}`;

  return `${song_name}|${artist_id}|${license}|${description_text}|${released_by}|${release_date}|${p_line}|${tags}`;
}

const artistGenerator = new DataGenerator(generateArtist, path.join(__dirname, '/data/artists.csv'), records, 1000);
const songGenerator = new DataGenerator(generateSong, path.join(__dirname, '/data/songs.csv'), records, 1000);

artistGenerator.generate();
songGenerator.generate();

