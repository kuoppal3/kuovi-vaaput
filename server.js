//
// Kuovi-vaaput server
//

var http = require('http');
var path = require('path');

var express = require('express');
var routes = require('./routes')
  , tilaus = require('./routes/tilaus')
  , yhteystiedot = require('./routes/yhteystiedot')
  , vaaput = require('./routes/vaaput')
  , kuvia = require('./routes/kuvia');

var app = express();

app.set('port', process.env.PORT);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('secret'));
app.use(express.session({secret: 'secrettoken'}));
app.use(express.bodyParser());

app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// Middleware for 404
app.use(function(req, res) {
  res.status(400);
  res.render('404');
});

// Database connection
var mongoose = require("mongoose");

// Cloud9 local db
//mongoose.connect('mongodb://' + process.env.IP + '/data');

// Azure mongolab db
mongoose.connect(process.env.CUSTOMCONNSTR_MONGOLAB_URI + '/data');

var db = mongoose.connection;
db.once('open', function callback () {
  console.log("db connected");
});

// Routes
app.get('/', routes.index);
app.get('/tilaus', tilaus.tilaus);
app.post('/tilaus', tilaus.lisaaTilaus);
app.get('/tilaukset', tilaus.tilaukset);
app.get('/vaaput', vaaput.vaaput);
app.get('/vaaput/50mm/varikartta', vaaput.varikartta50mm);
app.get('/vaaput/120mm/3d', vaaput.vaappu3d);
app.get('/kuvat', kuvia.kuvat);
app.get('/yhteystiedot', yhteystiedot.yhteystiedot);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
