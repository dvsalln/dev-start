const path = require("path");
const developer = require("../controllers/developerController.js");

module.exports = function(app) {
  // Ensures your react app is being served at all times
  app.get("*", function(req, res, next) {
    res.sendFile(__dirname, "../client/build/index.html");
  });

  // Wire up API routes here!
  app.get("/api/developer/account", function(req, res, next) {
    developer
      .readDevAccount()
      .then(function(data) {
        console.log("successfully get accountinfo from database.");
        res.json(data);
      })
      .catch(function(err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
  });

  app.post("/api/developer/account/create", function(req, res, next) {
    console.log("let's see what request's body is: ", req.body);
    developer
      .devAccountprocess(req.body)
      .then(function(data) {
        console.log("successfully create/update developer account.");
        res.json(data);
      })
      .catch(function(err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
  });

  app.get("/test", function(req, res, next) {
    console.log("HIT IT");
    const data = [
      "this ",
      "is ",
      "mock ",
      "data ",
      "take ",
      "this ",
      "shit!!!"
    ];
    res.json(data);
  });
};
