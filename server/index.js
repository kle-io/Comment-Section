const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = require ('../database/data.js');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../public'));

app.get('/api/songs', (req, res) => {
  db.getAll((err, data) => {
    if (err) {
      console.log('failed to get data')
      res.sendStatus(404)
    } else {
      console.log('successfully got data')
      res.send(data)
    }
  })
});

app.post('/api/comments', (req, res) => {
  db.postComment(req.body, (err, success) => {
    if (err) {
      console.log('failed to post data')
      res.sendStatus(400)
    } else {
      console.log('comment posted')
      res.sendStatus(201)
    }
  })
})

app.post('/api/replies', (req, res) => {
  db.postReply(req.body, (err, success) => {
    if (err) {
      console.log('failed to post data')
      res.sendStatus(400)
    } else {
      console.log('reply posted')
      res.sendStatus(201)
    }
  })
})

app.listen(PORT, () => (
  console.log(`listening in on port ${PORT}`))
);
