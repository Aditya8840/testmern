const express = require('express');
const quoteController= require('../controller/quote')
const router = express.Router();

router
.post('/',quoteController.createQuote)
.get('/',quoteController.getAllQuotes)
.get('/:id',quoteController.getQuote)
.put('/:id',quoteController.replaceQuote)
.patch('/:id',quoteController.updateQuote)
.delete('/:id',quoteController.deleteQuote)
//patch for update only desired one


exports.routes= router;
