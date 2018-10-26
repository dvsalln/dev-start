const path = require("path");
const db = require("./controllers/controller");

var User = require("../models/user.js")
module.exports = function(app) {

app.get('*', function(req, res, next){ 
  res.sendFile(__dirname, '../client/build/index.html');
});

  // Wire up API routes here!
};
