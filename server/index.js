const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const { read } = require('./controllers/index');

const app = express();

const port = 8081;

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/api/song/:song_id', read);
// app.use('/:song_id', (req, res) => {
//   res.sendFile(path.join(__dirname, '../public/index.html'));
// });

app.use('/:sid', express.static(path.join(__dirname, '../public')));

app.listen(port, () => console.log(`LISTENING ON PORT ${port}`));
