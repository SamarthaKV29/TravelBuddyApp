var express  = require('express');
var app      = express();                               // create our app w/ express
var mongoose = require('mongoose');                     // mongoose for mongodb
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)

if(!process.env.MONGODB_URI || process.env.MONGODB_URI == ""){
  process.env.MONGODB_URI = "mongodb://heroku_tdjrgd33:k3j5qi89b97t5lr0jo2arb7umt@ds147274.mlab.com:47274/heroku_tdjrgd33";
}


mongoose.connect(process.env.MONGODB_URI, {
  useMongoClient: true,
  socketTimeoutMS: 0,
  keepAlive: true,
  reconnectTries: 30
}, (err)=>{
  if(err){
    console.log(err.message);
  }
  app.listen(4500);
  console.log("App listening on port 4500");
  
});     // connect to mongoDB database on modulus.io

app.use(express.static(__dirname + '/dist'));                 // set the static files location /public/img will be /img for users                           // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

// listen (start app with node server.js) ======================================

//API Model
var UserSchema = new mongoose.Schema({
  username: String,
  created: {
    date: Date
  },
  roles: [],
  password: String,
  email: String,
  phone: String,
  name: String,
  profileData: {}
});
var User = mongoose.model("User", UserSchema);

//API 
app.get('/api/v1/users', (req, res)=>{
  User.find((err, users)=>{
    if(err){
      res.send("<p>DB error, please try again later</p>");
    }
    else{
      res.status(200).json(users);
    }
  });
});

app.post('/api/v1/users', (req, res)=>{
  if(req.body == {}){
    console.log("error");
  }
  else{
    User.create({
      text: req.body.text,
      done: false
    }, (err, user)=>{
      if(err)
        res.send("<p class='bg-warning text-danger'>" + err.message + "</p>");
        setTimeout(function() {
          res.redirect('/signup/:false');    
        }, 3000);
      if(user){
        res.redirect('/signup/:true');
      } 
    });
  }
});


app.get('*', (req, res)=>{
  res.sendFile('/dist/index.html');
});