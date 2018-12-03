// Test insert to DB
// const seedDb = require("./models/seed").seedDb;

// Initialize Express
const express = require("express");
const app = express();
// const router = app.Router(); ///   to use router as sub division

// Import routes
const router = require("./routers/router.js");
const proposalRouter = require("./routers/proposalRouter");

// Import Node native modules
const http = require("http");
const path = require("path");

// Import Mongoose
const mongoose = require("mongoose");
// Import mySql
// const mysql = require("mysql");
const sqlDb = require("./sqlDatabase/models");

// Import Middleware
//const morgan = require("morgan"); // Helps us develop and debug locally
const cors = require("cors"); // Helps us bypass CORS issues when developing locally
const bodyParser = require("body-parser"); // Helps us extract features from req.body

class App {
  constructor() {
    this.port = process.env.PORT || 3090;
    this.server = http.createServer(app);
    this.server.timeout = 100000;
    this.initDb();
    this.initMiddleware();
    this.run();
  }
  //mongodb://localhost:27017/userdatabase
  //mongodb://devstart-admin:DevStartIs2Cool@ds231643.mlab.com:31643/devstart
  initDb() {
    try {
      this.mongodb = mongoose.connect(
        process.env.MONGODB_URI ||
          "mongodb://devstart-admin:DevStartIs2Cool@ds231643.mlab.com:31643/devstart",

        {
          useNewUrlParser: true,
          useFindAndModify: false
        } // Helps us avoid deprecation errors.
      );
      sqlDb.sequelize.sync({ force: false }).then(function() {
        console.log("SQL databse is connected");
      });

      // Put a Sequelize connection here... ex: this.sqldb = sequelize connection

      console.log("Successfully connected to database.");
    } catch (error) {
      console.log("Failed to connect to MongoDB.", error);
    }
  }
  initMiddleware() {
    //app.use(cors());
    app.use(bodyParser.json({ type: "*/*" })); // Type indicates ALL header types OK
    app.use(express.static(path.resolve(__dirname, "..", "..", "public"))); // Serve files in our Rect app public directory
    router(app);
    proposalRouter(app);

    let PORT = process.env.PORT || 3080;
  }
  run() {
    this.server.listen(this.port, () => {
      console.log(`Server listening on port ${this.port}`);
    });
  }
}

new App();

process.on("SIGINT", function() {
  console.log("\nGracefully shutting down from SIGINT (Ctrl-C)");
  process.exit();
});
