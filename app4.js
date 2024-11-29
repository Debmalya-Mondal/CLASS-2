const express=require('express')
const app=express()

app.get("/json",(req,res)=>{
    res.send([
        {"name":"Sounak","roll":1},
        {"name":"Sudip","roll":2},
        {"name":"Rajat","roll":3}
    ])
        
})


app.listen(6010)