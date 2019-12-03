const db = require('../database/index.js');
const { Song } = require('./dummydata.js');
const faker = require('faker');

const songData = [];
for (var i = 0; i < 100; i++) {
  let song = {
    artist: faker.fake({name.firstName} {name.lastName}),
    likes: Math.floor(Math.random() * 5,000 + 1,000),
    followers: Math.floor(Math.random() * 3,000 + 600),
    reposts: Math.floor(Math.random() * 800 + 160),
    plays: Math.floor(Math.random() * 20,000 + 5,000),
    Comments: []
  }
  let randomComs = Math.floor(Math.random() * 30)
  for (var j = 0; i < randomComs; j++) {
    let comment = {
      user_photo: faker.fake({image.imageURL}),
      username: faker.fake({internet.userName}),
      time: faker.fake({date.recent}),
      comment_body: faker.fake({lorem.sentence}),
      Replies: []
    }
    song.Comments.push(comment);
    let randomReps = Math.floor(Math.random() * 2)
    for (var k = 0; k < randomReps; k++) {
      let reply = {
        username: faker.fake({internet.userName}),
        user_photo: faker.fake({image.imageURL}),
        reply_body: faker.fake({lorem.sentence})
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