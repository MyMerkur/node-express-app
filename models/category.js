const mongoose = require('mongoose');

categorySchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type: String,
        required:false
    }
   
});

module.exports = mongoose.model('Category',categorySchema);