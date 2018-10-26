const mongoose = require("mongoose");
const Proposals = require("../models/proposals");
const User = require("../models/user");
const Friends = require("../../client/src/models/friends");
const Teams = require("../../client/src/models/teams");
const db = require("../models");



// Define database controllers (CRUD) here!

// Submit Sign Up Form (Create New User Document)
    app.post("/api/signup", function (req, res) {
        db.User.create(req.body).then(function (dbSignup) {
            res.json(dbSignup);
        });
    });
    
// Create New Developer's Profile
    app.post("/api/new", function (req, res) {
        console.log("New User: ");
        console.log(req.body);

        User.create(req.body).then(function (data) {
            res.json(data);

        });
    });

// Use Handlebars to render the user profile page
     app.get("/api/user", function (req, res) {

        User.findOne({
            where: {
                id: req.query.id
            }
        }).then(function (result) {
            // return res.json(result);
            console.log(result.dataValues);
            res.render("profile", result.dataValues);
        });
    });

// Edit Profile (Update)
    app.put("/api/user", function(req, res) {
        db.User.update(
        req.body,
        {
            where: {
            id: req.body.id
            }
        }).then(function(dbUser) {
        res.json(dbUser);
        });
    });

// Add Friend (Update)
    app.post("/api/friend/add", function (req, res) {
        console.log("New Friend: ");
        console.log(req.body);

        Friends.create(req.body).then(function (data) {
            res.json(data);

        });
    });

// Unfriend (Update)
    app.put("/api/friend/delete", function(req, res) {
        db.Friends.destroy(
        req.body,
        {
            where: {
            id: req.body.id
            }
        }).then(function(dbUser) {
        res.json(dbUser.Friends);
        });
    });
// Create Team
    app.post("/api/team/create", function (req, res) {
        console.log("New Team: ");
        console.log(req.body);

        Teams.create(req.body).then(function (data) {
            res.json(data);

        });
    });

// Join Team (Update)
    app.put("/api/team/join", function(req, res) {
        db.Teams.update(
        req.body,
        {
            where: {
            id: req.body.id
            }
        }).then(function(dbTeams) {
        res.json(dbTeams);
        });
    });

// GET route for getting all proposals
    app.get("/api/proposals", function(req, res) {
        var Proposals = {};
        if (req.Proposals.author_id) {
        Proposals.AuthorId = req.Proposals.author_id;
        }
        db.Proposals.findAll({
        where: Proposals
        }).then(function(dbProposals) {
        res.json(dbProposals);
        });
    });

// Save Proposal (Update)
    app.put("/api/proposals", function(req, res) {
        db.Proposals.update(
        req.body,
        {
            where: {
            id: req.body.id
            }
        }).then(function(dbProposals) {
        res.json(dbProposals);
        });
    });