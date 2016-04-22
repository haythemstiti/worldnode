var Sqlprovider = require('./mySqlConnectionProvider.js');

var countryDAO = {
    getAllcountries : function (callback){

        var connection = Sqlprovider.mySqlProvider.getSqlConnection();
        var SqlStatment = "SELECT * FROM country";
        var countries = [];
        if (connection) {
            connection.query(SqlStatment, function (err, rows, fields) {

                rows.forEach(function (row) {
                    countries.push(row);
                });
                callback(countries);
            });
        }

        Sqlprovider.mySqlProvider.closeSqlConnection(connection);
    }
};

module.exports.countryDAO = countryDAO;