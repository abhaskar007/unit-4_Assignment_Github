const express = require("express");

const app = express();

const books = require("./data");

app.get("/home",(req,res)=>{
    // console.log("users");

    return res.send("hello");
});

app.get("/books",(req,res)=>{
    // console.log("books");

    return res.send(books);
});
 app.listen(5000,() => {
     console.log('listining on port 5000')
 })