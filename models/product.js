const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
    
    imgs: [
        { 
            type: String
        }],
        
    productId: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },

    category: { type: String, required: true},
    
    // qty: {type: Number, required: true},

}, { timestamps: true });

const Products = mongoose?.models?.Products || mongoose.model("Products", productsSchema);

export default Products;