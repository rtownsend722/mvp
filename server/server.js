const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('../database/database.js').db;
const update = require('../database/database.js').update;
const retrieve = require('../database/database.js').retrieve;
const remove = require('../database/database.js').remove;
path = require('path');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname , '/../client')));

let port = 4568;

app.options('/concerts', function(req, res) {
  res.status(200).send('Allow: POST, OPTIONS');
});

app.post('/concerts', function(req, res) {
  console.log(req.body);
  update(req.body.showId, req.body.artist, req.body.date, req.body.venue, req.body.city, req.body.state, req.body.ticketUrl, req.body.saved)
  res.status(201).send('added');
});

app.get('/concerts', function(req, res) {
  let concertData = retrieve();
  concertData.exec(function(err, concerts) {
    if (err) {
      return console.log(err);
    } 
    res.status(200).send(concerts);
  });
});

app.post('/delete', function(req, res) {
  console.log('in the delete request');
  console.log(req.body.showId);
  let removedData = remove(req.body.showId);
  removedData.exec((err, data) => {
    if (err) {
      return console.log(err);
    }
    res.status(201).send('deleted');
  });
});


app.listen(port, () => {
  console.log(`listening on port ${port}`)
});

