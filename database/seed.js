const db = require('../database/index.js');
const { Song } = require('./data.js');
const faker = require('faker');

const songData = [];
for (var i = 0; i < 100; i++) {
  let songImg = faker.image.imageUrl()
  let song = {
    artist_photo: songImg.slice(0, 4) + 's' + songImg.slice(4, 22) + '120/120',
    artist: faker.name.firstName() + ' ' + faker.name.lastName(),
    likes: (Math.floor(Math.random() * 5000 + 1000)),
    followers: (Math.floor(Math.random() * 3000 + 600)),
    reposts: (Math.floor(Math.random() * 800 + 160)),
    plays: (Math.floor(Math.random() * 20000 + 5000)),
    release_date: faker.date.past(),
    Comments: []
  }
  let randomComs = Math.floor((Math.random()) * 30 + 1)
  for (var j = 0; j < randomComs; j++) {
    let commentImg = faker.image.imageUrl()
    let comment = {
      index: j,
      user_photo: commentImg.slice(0, 4) + 's' + songImg.slice(4, 22) + '40/40',
      username: faker.internet.userName(),
      time: faker.date.recent(),
      comment_body: faker.lorem.sentence(),
      timestamp: true,
      Replies: []
    }
    song.Comments.push(comment);
    let randomReps = Math.floor((Math.random()) * 2)
    for (var k = 0; k < randomReps; k++) {
      let replyImg = faker.image.imageUrl()
      let reply = {
        user_photo: replyImg.slice(0, 4) + 's' + replyImg.slice(4, 22) + '40/40',
        username: faker.internet.userName(),
        time: faker.date.recent(),
        reply_body: faker.lorem.sentence(),
        timestamp: true
      }
      song.Comments[j].Replies.push(reply);
    }
  }
  songData.push(song);
}

const insertComments = function() {
  Song.create(songData)
    .then(() => console.log('seeded data'))
    .then(() => db.disconnect())
};

insertComments();
