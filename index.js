
var app = require('./server/server.js');

var port = process.env.PORT || 8000;
// var url = process.env.URL || 'localhost';

app.listen(port);

console.log('Listening on', port);
var results = [];

// DATABASE VARIABLES
var pg = require('pg');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Connection string for our database
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/Martial-One';

// ROUTING TO GET DATA FROM DB
app.post('/db/events', function(req, res){
  // when using curl, data will be sent here
  pg.connect(connectionString, function(err, client, done){
    // client.query('INSERT INTO events(id,name) values($1,$2)', [1,'cris Testing']);
  });
});


app.get('/db/events', function(req, res){
  pg.connect(connectionString,function(err, client, done){
    // SQL query to get data
    var query = client.query("SELECT data FROM newEvents;");
    query.on('row', function(row){
      results.push(row.data);
    });

    // after all data is returned, close connection to db
    query.on('end', function(){
      client.end();
      return res.json(results);
    }); 

    // Handle Errors
    if(err){
      console.log(err);
    }
  });
});

