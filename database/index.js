const Mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/kleioComments';

const db = Mongoose.connect(mongoUri);

module.exports = db;




