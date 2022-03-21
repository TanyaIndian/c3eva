const express = require("express")
const path = require("path")

const Pub = require("../model/publication.model")



router = express.Router()

router.post("/",async(req,res)=>
{
    
        try{
            
    
            const pub = await Pub.create(
                
            )
        return res.status(201).send(pub)
        }
        catch(err)
        {
            return res.status(500).send(err.message)
        }
    
})

module.exports = router