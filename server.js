if (!process.env.APP_SECRET) throw new Error('you need an APP_SECRET env variable');

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5555;
// authenticat?

// require routers

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/slothbear_ht_DB');

// router mounting

app.use(express.static('./build'));

module.exports = exports = app.listen(PORT, () => console.log('server up on port: ' + PORT));
