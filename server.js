var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;
var HOMEPAGE = "index";
var USER_COLLECTION = "users";


if (process.env.MONGODB_URI == undefined) {
  process.env.MONGODB_URI = "mongodb://heroku_tdjrgd33:k3j5qi89b97t5lr0jo2arb7umt@ds147274.mlab.com:47274/heroku_tdjrgd33";
}

var app = express();
app.use(bodyParser.json());

var distDir = __dirname + "/dist";
app.set('views', distDir);
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, 'dist', 'src')));
// app.use(express.static(path.join(__dirname, 'dist', 'src', 'app')));
app.use(express.static(distDir));


// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;
app.use((req, res, next) => {
  res.header("Content-Type", 'application/json');
  next();
});
// Connect to the database before starting the application server.
mongodb.MongoClient.connect(process.env.MONGODB_URI, (err, database) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = database;
  console.log("Database connection ready");

  // Initialize the app.
  var server = app.listen(process.env.PORT || 4500, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});


///API code

function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({ "error": message });
}
goHome = (resp) => {
  resp.status(200).sendFile(path.join(distDir + '/index.html'));
}

app.get(["/"], (req, res) => {
  goHome(res);
});

app.get("/api/users", function (req, res) {
  db.collection(USER_COLLECTION).find({}).toArray(function (err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get user details.");
    } else {
      res.status(200).json(docs);
    }
  });
});

app.post("/api/users", function (req, res) {
  db.collection(USER_COLLECTION).insertOne(newUser, function (err, doc) {
    if (err) {
      return res.redirect("/signup");
    } else {
      return res.status(201).json(doc.ops[0]);
    }
  });
});


app.get("/home/:username", function (req, res) {
  db.collection(USER_COLLECTION).find({ username: req.body.username }).toArray(function (err, docs) {
    console.log("USERNAME" + docs[0]);
  });
});

app.put("/api/users/:username", function (req, res) {
});

app.delete("/api/users/:username", function (req, res) {
});

//ERROR handling

app.get('*', function (req, res, next) {
  goHome();
});

app.use(function (err, req, res, next) {
  if (err.status !== 404) {
    return next();
  }
  goHome(res);
});