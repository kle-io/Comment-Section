const Mongoose = require('mongoose');
const db = require('../database/index.js');

const songSchema = new Mongoose.Schema({
  artist: String,
  likes: Number,
  followers: Number,
  reposts: Number,
  plays: Number,
  Comments: [{
    user_photo: String,
    username: String,
    time: String,
    comment_body: String,
    Replies: [{
      username: String,
      user_photo: String,
      reply_body: String
    }]
  }]
});

// const commentSchema = new Mongoose.Schema({

// });

// const replySchema = new Mongoose.Schema({

// });

const Song = Mongoose.model('Song', songSchema);
// const Comment = mongoose.model('Comment', commentSchema);
// const Reply = mongoose.model('Reply', replySchema);

const getAll = (callback) => {
  Song.find((err, data) => {
    if (err) {
      console.log('error fetching data')
    } else {
      return data
    }
  })
  .then((data) => {
    callback(null, data)
  })
  .catch((err) => {
    callback(err)
  })
}

module.exports = {
  Song, getAll
}
