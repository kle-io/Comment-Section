const Mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/kleioComments';

const db = Mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = db;




