var mySql = require('mysql');
var connectionString = require('./mySqlConnection.js');

var mySqlConnectionProvider = {

getSqlConnection : function() {
        var connection = mySql.createConnection(connectionString.mySqlConnection.connectionString);

connection.connect(function (error) {
            if (error) { throw error }
            console.log("My SQL connection became succesful");
        });
        return connection;
    },

closeSqlConnection : function(currentConnection) {
    
        currentConnection.end(function (error) {
            if (error) { throw error }
            console.log("My Sql connection closed");
        });
}


};

exports.mySqlProvider = mySqlConnectionProvider;