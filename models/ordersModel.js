const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const orderSchema = new Schema({

    pickupLocation : {
        type : String,
        required : true
    },

    pickupDate : {
        type : Date,
        required : true
    },

    returnDate : {
        type : Date,
        required : true
    },

    packageType : {
        type : String,
    },

    vehicleType : {
        type : String,
        required : true
    },
},{

    
    
    
});
 const Order = mongoose.model("Order",orderSchema);

 module.exports = Order;

