const express =require('express');
const app =express();

app.get('/',(req,res)=>{
    res.send("this is first home page");
})
app.get('/page1',(req,res)=>{
    res.send("this is page 1");
})
app.get('/services',(req,res)=>{
    res.send("<ul><li>1</li><li>2</li><li>3</li></ul>")
})
app.post('/login',(req,res)=>{
    res.send("login success");
})
app.listen(8080,()=>console.log('server started at port 8000'))