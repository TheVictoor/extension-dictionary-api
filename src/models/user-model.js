const mongoose = require('mongoose');

const { Schema } = mongoose;

const schema = new Schema({
  host: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  lastRequest: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('User', schema);
