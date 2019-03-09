require('newrelic');
const express = require('express');
const path = require('path');
const cors = require('cors');
const { read } = require('./controllers/index');

const app = express();

const port = 8081;

app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/api/song/:song_id', read);

app.use('/:sid', express.static(path.join(__dirname, '../public')));

app.listen(port, () => console.log(`LISTENING ON PORT ${port}`));
