const express =require("express")
const app =express()
const dotenv = require("dotenv")
dotenv.config()
const port =process.env.PORT || 8000

const mongoose =require("mongoose")
app.use(express.json())

mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log("connection succesfull")
})


const userschema = new mongoose.Schema({
    name:{
        type:String
    },
    name:{
        type:String
    },
    email:{
        type:String
    },
})

const usermodel = mongoose.model("usermodel",userschema);


app.post("/register",async(req,res)=>{
       const name="sagar"
       const  email="sagar@gmail.com"
       const  password="1234"
       const data = await usermodel.create({
        name,email,password
       })
       return res.status(200).send(data);
    
})

app.get("/",async(req,res)=>{
    const data = await usermodel.find({})
    return res.status(200).send(data)
})







app.listen(port,()=>{
    console.log(`server liteni on portno ${port}`)
})