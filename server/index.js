const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const artistInfoRoute = require('./routers/artistInfoRoute.js');
const songInfoRoute = require('./routers/songInfoRoute.js');

const db = require('./db');

const app = express();

const port = 8081;

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/api/artistinfo', artistInfoRoute);
app.use('/api/songinfo', songInfoRoute);
app.use('*', express.static(path.join(__dirname, '../client/dist')));

app.listen(port, () => console.log(`LISTENING ON PORT ${port}`));
