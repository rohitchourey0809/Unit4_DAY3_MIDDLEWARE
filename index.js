const express = require('express');
const app = express();

app.use(allBooks)

// params = { userId : "34", bookId :"8989" }
app.get("/books",(req, res) => {
    // console.log("Fetchingdata")
    return res.send({Book1:"GameOfThrones or book",
    Book2:"HarryPotter",Author:"rohit",bookName:req.name})
})

function allBooks(req, res,next) {
    // if(req.path = "/books")
    // { 
    //     req.bookName = "books"
    // }
    // console.log("re",req.path)
    console.log("Fetching all the books")
    next()
}

app.listen(50001,()=>{
    console.log("Listen")
})