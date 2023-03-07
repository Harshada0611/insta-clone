const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    author:String,
    location:String,
    description:String,
    imgUrl:String
})


module.exports=mongoose.model('postdata',userSchema)

