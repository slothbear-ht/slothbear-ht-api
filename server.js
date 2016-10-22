if (!process.env.APP_SECRET) throw new Error('you need an APP_SECRET env variable');

const express = require('express');
const mongoose = require('mongoose');
const Authenticat = require('authenticat');

const app = express();
const PORT = process.env.PORT || 5555;

// require routers

const connection = mongoose.createConnection(process.env.MONGODB_URI || 'mongodb://localhost/slothbear_ht_DB');
const authenticat = new Authenticat(connection);

// router mounting
app.use('/api', authenticat.router);

app.use(express.static('./build'));

module.exports = exports = app.listen(PORT, () => console.log('server up on port: ' + PORT));
