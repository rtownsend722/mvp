var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/concerts', function(err, db) {
    if (err) {
        console.log('Error:', err);
    } else {
        console.log('Database is connected to server!!');
    }
});


var concertSchema = mongoose.Schema({
  showId: {type: Number, unique: true},
  artist: {type: String},
  date: {type: String},
  venue: {type: String},
  city: {type: String},
  state: {type: String},
  ticketUrl: {type: String},
  saved: {type: Boolean}
});

var Concert = mongoose.model('Concert', concertSchema);

var update = (showId, artist, date, venue, city, state, ticketUrl, saved) => {
  let concert = new Concert({
    showId: showId,
    artist: artist, 
    date: date,
    venue: venue,
    city: city,
    state: state,
    ticketUrl: ticketUrl,
    saved: saved
  });
  concert.save(function(err, concert) {
    if (err) {
      return console.log(err);
    }
  });
};

var retrieve = () => {
  var query = Concert.find({
    saved: 1
  }).
  select({
    showId: 1,
    artist: 1, 
    date: 1,
    venue: 1,
    city: 1,
    state: 1,
    ticketUrl: 1,
  });
  return query;
}

var remove = (id, callback) => {
  console.log(id);
  var query = Concert.remove({
    showId: id
  });
  return query;
}

module.exports.db = db;
module.exports.update = update;
module.exports.retrieve = retrieve;
module.exports.remove = remove;