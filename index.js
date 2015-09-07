var app = require('./server/server.js');

var port = process.env.PORT || 8000;
var url = process.env.URL || 'localhost';

app.listen(port, url);

console.log('Listening on', url, ':', port);