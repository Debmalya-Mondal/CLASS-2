const ex=require("express")
const app=ex()

app.get("/",(req,res)=>{
    res.send(`
    <a href="/home">HOME</a>
    <a href="/about">ABOUT</a>
    <a href="/contact">CONTACT</a>
    <a href="/log in">LOGIN</a>
    <a href="/sign up">SIGN UP</a>
    
    `)

})

app.get("/home",(req,res)=>{
    res.send("<h1>THIS IS HOME PAGE</h1>")
})

app.get("/about",(req,res)=>{
    res.send("<h1>THIS IS ABOUT PAGE</h1>")
})

app.get("/contact",(req,res)=>{
    res.send("<h1>THIS IS CONTACT PAGE</h1>")
})

app.get("/log in",(req,res)=>{
    res.send("<h1>THIS IS LOG IN PAGE</h1>")
})

app.get("/sign up",(req,res)=>{
    res.send("<h1>THIS IS SIGN UP PAGE</h1>")
})

app.listen(7001)