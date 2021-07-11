const dbConfig = require('../config/config.js');
const mongoose = require('mongoose');

//Use Node.js native promise
mongoose.promise = global.promise;

const db = {}; 
		db.mongoose = mongoose;
		db.url = dbConfig.url;
		db.tutorial = require('./model.js')(mongoose); //이건 형변환인가

module.exports = db;


