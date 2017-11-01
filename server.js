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
  app.listen(process.env.PORT || 4500);
  console.log("App started");
  
});     // connect to mongoDB database on modulus.io

app.use(express.static(__dirname + '/dist'));                 // set the static files location /public/img will be /img for users
app.use(bodyParser.json({ limit: '50mb'}));                                     // parse application/json
app.use(bodyParser.json({ limit: '50mb', type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ limit: '50mb', 'extended':'true'}));            // parse application/x-www-form-urlencoded

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
  profileData: {
    url: String,
    gender: String,
    bio: String,
    profilePic: String
  }
});
var User = mongoose.model("User", UserSchema);

//API 
app.get('/api/v1/users', (req, res)=>{
  User.find((err, users)=>{
    if(err){
      console.log(err);
      return null;
    }
    return res.json(users);
  });
});

app.post('/api/v1/users', (req, res)=>{
  User.create(req.body, (err, user)=>{
    if(err){
      console.log(err);
      return null;
    }
    return res.json(user);       
  });
});

app.put('/api/v1/users/:id', (req, res)=>{
  var updateDoc = req.body;
  User.findByIdAndUpdate(req.params.id, updateDoc, (err, user)=>{
    if(err){
      console.log(err);
      return null;
    }
    console.log("Update success!");
    return res.json(user);
  });
});

app.get('*', (req, res)=>{
  res.sendFile(__dirname + '/dist/index.html');
});

app.use((err, req, res, next)=>{
  if(err){
    res.send("\
    <head>\
    <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css' integrity='sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u' crossorigin='anonymous'>\
    </head>\
    <body>\
      <div class='container center-block'> \
        <div class='row'> \
          <div class='col-md-6 center-block'> \
            <p class='alert alert-danger'>"+ err.message +"</p>\
          </div> \
        </div>\
      </div> \
    </body>\
    ");
  }
  next();
})

