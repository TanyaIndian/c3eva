const express = require("express")
const connect = require("./config/db")
const app = express()
app.use(express.json())

const usercontroller = require("./controller/user.con")
const bookcontroller = require("./controller/book.con")
const commentcontroller = require("./controller/comment.con")
const pubcontroller = require("./controller/pub.con")

app.use("/user",usercontroller)
app.use("/book",bookcontroller)
app.use("/comment",commentcontroller)
app.use("/pub",pubcontroller)






app.listen(5000,async()=>
{
    await connect()
    console.log("listening at 5000")
})