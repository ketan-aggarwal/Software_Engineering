
var mongoose = require('mongoose');
 
var imageSchema = new mongoose.Schema({
    name: String,
    name1: String,
    name2: String,
    name3: String,
    name4: String,
    img:
    {
        data: Buffer,
        contentType: String
    }
});
 
//Image is a model which has a schema imageSchema
 
module.exports = new mongoose.model('Image', imageSchema);