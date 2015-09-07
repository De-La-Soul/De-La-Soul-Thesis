'use strict';

////////////////////////////////////////////////
/// Middleware installation and router injection
////////////////////////////////////////////////

var bodyParser = require('body-parser');

module.exports = function(app, express){

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../../public'));


var eventsRouter = express.Router();

app.use('/api/results', eventsRouter)

require('../events/eventsRoutes.js')(eventsRouter);

}


