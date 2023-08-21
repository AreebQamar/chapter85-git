const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

    productId: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String },
    
    varients:[
        {
            
        }
    ],

    //qty: {type: Number},
    imgs: [
        { 
            type: String
        }],
    price: { type: Number, required: true },

    // availableQuantity: {type: Number, required: true},
    catagory: { type: String, required: true },

}, { timestamps: true });

const Product = mongoose?.models?.Product || mongoose.model("Product", productSchema);

export default Product;