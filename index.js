const bodyParser=require("body-parser");
const express= require('express');
const app = express();
const port = process.env.PORT || 4000;
const cors = require('cors');
const userRoute = require('./router/userRoute.js')
const productRoute = require('./router/productRoute')
const log = require('./router/loginRoute.js')
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://system:root@cluster0.27piq.mongodb.net/letsea?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false
})
.then((res)=>console.log('database connection succesfull'))
.catch((err)=>console.log(err))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())

app.listen(port,()=>
    console.log('server is working')
)
app.use('/adm',userRoute)
app.use('/login',log)
app.use('/product',productRoute)