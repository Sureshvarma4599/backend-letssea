const express = require('express')
const router = express.Router()
const { json } = require('body-parser')
var {User} = require('../model/admin')
router.get('/',(req,res)=>{
    User.find((err,docs)=>{
        if(!err){
            res.send(docs);
        }
        else{
            console.log(json.stringify(err))
        }
    })
})
router.post('/',(req,res)=>{
    var data = new User({
        login:req.body.login,
        password:req.body.password
    })
    data.save((err,docs)=>{
        if(!err){
            res.send(docs);
        }
        else{
            console.log(json.stringify(err))
        }
    })
})
module.exports=router
