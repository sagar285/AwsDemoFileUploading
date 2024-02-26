const express =require("express")
const app=express();
require("dotenv").config();
const cors =require("cors");
const s3router = require("./s3upload")


app.use(cors({origin:"*"}))
app.use("/image",s3router);

app.listen(5000,()=>{
    console.log("server listening on 5000");
})



