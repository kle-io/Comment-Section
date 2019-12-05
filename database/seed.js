const db = require('../database/index.js');
const { Song } = require('./dummydata.js');
const faker = require('faker');

const songData = [];
for (var i = 0; i < 100; i++) {
  let song = {
    artist: faker.name.firstName() + faker.name.lastName(),
    likes: Math.floor(Math.random() * 5,000 + 1,000),
    followers: Math.floor(Math.random() * 3,000 + 600),
    reposts: Math.floor(Math.random() * 800 + 160),
    plays: Math.floor(Math.random() * 20,000 + 5,000),
    release_date: faker.date.past(),
    Comments: []
  }
  let randomComs = Math.floor(Math.random() * 30)
  for (var j = 0; i < randomComs; j++) {
    let comment = {
      user_photo: faker.image.imageURL(),
      username: faker.internet.userName(),
      time: faker.date.recent(),
      comment_body: faker.lorem.sentence(),
      timestamp: true,
      Replies: []
    }
    song.Comments.push(comment);
    let randomReps = Math.floor(Math.random() * 2)
    for (var k = 0; k < randomReps; k++) {
      let reply = {
        user_photo: faker.image.imageURL(),
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
    .then(() => db.disconnect())
    .catch((err) => {
      console.log('failed to seed data');
    });
};