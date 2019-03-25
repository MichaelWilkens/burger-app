var orm = require("../config/orm.js");

var burger = {
    all: function(tablename, cb){
        orm.all(tablename, function(data){
            cb(data);
        });
    },
    create: function(burgerName, cb){
        orm.create(burgerName, function(data){
            cb(data);
        });
    },
    update: function(id, cb){
        orm.update(id, function(data){
            cb(data);
        })
    }
};

module.exports = burger;


// var burger = {
//   all: function(cb) {
//     orm.all("cats", function(res) {
//       cb(res);
//     });
//   },
//   // The variables cols and vals are arrays.
//   create: function(cols, vals, cb) {
//     orm.create("cats", cols, vals, function(res) {
//       cb(res);
//     });
//   },
//   update: function(objColVals, condition, cb) {
//     orm.update("cats", objColVals, condition, function(res) {
//       cb(res);
//     });
//   },
//   delete: function(condition, cb) {
//     orm.delete("cats", condition, function(res) {
//       cb(res);
//     });
//   }
// };

// Export the database functions for the controller (catsController.js).
// module.exports = cat;
