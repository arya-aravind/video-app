var mongoose = require('mongoose');  
var UserSchema = new mongoose.Schema({  
  video_name: String,
  author: String,
  filename: String,
 
});
mongoose.model('Video', UserSchema);

module.exports = mongoose.model('Video');