// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

// Get route for returning posts of a specific user email
  app.get("/api/posts/category/:email", function(req, res) {
    db.Post.findOne({
      where: {
        email: req.params.email,
        calories: null,
        limit: 1
    }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // POST route for saving a new user
  app.post("/api/index.html", function(req, res) {
    console.log(req.body);
    db.Post.create({
      name: req.body.name,
      email: req.body.email,
      height: req.bodyheight,
      weight: req.body.weight,
      age: req.body.age,
      gender: req.body.gender,
      calbudget: req.body.calbudget
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });
  
  // POST route for saving a new post
  app.post("/api/page2.html", function(req, res) {
    console.log(req.body);
    db.Post.create({
      name: req.body.name,
      email: req.body.email,
      height: req.bodyheight,
      weight: req.body.weight,
      age: req.body.age,
      gender: req.body.gender,
      calbudget: req.body.calbudget,
      indate: req.body.indate,
      calories: req.body.calories
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // DELETE route for deleting posts
  app.delete("/api/posts/:id", function(req, res) {
    db.Post.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // PUT route for updating posts
  // app.put("/api/posts", function(req, res) {
  //   db.Post.update(req.body,
  //     {
  //       where: {
  //         id: req.body.id
  //        }
  //     })
  //     .then(function(dbPost) {
  //       res.json(dbPost);
  //     });
  // });
};
