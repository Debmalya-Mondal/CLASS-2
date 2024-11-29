const express=require('express')
const app=express()

app.get("/",(req,res)=>{
    res.send("<h1>Good Afternoon</h1>")

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

app.get("/login",(req,res)=>{
    res.send("<h1>THIS IS LOGI IN PAGE</h1>")
})


app.get("/html",(req,res)=>{
    res.send(`
        <table>
            <thead>
                <tr>
                   <th>BACKEND</th>
                    <th>FRONTEND</th>
                   </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <ul>
                                <li>NODE</li>
                                <li>EXPRESS</li>
                                <li>PYTHON</li>
                                <li>JAVA</li>
                                <li>PHP</li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>ANGULAR</li>
                                <li>REACT</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>

        <table>
        
    `)
})

app.listen(6007)