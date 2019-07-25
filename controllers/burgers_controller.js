//establishing express connection
var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    res.redirect("/burgers");
  });

//get route for all burgerData
router.get("/burgers", function(req, res) {
  // express callback response by calling all burgerData
  burger.all(function(burgerData) {
    res.render("index", { burger_data: burgerData });
  });
});

// post route for burger_name
router.post("/burgers/create", function(req, res) {
  burger.create(
    req.body.burger_name, function(result) {
    // console log the results
    console.log(result);
    //redirect user to / (burger page)
    res.redirect("/");
  });
});


// put route for the burger id
router.put("/burgers/:id", function(req, res) {
  burger.update(
    req.params.id, function(result) {
    //console log results
    console.log(result);
    //send back responses
    res.sendStatus(200);
    });
});

// Export routes for server.js to use.
module.exports = router;
