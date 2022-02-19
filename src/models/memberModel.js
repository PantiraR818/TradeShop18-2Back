const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const memberSchema = new Schema({
    name : {
       type : String,
       required : true
    },
    tel : String,
    sex : String,
    // date : { timestamps: true },
    birthday : String,
    date: { type: Date, default: Date.now },
    address : String,
    email : String,
    lineId : String,
    password : String
});

module.exports = mongoose.model("Member", memberSchema);