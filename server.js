var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
//var mongodb = require("mongodb");
var mongoose = require("mongoose");
var methodOverride = require('method-override');
//var ObjectID = mongodb.ObjectID;


var HOMEPAGE = "index";
var USER_COLLECTION = "users";



if (process.env.MONGODB_URI == undefined) {
  process.env.MONGODB_URI = "mongodb://heroku_tdjrgd33:k3j5qi89b97t5lr0jo2arb7umt@ds147274.mlab.com:47274/heroku_tdjrgd33";
}

mongoose.connect(process.env.MONGODB_URI, {
  server: {
     reconnectTries: Number.MIN_VALUE
  },
  useMongoClient: true
});

var app = express();
var distDir = __dirname + "/dist";
app.set('views', distDir);
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(distDir, 'src')));
// app.use(express.static(path.join(__dirname, 'dist', 'src', 'app')));
app.use(express.static(distDir));
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());


app.listen(4500, ()=>{
  console.log("App started");
});

var Schema = mongoose.Schema;
var UserSchema = new Schema({
  username: String,
  created: {
      date: Date
  },
  roles: Array,
  password: String,
  email: String,
  phone: String,
  name: String,
  profileData: Object
});

var User = mongoose.model('User', UserSchema);




app.use((req, res, next) => {
  res.header("Content-Type", 'application/json');
  next();
});



app.use(function(req,res,next){
  req.db = db;
  next();
});

///API code


// function handleError(res, reason, message, code) {
//   console.log("ERROR: " + reason);
//   res.status(code || 500).json({ "error": message });
// }
// goHome = (resp) => {
//   resp.status(200).sendFile(path.join(distDir + '/index.html'));
// }


app.get("/api/users", function (req, res) {
  User.find((err, users) => {
    if(err)
      res.send(err);
    res.json(todos);
  });
});

app.post("/api/users", function (req, res) {
  User.create({
    text : req.body.text,
    done : false
  }, (err, user) => {
    if(err)
      res.send(err);
    
      User.find((err, users) =>{
        if(err)
          res.send(err);
        res.json(users);
      })
  });
});


app.put("/api/users/:username", function (req, res) {

});

app.delete("/api/users/:username", function (req, res) {

});


app.get('*', (req, res)=> {
  res.sendFile('./dist/index.html');
});








//ERROR handling

// app.get('*', function (req, res, next) {
//   goHome();
// });

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      res.render('error', {
          message: err.message,
          error: err
      });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
      message: err.message,
      error: {}
  });
});