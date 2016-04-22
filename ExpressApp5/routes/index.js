
/*
 * GET home page.
 */

exports.index = function (req, res) {
    res.render('index', { title: 'Express', year: new Date().getFullYear() });
};

exports.about = function (req, res) {
    res.render('about', { title: 'About', year: new Date().getFullYear(), message: 'Your application description page' });
};

exports.contact = function (req, res) {
    res.render('contact', { title: 'Contact', year: new Date().getFullYear(), message: 'Your contact page' });
};

exports.countryList = function (req, res) {
    var countryDAO = require('../DAO/Connection/countryDAO.js');
    countryDAO.countryDAO.getAllcountries(function (countries) {
        console.log(countries);
        res.render('countryList', {
            countrieslist : countries
        });
        });
    
};
