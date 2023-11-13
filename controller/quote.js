const fs =require('fs')
const model = require('../Model/mquote')
const mquote = model.Quotes;

exports.createQuote = async (req, res) => {
    try {
        const quotex = new mquote(req.body);
        const savedQuote = await quotex.save();
        console.log(savedQuote);
        res.status(201).json(savedQuote);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.getAllQuotes = async (req,res)=>{
   const quotes= await mquote.find()
    res.json(quotes );
}
exports.getQuote = async (req,res)=>{
    const id = +req.params.id;
    console.log(id)
    const quoteobj =  await mquote.findOne({id:id})
    res.json(quoteobj)
}
///oooooooooooooooooo7.11
exports.replaceQuote= async (req,res)=>{
    const id= +req.params.id;
      try{ 
        const doc =  await mquote.findOneAndReplace({id:id},req.body,{new:true}); 
        res.json(doc)
    }
    catch(err){
        console.log(err);
        res.json(err);
    }
}
exports.updateQuote= async (req,res)=>{
    const id= +req.params.id;
    try{ 
        const doc =  await mquote.findOneAndUpdate({id:id},req.body,{new:true}); 
        res.json(doc)
    }
    catch(err){
        console.log(err);
        res.json(err);
    }
}
exports.deleteQuote=async (req,res)=>{
    const id= +req.params.id;
    try{ 
        const doc =  await mquote.findOneAndDelete({id:id}); 
        res.json(doc)
    }
    catch(err){
        console.log(err);
        res.json(err);
    }
}



//POST: is used to create an entity

//PUT: is used to update/replace an existing entity where you must send the entire representation of the entity as you wish for it to be stored

//PATCH: is used to update an entity where you send only the fields that need to be updated