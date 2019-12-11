const Mongoose = require('mongoose');
const db = require('../database/index.js');
const moment = require('moment');

const songSchema = new Mongoose.Schema({
  artist_photo: String,
  artist: String,
  likes: Number,
  followers: Number,
  reposts: Number,
  plays: Number,
  release_date: String,
  Comments: [{
    index: Number,
    user_photo: String,
    username: String,
    time: String,
    comment_body: String,
    timestamp: Boolean,
    Replies: [{
      user_photo: String,
      username: String,
      time: String,
      reply_body: String,
      timestamp: Boolean
    }]
  }]
})
// const commentSchema = new Mongoose.Schema({
// });
// const replySchema = new Mongoose.Schema({
// });
// const Comment = mongoose.model('Comment', commentSchema)
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

const postComment = (comment, callback) => {
  let newCommentId;
  Song.findById(comment.currentSong, (err, data) => {
    if (err) {
      console.log('error finding song by ID')
    } else {
      newCommentId = data.Comments.length
      console.log('setting new comment ID...')
    }
  })
  .then(() => {
    console.log(newCommentId)
    let newComment = {
      index: newCommentId,
      user_photo: "https://lorempixel.com/40/40",
      username: 'you',
      time: moment(Date.now()),
      comment_body: comment.comment,
      timestamp: true,
      Replies: []
    }
    return newComment
  })
  .then((newComment) => {
    Song.updateOne({ "_id": comment.currentSong }, { $push: { Comments: newComment } },
      (err, result) => {
        if (err) {
          console.log('error posting data')
        } else {
          console.log(result)
        }
      })
  })
  .then(() => {
    callback(null, true)
  })
}

const postReply = (reply, callback) => {
  let commentStr = `Comments.${reply.comment}.Replies`
  let newReply = {
    user_photo: "https://lorempixel.com/40/40",
    username: 'you',
    time: moment(Date.now()),
    reply_body: reply.reply,
    timestamp: true,
  }
  Song.updateOne({ "_id": reply.currentSong }, { $push: { [commentStr] : newReply } },
    (err, result) => {
      if (err) {
        console.log('error posting data')
      } else {
        console.log(result)
      }
    })
  .then(() => {
    callback(null, true)
  })
}

const Song = Mongoose.model('Song', songSchema);

module.exports = {
  Song, getAll, postComment, postReply
}
