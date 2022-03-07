const express = require('express');

const app  = express();
app.use(logger);

app.use(checkPermission);
app.get("libraries", (req,res) => {
console.log("libraries");
return res.send({ route: "/libraries",Permissions:true});
})

app.get("/books", (req,res) => {
    console.log("books");
    return res.send({ route: "/books"});
    })

app.use(checkPermission);
    
app.get("/authors", (req,res) => {
    console.log("authors");
    return res.send({  route: "/authors",Permissions:true});
    })
   

    function logger(req,res,next){

        console.log("before route handler");
        next();
        console.log("after route handler")
    }
    function checkPermission(res,req,next){
        if(req.path=="/authors"){
            console.log("checkPermission authors")
        }
        else if(req.path=="/libraries"){
            console.log("checkPermission libraries")
        }
        next();
    }

app.listen(5000,()=>{
    console.log('listening on port 5000')
})
