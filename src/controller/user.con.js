const express = require("express")
const path = require("path")
const { body, validationResult } = require('express-validation');
const User = require("../model/user.model")
const uploads = require("../middleware/upload")


router = express.Router()

router.post("/",uploads.single("profileImages"),body("firstName").custom((value)=>
{
    if(value.length<6 || value.length>30)
    {
        throw new Error("check your first name")
    }
    else{
        return true
    }
}),body("age").custom((value)=>
{
    if(value.length<1 || value.length>150)
    {
        throw new Error("Ivalid age")
    }
    else{
        return true
    }
}),async(req,res)=>
{
    
        try{
            const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
    
            const user = await User.create(
                {
                    firstName : req.body.firstName,
    lastName :req.body.lastName ,
    age : req.body.age,
    email :req.body.email ,
    profileImages : req.file.path
                }
            )
        return res.status(201).send(user)
        }
        catch(err)
        {
            return res.status(500).send(err.message)
        }
    
})

module.exports = router