const mongoose = require('mongoose')
const Product = mongoose.model('Product',{
    name:{
        type:String
    },
    rate:{
      type:String
    },
    image:{
        type:String
    }
})
module.exports={Product};