var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports.mongoose = mongoose;
module.exports.Schema = Schema;

//Connect to cloud database
var username = "";
var password = "";
var address = "";
connect();

function connect(){
	var url = 'mongodb://'+username+':'+password+address;
	mongoose.connect(url);
}

function disconnect(){
	mongoose.disconnect();
}