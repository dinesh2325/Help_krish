const express=require("express")                        //using node module.....................
const app=express()
const ejs=require("ejs")
const path=require("path")
const collection =require("./mongodb")
app.use(express.json())                                 //as a body parser.......................
app.use(express.urlencoded({extended:false}))
const templatepath=path.join(__dirname,'../templates')
app.set("view engine","ejs")
app.set("views", templatepath)                         //for changing view to template............






//get post request..................................

app.get("/",function(req,res){
    res.render("login");
})

app.post("/login",async(req,res)=>{
    try{
        const check=await collection.findOne({name:req.body.name})
        if(check.password===req.body.password)
        {
            res.render("home")
        }
        else{
            res.send("invalid")
        }
    } 
    catch{
        res.render("wrong detail");
    }
})

app.get("/signup",function(req,res){
    res.render("signup");
})

app.post("/signup",async(req,res)=>{
    const data={
        name:req.body.name,
        password:req.body.password
    }
    await collection.insertMany([data])
    res.render("home");
})







//server setup......................
app.listen(3000,()=>{
    console.log("server is up")
})



