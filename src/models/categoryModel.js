const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    categoryId : {
        type : String,
        required : true
    },
    name: { 
        type: String, 
        required: true }  
},
 { timestamps: true });

module.exports = mongoose.model("Category", categorySchema);