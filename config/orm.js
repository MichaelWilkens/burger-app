var connection = require("../config/connection.js");

var orm = {
    all: function(tablename, cb){
        connection.query("SELECT * FROM " + tablename + ";", function(err, data){
            if (err) throw err;
            cb(data);
        });
    },
    create: function(burgerName, cb){
        connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [burgerName], function(err, data){
            if (err) throw err;
            cb(data)
        })
    },
    update: function(id, cb){
        connection.query("UPDATE burgers SET devoured = true WHERE id = (?)", [id], function(err, data){
            if(err) throw err;
            cb(data);
        })
    }
};

module.exports = orm;