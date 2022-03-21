const express = require("express")
const path = require("path")

const Book = require("../model/book.model")
const uploads = require("../middleware/upload")


router = express.Router()

router.post("/",uploads.single("coverImage"),async(req,res)=>
{
    
        try{
            
    
            const book = await Book.create(
                {
                    like : req.body.like,
    coverImage :req.file.path,
    content : req.body.content,
                }
            )
        return res.status(201).send(book)
        }
        catch(err)
        {
            return res.status(500).send(err.message)
        }
    
})

module.exports = router