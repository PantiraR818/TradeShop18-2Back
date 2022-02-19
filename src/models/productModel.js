const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    details : String,
    img: String,

    poster : {
        postName: String,
        postEmail: String,
        postTel: String
    },
    productStatus : Boolean ,
    category :{
        name : String
    },
    traderRequest : [{
        requester : {
        requestName: String,
        requestEmail: String,
        requestTel: String
        },
        itemToTrade : {
        itemName : String,
        itemDetails : String
        },
        requestDated : {
            date: { type: Date, default: Date.now },
            status : Boolean
        }
    }]
});

module.exports = mongoose.model("Product", productSchema);

