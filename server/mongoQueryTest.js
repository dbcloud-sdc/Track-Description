var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/track_descriptions');

var connection = mongoose.connection;

connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', function () {
  console.time('MongoDB Call');
    connection.db.collection("songs", function(err, collection){
        collection.find({id: 9999998}).toArray(function(err, data){
          console.log(data);
            connection.db.collection("artists", function(err, collection){
              collection.find({id: data[0].artist_id}).toArray(function(err, data) {
                console.log(data[0]);
                console.timeEnd('MongoDB Call');
              }); // it will print your collection data
        })
    });
  })
});