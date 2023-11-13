const mongoose = require('mongoose');
const { Schema } = mongoose;

const quoteSchema = new Schema({
    id:{type:Number ,unique :true} ,
    quote: String,
    author: String
  });
 
  exports.Quotes = mongoose.model('Quotes', quoteSchema);