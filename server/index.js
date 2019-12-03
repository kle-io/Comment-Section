const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = require ('../database/data.js');

const app = express();
const PORT = 3123;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(__dirname + '/../client/dist'));

app.get('/api/songs', (err, data) => {
  db.getAll((err, data) => {
    if (err) {
      console.log('failed to get data')
      res.sendStatus(404)
    } else {
      console.log('successfully got data')
      res.json(data)
    }
  })
});

app.listen(PORT, () => (
  console.log(`listening in on port ${PORT}`))
);
