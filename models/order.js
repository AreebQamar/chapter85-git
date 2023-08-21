const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
   
    products: [{
        productId:{type: String, required: true},
        qty: {type: Number, default: 1},
        size: {type: String},
        color: {type: String}
    }],
    
    email: {type: String, required: true},
    phone: {type: String, required: true},
    province: {type: String, required: true},
    city: {type: String, required: true},
    address: {type: String, required: true},
    status: {type: String, default: 'pending'}
    
},{timestamps: true});

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);

export default Order;