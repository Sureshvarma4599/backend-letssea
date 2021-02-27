const mongoose = require('mongoose')
const User = mongoose.model('User',{
    login:{
        type:String
    },
    password:{
        type:String
    }
})
module.exports={User}