
const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

// Connect
const connection = (closure) => {
    return MongoClient.connect('mongodb://<herokuadmin296>:<Awdr1234>@ds147274.mlab.com:47274/heroku_tdjrgd33', (err, db) => {
        if (err) return console.log(err);

        closure(db);
    });
};
