const express = require('express')
const router = express.Router()
const { json } = require('body-parser')
var {User} = require('../model/admin')
router.post('/',(req,res)=>{
    User.findOne({login:req.body.login,password:req.body.password})
    .then(user=>{
        if(!user){
            res.sendStatus(204);
        }
        else{
            res.send("yes, u are the owner")
        }
    })
})
module.exports=router