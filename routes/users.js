const express = require('express');
const userController= require('../controller/user')
const router = express.Router();

router
.post('/',userController.createQuote)
.get('/',userController.getAllQuotes)
.get('/:id',userController.getQuote)
.put('/:id',userController.replaceQuote)
.patch('/:id',userController.updateQuote)
.delete('/:id',userController.deleteQuote)
//patch for update only desired one
exports.routes= router;