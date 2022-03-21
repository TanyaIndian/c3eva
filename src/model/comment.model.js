const mongoose = require("mongoose")
const commentSchema = new mongoose.Schema({
    body : {type:Number,required:true},
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    bookId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"book"
    }
    
   
},
{
    timestamps:true,
    versionKey:false
})
const Comment = mongoose.model("comment",commentSchema)
module.exports =Comment