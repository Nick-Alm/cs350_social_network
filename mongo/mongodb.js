
/**
This file contains the information necessary to create the connection to the mongodb server that is hosted by a third-party cloud vendor
 **/

var mongoose = require('mongoose');
mongoose.connect('mongodb://nick-alm:Eye45678@ds137090.mlab.com:37090/mytest', { useMongoClient: true });
mongoose.Promise = global.Promise;

var user = require('./user_model.js');

