var Sequelize = require('sequelize');
var db = require('./_db');
var Hotel = require('./hotel');
var Activity = require('./activity');
var Restaurant = require('./restaurant');

var Day = db.define('day', {})

Day.belongsTo(Hotel)
Day.belongsToMany(Restaurant, {through: 'day_restaurant'})
Day.belongsToMany(Activity, {through: 'day_activity'})

module.exports = Day;