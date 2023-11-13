const fs =require('fs')
// const index = fs.readFileSync('index.html','utf-8')
const data= JSON.parse(fs.readFileSync('data2.json','utf-8'))
const users = data.users;

exports.createQuote = (req,res)=>{
    console.log(req.body);
    users.push(req.body);
    res.json(req.body)
}
exports.getAllQuotes = (req,res)=>{
    // res.sendFile('C:/Users/MADHUR GAUR/Desktop/backend/index.html')
    res.json(users);
}
exports.getQuote = (req,res)=>{
    const id = +req.params.id;
    console.log(id)
    const quoteobj =  users.find(q=>q.id===id)
    res.json(quoteobj)
}
exports.replaceQuote= (req,res)=>{
    const id= +req.params.id;
    const quoteIndex =  users.findIndex(q=>q.id===id);
    users.splice(quoteIndex,1,{...req.body, id:id})
    res.json( users[id-1])
}
exports.updateQuote=(req,res)=>{
    const id= +req.params.id;
    const quoteIndex =  users.findIndex(q=>q.id===id);
    const quoteAtindex=  users[quoteIndex];
    users.splice(quoteIndex,1,{...quoteAtindex,...req.body});
}
exports.deleteQuote=(req,res)=>{
    const id= +req.params.id;
    const quoteIndex =  users.findIndex(q=>q.id===id);
    const quoteTobeDelete=  users[quoteIndex];
    users.splice(quoteIndex,1);
    res.status(201).json(quoteTobeDelete); 
}