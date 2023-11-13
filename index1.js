const express =require ('express');
const server =express();

const auth=(req,res,next)=>{
    console.log(req.query);
    if(req.query.password==='987'){
        next()
    }else{
        res.sendStatus(201);
    }
}


server.get('/',auth,(req,res)=>{
    res.json({type:'GET'})
})
server.post('/',auth,(req,res)=>{
    res.json({type:'post'})
})
server.put('/',(req,res)=>{
    res.json({type:'put'})
})
server.delete('/',(req,res)=>{
    res.json({type:'delete'})
})
server.patch('/',(req,res)=>{
    res.json({type:'patch'})
})
server.listen(8080,(req,res)=>{
    console.log('server started')
});