const express = require('express');
const multer =require('multer')
const multerS3 =require('multer-s3')
const AWS = require('aws-sdk')
require('dotenv').config();

const BUCKET_NAME =process.env.BUCKET_NAME
const REGION = process.env.REGION
const ACCESS_KEY =process.env.ACCESS_KEY
const SECRET_KEY =process.env.SECRET_KEY

// s3 client
const s3 = new AWS.S3({
    credentials:{
         accessKeyId:ACCESS_KEY,
         secretAccessKey:SECRET_KEY
    },
    region:REGION,
})

const uploadWithMulter =()=>multer({
    storage:multerS3({
        s3:s3,
        bucket:BUCKET_NAME,
        metadata:function(req,file,cb){
            cb(null,{fieldname:file.fieldname})
        },
        key:function(req,file,cb){
            cb(null,file.originalname)
        }
    })
}).array("s3Images",2)

uploadToAws =(req,res)=>{
   const upload = uploadWithMulter();

   upload(req,res,err =>{
    if(err){
        console.log(err);
        res.json({err,msg:"error while uploading photo"});
        return 
    }
    res.json({msg:"file uploaded succesfully",files:req.files})
   })
}


fetchimages =(req,res)=>{
    s3.listObjects({Bucket:BUCKET_NAME}).promise().then(data=>{
        console.log(data);
        let baseurl="https://demo-project-app.s3.ap-south-1.amazonaws.com/"
       let urlarray = data.Contents.map(e=> baseurl+e.Key);
       res.status(200).json({urlarray})
    })
}






const router =express.Router();
router.post('/upload',uploadToAws)
router.get("/fetchall",fetchimages);

module.exports =router;