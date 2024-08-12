const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
    Name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true }
})

module.exports =  mongoose.model('Game',GameSchema);
