const mongoose=require("mongoose");
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://127.0.0.1:27017/mydb").then(()=>{
    console.log("mongodb connected");
})
.catch((error)=>{
    console.log(error);
})

const logInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection=new mongoose.model("Collection1",logInSchema)

module.exports=collection;
