// Publication Model ( Publication is the company which releases thepub )

// name ( references post collection)
// timestamps (string, required)


const mongoose = require("mongoose")
const pubSchema = new mongoose.Schema({
    name : {type:String,required:true},
    bookId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"book"
    }
    
   
},
{
    timestamps:true,
    versionKey:false
})
const Pub = mongoose.model("pub",pubSchema)
module.exports =Pub