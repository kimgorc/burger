//require the orm file
var orm= require ("../config/orm.js");

//set burger to be able to reach all items, update and create
var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  insertOne: function(name, cb) {
    orm.insertOne("burgers", [
      "burger_name", "devoured"
    ], [
      name, false
    ], cb);
  },
  updateOne: function(id, cb) {
    var condition = "id=" + id;
    orm.updateOne("burgers", {
      devoured: true
    }, condition, cb);
  }
};
  
  // Export the database functions for the controller (catsController.js).
  module.exports = burger;
  