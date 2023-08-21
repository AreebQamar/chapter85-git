const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    email: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    password: {type: String, required: true},
    phone: {type: Number, require: true}

},{timestamps: true});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
