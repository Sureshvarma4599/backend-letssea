const express = require('express')
const router=express.Router()
const {json}= require('body-parser')
var ObjectId = require('mongoose').Types.ObjectId;
const {Product}=require('../model/product')
router.get('/',(req,res)=>{
    Product.find((err,docs)=>{
        if(!err){
            res.send(docs)
        }
        else{
            console.log(json.stringify(err))
        }
    })
})
router.post('/',(req,res)=>{
    var data = new Product({
        name:req.body.name,
        rate:req.body.rate,
        image:req.body.image
    })
    data.save((err,docs)=>{
        if(!err){
            res.send(docs)
        }
        else{
            console.log(json.stringify(err))
        }
    })
})
router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var data = {
        name : req.body.name,
         rate : req.body.rate,
         image : req.body.image
        
    };
    Product.findByIdAndUpdate(req.params.id, { $set: data }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in product Update :' + JSON.stringify(err, undefined, 2)); }
    });
});


router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Product.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in product Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});
module.exports=router